import React from 'react'
import Gasto from './Gasto'
import PropTypes from 'prop-types'

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

Listado.propTypes = {
    gastos: PropTypes.array.isRequired
}
 
export default Listado;