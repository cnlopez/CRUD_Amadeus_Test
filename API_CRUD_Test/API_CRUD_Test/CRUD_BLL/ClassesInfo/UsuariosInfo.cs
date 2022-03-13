using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_CRUD_Test.CRUD_BLL.ClassesInfo
{
    public class UsuariosInfo
    {
        public int IdUsuario { get; set; }
        public int IdTipoIdentificacion { get; set; }
        public string Identificacion { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public bool Sexo { get; set; }
        public DateTime FechaNacimiento { get; set; }
        public string FechaNacimientoS { get; set; }
        public int FechaNacDia { get; set; }
        public int FechaNacMes { get; set; }
        public int FechaNacAno { get; set; }
        public string Profesion { get; set; }
        public int IdEstadoCivil { get; set; }

        //add

        public string TipoIdentificacionAbr { get; set; }
        public string TipoIdentificacionDesc { get; set; }
        public string EstadoCivilDesc { get; set; }

    }
}
