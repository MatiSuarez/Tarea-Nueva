import React, { Component } from 'react'
import { tareas } from '/Users/usuario/practica-nueva/src/tareas.json';

class Terminadas extends Component {
    constructor( props ) {
        super( props );
        
    }

    render() {
        const { tareas } = this.props

        return (
            <div class='col-sm'>
                <h1 className='text-white'>Tareas Terminadas</h1>
                <div className='row'>
                    {
                        tareas.filter ( tarea => (
                            <div>
                             <div className = 'col-md-4'>
                              <div className='card-title text-center'>
                                 <h3> {tarea.title} </h3>
                                 <span className='badge badge-pill badge-secondary ml-3'>
                                     {tarea.priority} 
                                </span>
                              </div>
                              <div className='card-body'>
                                 <p>{tarea.description}</p>
                              </div>
                              <div className='card-footer'>
                                  <h6 className='text-success'> Tarea Finalizada </h6>
                              </div>
                             </div>
                            </div>
                        ))}
                </div>
            </div>
        )
    }
}
export default Terminadas;