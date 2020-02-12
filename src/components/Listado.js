import React from 'react'
import Gasto from './Gasto'

const Listado = ({gastos}) => (
    <div className='gastos-realizados'>
        <h2>Listado</h2>

        {gastos.map(a => (
            <Gasto 
                key={a.id}
                gasto={a} />
        ))}
    </div>
);
 
export default Listado;