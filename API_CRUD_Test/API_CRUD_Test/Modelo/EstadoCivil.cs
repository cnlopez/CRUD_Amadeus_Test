using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API_CRUD_Test.Modelo
{
    public class EstadoCivil
    {
        [Key]
        public int IdEstadoCivil { get; set; }
        public string EstadoCivilDesc { get; set; }
    }
}
