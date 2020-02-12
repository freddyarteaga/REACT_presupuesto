import React, { Fragment } from 'react';

const ControlPresupuesto = ({presupuesto, restante}) => {
    return ( 
        <Fragment>
            <div className='alert alert-primary'>
                Presupueto: $ {presupuesto}
            </div>
            <div className='alert'>
                Restante: $ {restante}
            </div>
        </Fragment>
     );
}
 
export default ControlPresupuesto;