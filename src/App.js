import React, { Component } from 'react';
import Pregunta from './components/Pregunta'

class App extends Component {
  render() {
    return (
     <div className='container'>
       <header>
       <h1>Gasto Semanal</h1>
        <div className='contenido-principal contenido'>
         <Pregunta />
        </div>
       </header>
     </div>
    );
  }
}

export default App;
