import React, { Component } from 'react';
import TablaUsuarios from './TablaUsuarios';
import CrearEditUsuario from './CrearEditUsuario';

class MainContainer extends Component
{
    
    render(){
        let componentList = {
            TablaUsuarios : TablaUsuarios,
            CrearEditUsuario : CrearEditUsuario
        }
        let ChildComponent = componentList[this.props.componente];
        return(
            <ChildComponent params={this.props.params} />
        );
    }
}

export default MainContainer;