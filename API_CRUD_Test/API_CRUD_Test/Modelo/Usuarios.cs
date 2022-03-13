using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API_CRUD_Test.Modelo
{
    public class Usuarios
    {
        [Key]
        public int IdUsuario { get; set; }
        public int IdTipoIdentificacion { get; set; }
        public string Identificacion { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public bool Sexo { get; set; }
        public DateTime FechaNacimiento { get; set; }
        public string Profesion { get; set; }
        public int IdEstadoCivil { get; set; }
    }
}
