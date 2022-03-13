using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using API_CRUD_Test.Modelo;

namespace API_CRUD_Test.Data
{
    public class API_CRUD_TestContext : DbContext
    {
        public API_CRUD_TestContext (DbContextOptions<API_CRUD_TestContext> options)
            : base(options)
        {
        }

        public DbSet<API_CRUD_Test.Modelo.Usuarios> Usuarios { get; set; }

        public DbSet<API_CRUD_Test.Modelo.TipoIdentificacion> TipoIdentificacion { get; set; }

        public DbSet<API_CRUD_Test.Modelo.EstadoCivil> EstadoCivil { get; set; }
    }
}
