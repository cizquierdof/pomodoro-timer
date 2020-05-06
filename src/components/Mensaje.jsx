import React from 'react'

const Mensaje = (props) => {

    return (
        <div className='ui huge header'>
            {props.mensaje}
        </div>
    )
}

export default Mensaje