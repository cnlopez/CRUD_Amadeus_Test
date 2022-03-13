import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BaseURL } from '../globalValues';

function TablaUsuarios(props){

    console.log(props);
    const baseURL =  BaseURL() + "Usuarios";
    const [data, setData] = useState([]);

    const GetUsuarios=async()=>{
        await axios.get(baseURL)
        .then(response=>{
            setData(response.data);
        }).catch(error=>{
            console.log(error);
        })
    }

    const EliminarUsuario=(idUsuario)=>{
        let text = "Esta seguro(a) que desea eliminar este usuario?";
        if(window.confirm(text)){
            axios.delete(baseURL + "/" + idUsuario)
            .then(response=>{
                GetUsuarios();
            }).catch(error=>{
                console.log(error);
            });
        }
    }



    useEffect(()=>{
        GetUsuarios();
    },[])

    return(<div>
            <input type="submit" className="btn btn-primary" value="Crear Usuario" onClick={()=>props.params.funcionClick("CrearEditUsuario", {funcionClick: props.params.funcionClick, Usuario:{} })} />
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Tipo Identificación</th>
                        <th>Identificación</th>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Sexo</th>
                        <th>Fecha de Nacimiento</th>
                        <th>Profesión</th>
                        <th>Estado Civil</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item=>(
                        <tr key={item.idUsuario}>
                            <td>{item.tipoIdentificacionDesc}</td>
                            <td>{item.identificacion}</td>
                            <td>{item.nombre}</td>
                            <td>{item.apellido}</td>
                            <td>{item.sexo ? "Masculino" : "Femenino"}</td>
                            <td>{item.fechaNacimientoS}</td>
                            <td>{item.profesion}</td>
                            <td>{item.estadoCivilDesc}</td>
                            <td>
                                <button className="btn btn-primary" onClick={()=>props.params.funcionClick("CrearEditUsuario", {funcionClick: props.params.funcionClick, Usuario: item })} >Editar</button>{" "}
                                <button className="btn btn-danger" onClick={()=>EliminarUsuario(item.idUsuario)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
          </div>
    );
}

export default TablaUsuarios;