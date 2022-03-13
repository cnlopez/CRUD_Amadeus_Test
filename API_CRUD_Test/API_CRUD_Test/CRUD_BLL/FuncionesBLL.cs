using API_CRUD_Test.CRUD_BLL.ClassesInfo;
using API_CRUD_Test.CRUD_BLL.Contracts;
using API_CRUD_Test.Data;
using API_CRUD_Test.Modelo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_CRUD_Test.CRUD_BLL
{
    public class FuncionesBLL : IFuncionesBLL
    {
        private readonly API_CRUD_TestContext _context;
        public FuncionesBLL(API_CRUD_TestContext context)
        {
            _context = context;
        }

        public List<UsuariosInfo> GetUsuarios()
        {
            var lst = (from u in _context.Usuarios
                       join t in _context.TipoIdentificacion on u.IdTipoIdentificacion equals t.IdTipoIdentificacion
                       join e in _context.EstadoCivil on u.IdEstadoCivil equals e.IdEstadoCivil
                       select new UsuariosInfo
                       {
                           IdUsuario = u.IdUsuario,
                           IdTipoIdentificacion = u.IdTipoIdentificacion,
                           TipoIdentificacionDesc = t.TipoIdentificacionDesc,
                           TipoIdentificacionAbr = t.TipoIdentificacionAbr,
                           Identificacion = u.Identificacion,
                           Nombre = u.Nombre,
                           Apellido = u.Apellido,
                           Sexo = u.Sexo,
                           FechaNacimiento = u.FechaNacimiento,
                           FechaNacimientoS = u.FechaNacimiento.ToString("dd/MM/yyyy"),
                           FechaNacDia = u.FechaNacimiento.Day,
                           FechaNacMes = u.FechaNacimiento.Month,
                           FechaNacAno = u.FechaNacimiento.Year,
                           Profesion = u.Profesion,
                           IdEstadoCivil = u.IdEstadoCivil,
                           EstadoCivilDesc = e.EstadoCivilDesc
                       }).ToList();
            return lst;
        }

        public void UpdateUsuario(int idUsuario, Usuarios usuarios) 
        {
            try
            {
                var usuario = _context.Usuarios.Where(x => x.IdUsuario == idUsuario).FirstOrDefault();
                usuario.IdTipoIdentificacion = usuarios.IdTipoIdentificacion;
                usuario.Identificacion = usuarios.Identificacion;
                usuario.Nombre = usuarios.Nombre;
                usuario.Apellido = usuarios.Apellido;
                usuario.Sexo = usuarios.Sexo;
                usuario.FechaNacimiento = usuarios.FechaNacimiento;
                usuario.Profesion = usuarios.Profesion;
                usuario.IdEstadoCivil = usuarios.IdEstadoCivil;
                _context.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
        }

    }
}
