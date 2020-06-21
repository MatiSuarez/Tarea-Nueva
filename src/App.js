import React, { Component } from 'react';
import './App.css';

import { tareas } from './tareas.json';
import Navi from './Components/Navi';
import TareaForm from './Components/TareaForm';
import Terminadas from './Components/Terminadas';
class App extends Component {

state = {
  show: false,
}

constructor() {
  super();
  this.state = {
    tareas
  }
  this.handleAddTarea = this.handleAddTarea.bind(this);
}

removeTarea(index){
  if (window.confirm ('Estas seguro que la tarea esta terminda?')){
  this.setState({
    tareas: this.state.tareas.filter( tarea => {
      if (tarea.index === index) {
        tarea.Terminadas = !tarea.Terminadas
      }
   })
  })
 }
}

handleAddTarea (tarea) {
  this.setState({
    tareas: [...this.state.tareas, tarea]
  })
}

handleEditTarea = (tareas) => {

  this.setState.tareas.map({
    formValues:
    {
      title: 'titulo',
      description: 'descripcion',
    }
  })
}

handleSubmit = (evento) => {
  this.setstate ({ show : !this.state.show});
}


 render() {
  const tareas = this.state.tareas.map((tarea, i) => {
   return (
     <div className = 'col-md-6' key={i}>
        <div className='card mt-4'>
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
        <button
        className='btn btn-primary'
        onClick={ () => this.onEditTarea }>
          Editar
        </button>
        <button
        className='btn btn-danger'
        onClick={this.removeTarea.bind (this, i)}>
          Terminar
        </button>
      </div>
    </div>
     </div>
  )
})


  return (
    <div className="App">
     
     < Navi 
       titulo="Tareas para hacer" 
       span= {this.state.tareas.length}
       /> 
     {this.state.showForm &&
      <div className='col-md-4 mt-4 text-center'>
      <TareaForm 
      onAddTarea={this.handleAddTarea}
      />
      </div>
      }

      <div className='col-md-8'>
        <div className='row'>
          { tareas }
        </div>
        
        <div>
          <Terminadas
           tareas={tareas.filter( tareas => tareas.terminadas === true )}  
           removeTarea={this.removeTarea}
          />
        </div>


      </div>
    </div>
  )
 }
}

export default App;
