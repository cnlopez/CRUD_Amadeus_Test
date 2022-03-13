using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API_CRUD_Test.Modelo
{
    public class TipoIdentificacion
    {
        [Key]
        public int IdTipoIdentificacion { get; set; }
        public string TipoIdentificacionAbr { get; set; }
        public string TipoIdentificacionDesc { get; set; }

    }
}
