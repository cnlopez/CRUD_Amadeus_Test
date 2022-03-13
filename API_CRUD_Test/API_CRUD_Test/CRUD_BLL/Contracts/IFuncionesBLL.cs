using API_CRUD_Test.CRUD_BLL.ClassesInfo;
using API_CRUD_Test.Modelo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_CRUD_Test.CRUD_BLL.Contracts
{
    public interface IFuncionesBLL
    {
        List<UsuariosInfo> GetUsuarios();
        void UpdateUsuario(int idUsuario, Usuarios usuarios);
    }
}
