import React from 'react'
import Sound from 'react-sound'
import soundfile from '../Cuak.mp3'

const Mensaje = (props) => {
    const suena=props.sonido;
    console.log('suena',suena);
    ;
    
    return (
        <div>
        <div className='ui huge header'>
            {props.mensaje}
        </div>
        {suena&&
        <Sound
                url={soundfile}
                playStatus={Sound.status.PLAYING}
                playFromPosition={0}

            />}
            
        </div>
    )
}

export default Mensaje
