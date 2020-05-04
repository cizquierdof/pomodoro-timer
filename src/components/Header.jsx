import React from 'react'
import Mensaje from './Mensaje';

const Header = (props) => {
    //console.log('segundos',props.segundos)

    const display = () => {

        const minutos = Math.floor(props.segundos / 60);
        const segundos = props.segundos % 60;
        const sec = (segundos < 10) ? `0${segundos}` : segundos
        if(props.segundos>0){
            return (
                <div className='titulo'>
                    <h1 className='ui red header'>POMODORO TIMER</h1>
                    <div className='ui huge header'>
                        {`${minutos} : ${sec}`}
                    </div>
                </div>
            )
    
        } else{
            return (
                <div className='titulo'>
                <h1 className='ui red header'>POMODORO TIMER</h1>
                <Mensaje/>
            </div>

                
            )
        }
    }

    return (
        display()
    )
}

export default Header
