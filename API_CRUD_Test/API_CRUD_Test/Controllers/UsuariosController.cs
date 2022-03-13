using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API_CRUD_Test.Data;
using API_CRUD_Test.Modelo;
using API_CRUD_Test.CRUD_BLL.Contracts;

namespace API_CRUD_Test.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        private readonly API_CRUD_TestContext _context;
        private readonly IFuncionesBLL _FuncionesBLL;
        public UsuariosController(API_CRUD_TestContext context, IFuncionesBLL funcionesBLL)
        {
            _context = context;
            _FuncionesBLL = funcionesBLL;
        }

        // GET: api/Usuarios
        [HttpGet]
        public ActionResult GetUsuarios()
        {
            return Ok(_FuncionesBLL.GetUsuarios());
        }

        // GET: api/Usuarios/5
        [HttpGet("{id}")]
        public ActionResult GetUsuarios(int id)
        {
            return Ok(_FuncionesBLL.GetUsuarios());
        }

        // PUT: api/Usuarios/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public ActionResult PutUsuarios(int id, Usuarios usuarios)
        {
            _FuncionesBLL.UpdateUsuario(id, usuarios);
            return NoContent();
        }

        // POST: api/Usuarios
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Usuarios>> PostUsuarios(Usuarios usuarios)
        {
            _context.Usuarios.Add(usuarios);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUsuarios", new { id = usuarios.IdUsuario }, usuarios);
        }

        // DELETE: api/Usuarios/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Usuarios>> DeleteUsuarios(int id)
        {
            var usuarios = await _context.Usuarios.FindAsync(id);
            if (usuarios == null)
            {
                return NotFound();
            }

            _context.Usuarios.Remove(usuarios);
            await _context.SaveChangesAsync();

            return usuarios;
        }

        private bool UsuariosExists(int id)
        {
            return _context.Usuarios.Any(e => e.IdUsuario == id);
        }
    }
}
