import React, { Component, useState, useEffect } from 'react';
import Pregunta from './components/Pregunta'
import Listado from './components/Listado'
import Formulario from './components/Formulario'
import ControlPresupuesto from './components/ControlPresupuesto'

function App() {

      //Definir el state
      const [ presupuesto, guardarPresupuesto ] = useState(0)
      const [ restante, guardarRestante ] = useState(false)
      const [ mostrarPregunta, actualizarPregunta ] = useState(true)
      const [ gastos, guardarGastos ] = useState([])
      const [ gasto, guardarGasto ] = useState({})
      const [ creargasto, guardarCrearGasto ] = useState(false)

      //UseEffect que actualiza el restante

      useEffect(() => {

        //Arega el nuevo presupuesto
       if( creargasto ) {
            guardarGastos([
              ...gastos,
              gasto
          ])

            //Resta del presupuesto actual
          const presupuestoRestante = restante - gasto.cantidad
          guardarRestante(presupuestoRestante)

          //Resetear a false
          guardarCrearGasto(false)

       }
      }, [gasto, creargasto, gastos, restante])

    


    return (
     <div className='container'>
       <header>
       <h1>Gasto Semanal</h1>
        <div className='contenido-principal contenido'>
          { mostrarPregunta ?
             ( <Pregunta 
                  guardarPresupuesto={guardarPresupuesto}
                  guardarRestante={guardarRestante}
                  actualizarPregunta={actualizarPregunta}
               />
             )
            : (
              <div className='row'>
                <div className='one-half column'>
                  <Formulario
                    guardarGasto={guardarGasto}
                    guardarCrearGasto={guardarCrearGasto}
                 />
                </div>
                <div className='one-half column'>
                  <Listado 
                    gastos={gastos}
                  />
                  <ControlPresupuesto
                    presupuesto={presupuesto}
                    restante={restante}
                  />
                </div>
              </div>
              )
           }
          

       

        </div>
       </header>
     </div>
    );
  
}

export default App;
