import React from 'react'
import Mensaje from './Mensaje';


  
const Header = (props) => {


    const display = () => {

        const minutos = Math.floor(props.data.tiempo / 60);
        const segundos = props.data.tiempo % 60;
        const sec = (segundos < 10) ? `0${segundos}` : segundos;
        const progreso=Math.floor(
            (props.data.totalIntervalo-props.data.tiempo)*100/props.data.totalIntervalo
            );
        //console.log('props',props.data.sound)

            return (
                <div className='titulo'>
                    <h1 className='ui red header'>THE <br/> POMODORO TIMER</h1>
                    <div className='ui huge header' >
                        {`${minutos}:${sec}`}
                    </div>
                    <Mensaje mensaje={
                        (props.data.message==='Descanso corto'||props.data.message==='Descanso largo')?props.data.message:
                        `${props.data.message} ${props.data.intervalNumber}`} sonido={props.data.sound}/>
                    <div className="ui active progress green">
                         <div className="bar" style={ {transitionDuration:'10ms', width:progreso+'%'}}>{`${progreso}%`}</div>
                    </div>
                   
                </div>
            )
        }
    

    return (
        display()
    )
}

export default Header
