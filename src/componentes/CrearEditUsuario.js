import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BaseURL } from '../globalValues';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function CrearEditUsuario(props){

    //console.log(props.params.Usuario);
    const fechaNacDia = props.params.Usuario.fechaNacDia === undefined ? null : props.params.Usuario.fechaNacDia;
    const fechaNacMes = props.params.Usuario.fechaNacMes === undefined ? null : props.params.Usuario.fechaNacMes - 1;
    const fechaNacAno = props.params.Usuario.fechaNacAno === undefined ? null : props.params.Usuario.fechaNacAno;
    const idUsuario = props.params.Usuario.idUsuario === undefined ? 0 : props.params.Usuario.idUsuario;
    const idTipoIdentificacion = props.params.Usuario.idTipoIdentificacion === undefined ? 0 : props.params.Usuario.idTipoIdentificacion;
    const identificacion = props.params.Usuario.identificacion === undefined ? '' : props.params.Usuario.identificacion;
    const nombre = props.params.Usuario.nombre === undefined ? '' : props.params.Usuario.nombre;
    const apellido = props.params.Usuario.apellido === undefined ? '' : props.params.Usuario.apellido;
    const sexo = props.params.Usuario.sexo === undefined ? true : props.params.Usuario.sexo;
    const fechaNacimiento = props.params.Usuario.fechaNacimiento === undefined ? new Date(null) : new Date(fechaNacAno, fechaNacMes, fechaNacDia);
    const profesion = props.params.Usuario.profesion === undefined ? '' : props.params.Usuario.profesion;
    const idEstadoCivil = props.params.Usuario.idEstadoCivil === undefined ? 0 : props.params.Usuario.idEstadoCivil;

    const baseURLTipoID = BaseURL() + "TipoIdentificacion";
    const baseURLUsuarios = BaseURL() + "Usuarios";
    const [tiposID, setTiposID] = useState([]);
    const GetTiposIDs=async()=>{
           await axios.get(baseURLTipoID)
            .then(response=>{
                setTiposID(response.data);
            }).catch(error=>{
                console.log(error);
            })
        }
    
    const baseURLEstCivil = BaseURL() + "EstadoCivil";
    const [estadosCiviles, setEstadosCiviles] = useState([]);
    const GetEstCiviles=async()=>{
            await axios.get(baseURLEstCivil)
            .then(response=>{
                setEstadosCiviles(response.data);
                console.log(response.data);
            }).catch(error=>{
                console.log(error);
            })
        }
    
    const [usuarioData, SetusuarioData]=useState({
        IdTipoIdentificacion: idTipoIdentificacion,
        Identificacion: identificacion,
        Nombre: nombre,
        Apellido: apellido,
        Sexo: sexo,
        FechaNacimiento: fechaNacimiento,
        Profesion: profesion,
        IdEstadoCivil: idEstadoCivil
        });
    const handleChange=e=>{
        const {name, value}=e.target;
        let valInt = 0;
        if((name === "IdTipoIdentificacion" || name === "IdEstadoCivil") && value !== '0'){
            valInt = parseInt(value);
        }
        console.log(e.target);
        SetusuarioData({
            ...usuarioData, 
            [name]: valInt !== 0 ? valInt : value
            });
            console.log(usuarioData);
        }

        const handleChange2=e=>{
            console.log(e);
            SetusuarioData({
                ...usuarioData, 
                FechaNacimiento: e
                });
                console.log(usuarioData);
            }

    const handleChangeSexo=e=>{
        let sex = true;
        if(e.target.className === 'fen'){
            sex = false;
        }
        SetusuarioData({
            ...usuarioData, 
            Sexo: sex
            });
            console.log(usuarioData);
        }
    
    const [fechaNac, setFechaNac] = useState(fechaNacDia === null ? null : new Date(fechaNacAno, fechaNacMes, fechaNacDia));    

    const CrearEditarUsuario=async()=>{
        if(idUsuario == 0)
         {
            await axios.post(baseURLUsuarios, usuarioData)
            .then(response=>{
            alert('Usuario Creado correctamente');
            document.getElementById('btnCancelar').click();
            }).catch(error=>{
            console.log(error);
            })
         }
        else
        {
            await axios.put(baseURLUsuarios + "/" + idUsuario, usuarioData)
            .then(response=>{
                alert('Usuario modificado correctamente');
                document.getElementById('btnCancelar').click();
            }).catch(error=>{
            console.log(error);
            })
        }
        };


    useEffect(()=>{
        GetTiposIDs();
        GetEstCiviles();
    },[])

    return(<div className="row" >
                <div className="col-md-6">
                    <label>Tipo de Identificación:</label>
                    <div className="App">
                            <div className="form-group">
                                <select name="IdTipoIdentificacion" className="form-control" onChange={handleChange}>
                                    <option key="0" value="0">Seleccione...</option>
                                    {tiposID.map(item=>(
                                        <option key={item.idTipoIdentificacion} 
                                                value={item.idTipoIdentificacion} 
                                                selected={item.idTipoIdentificacion == idTipoIdentificacion ? "selected" : ""} >
                                            {item.tipoIdentificacionDesc}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    <br/>
                    <label>Identificación:</label>
                    <br/>
                    <input type="text" className="form-control" name="Identificacion" onChange={handleChange} defaultValue={identificacion} />
                    <br/>
                    <label>Nombres:</label>
                    <input type="text" className="form-control" name="Nombre" onChange={handleChange} defaultValue={nombre} />
                    <br/>
                    <label>Apellidos:</label>
                    <input type="text" className="form-control" name="Apellido" onChange={handleChange} defaultValue={apellido} />
                    <br/>
                    <label>Sexo:</label>
                    <div className="App">
                        <div className="form-group">
                            <input type="radio" name='sexo' defaultChecked onChange={handleChangeSexo} />Masculino&nbsp;&nbsp;&nbsp;
                            <input type="radio" name='sexo' className='fen' onChange={handleChangeSexo} />Femenino
                        </div>
                    </div>
                    <br/>
                    <label>Fecha de Nacimiento:</label>
                    <DatePicker 
                        selected={fechaNac} 
                        onChange={date => setFechaNac(date)} 
                        dateFormat={'dd/MM/yyyy'}
                        onSelect={handleChange2}
                        name="FechaNacimiento"
                        showYearDropdown
                        scrollableMonthYearDropdown
                    />
                    <br/>
                    <label>Profesión:</label>
                    <input type="text" className="form-control" name="Profesion" onChange={handleChange} defaultValue={profesion} />
                    <br/>
                    <label>Estado Civil:</label>
                    <div className="App">
                        <div className="form-group">
                            <select name="IdEstadoCivil" className="form-control" onChange={handleChange}>
                                <option key="0" value="0">Seleccione...</option>
                                {estadosCiviles.map(item=>(
                                    <option key={item.idEstadoCivil} 
                                            value={item.idEstadoCivil}
                                            selected={item.idEstadoCivil == idEstadoCivil ? "selected" : ""}>
                                        {item.estadoCivilDesc}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <br />
                    <input type="submit" className="btn btn-primary" value="Guardar" onClick={()=> CrearEditarUsuario()} />
                    {" "}
                    <input type="submit" className="btn btn-primary" value="Cancelar" id='btnCancelar' onClick={()=>props.params.funcionClick("TablaUsuarios", {funcionClick: props.params.funcionClick })}   />
                </div>
                
            </div>);
}

export default CrearEditUsuario;