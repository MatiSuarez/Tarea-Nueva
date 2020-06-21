import React, { Component } from 'react';
import TareaForm from './TareaForm';
import { tareas } from '/Users/usuario/practica-nueva/src/tareas.json';



class Navi extends Component {
    
    
    render() {

        return (

            <nav className='navbar navbar-dark bg-dark'>
            <a href='' className='navbar-brand'>
            {this.props.titulo}   
            <span className='badge badge-pill badge-light ml-2'>
              { this.props.span } 
            </span>
            </a>
            <form className="form-inline" onSubmit={ () => this.props.onSubmit}>
              <button 
               className="btn btn-danger" type="submit">
               Agregar Tareas     
              </button>
              </form> 
          </nav>
        )
    }
}

export default Navi;