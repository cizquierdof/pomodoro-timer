import React from 'react'
import Mensaje from './Mensaje';


const Header = (props) => {

    const Titulo = () => {
        return (
            <div>
            <h1 className='ui red header'>THE <br /> POMODORO TIMER</h1>
            <img className='ui small centered image' src='/timer.svg' alt='timer'/>
            </div>
        )
    }

    const Reloj = () => {
        const minutos = Math.floor(props.data.tiempo / 60);
        const segundos = props.data.tiempo % 60;
        const sec = (segundos < 10) ? `0${segundos}` : segundos;

        return (
            <div className='ui huge header' >
                {`${minutos}:${sec}`}
            </div>
        )
    }

    const Barra = () => {
        const progreso = Math.floor(
            (props.data.totalIntervalo - props.data.tiempo) * 100 / props.data.totalIntervalo
        );

        return (
            <div className="ui active progress green">
                <div className="bar" style={{ transitionDuration: '100ms', width: progreso + '%' }}>{`${progreso}%`}</div>
            </div>
        )
    }

    const msg = (
        props.data.message === 'Descanso corto' || props.data.message === 'Descanso largo'
    ) ? props.data.message
        : `${props.data.message} ${props.data.intervalNumber}`;

    return (
        <div className='cabecera'>
            <Titulo />
            <Reloj />
            <Mensaje mensaje={msg} />
            <Barra />
        </div>
    )
}

export default Header
