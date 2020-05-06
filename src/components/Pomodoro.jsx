import React, { Component } from 'react'
import Header from './Header';
import './Pomodoro.css'
import Sound from './Sonido'
import soundfile from '../Cuak.mp3'
import Sonido from './Sonido';


export class Pomodoro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tiempo: 1500,
            running: false,
            intervalNumber: 1,
            message: 'Intervalo',
            totalIntervalo:1500,
            sound:true
        }
    }

    timer = (segundos) => {
        return this.state.tiempo % 60;
    }

    onClickStart = () => {
        this.interval = setInterval(
            () => this.setState({
                tiempo: this.state.tiempo - 1,
                running: true
            }), 10
        )
    }

    onClickStop = () => {
        clearInterval(this.interval);
        this.setState({
            running: false
        })
    }

    onclickReset = () => {
        clearInterval(this.interval);
        this.setState({
            tiempo: 1500,
            running: false,            
            intervalNumber: 1,
            message: 'Intervalo',
            totalIntervalo:1500,
            sound:false
        })
    }

    changeStates = () => {


    }
    componentDidUpdate(prevProps, PrevState) {
        //console.log('timer', this.state.tiempo)
        const intervalType = this.state.message;
        const intervalNmbr = this.state.intervalNumber;


        if (this.state.tiempo !== PrevState.tiempo) {
            //cuando se termine el tiempo
            if (this.state.tiempo === 0) {
                //fin intervalo menor del cuarto
                if (intervalType === 'Intervalo' && intervalNmbr < 4) {
                    this.setState({
                        tiempo: 300,
                        message: 'Descanso corto',
                        totalIntervalo:300,
                        sound:true
                    })
                    //alert('terminó el intervalo '+intervalNmbr);
                }
                //caso del último intervalo antes de la pausa
                if (intervalType === 'Intervalo' && intervalNmbr === 4) {
                    this.setState({
                        tiempo: 1200,
                        message: 'Descanso largo',
                        totalIntervalo:1200,
                        sound:true
                    });

                    //alert('Pasea un rato');
                }
                //final de la pausa corta
                if (intervalType === 'Descanso corto') {
                    this.setState({
                        tiempo: 1500,
                        message: 'Intervalo',
                        intervalNumber: this.state.intervalNumber + 1,
                        totalIntervalo:1500,
                        sound:false
                    })

                    //alert('Vuelve a currar');
                }
                //final pausa larga
                if (intervalType === 'Descanso largo') {
                    this.setState({
                        tiempo: 1500,
                        message: 'Intervalo',
                        intervalNumber: 1,
                        totalIntervalo:1500,
                        sound:false
                    })

                    //alert('Empezamos todo de nuevo');
                }
            }
        }
    }
    render() {
        //console.log(this.state);
        return (
            <div className='ui center aligned container'>
                <Header data={this.state} />
                <div className='botonera'>
                    <button className='ui icon red button' disabled={this.state.running} onClick={() => this.onClickStart()}>
                        <i className='play icon' />
                    </button>
                    <button className='ui  icon blue button' disabled={!this.state.running} onClick={() => this.onClickStop()}>
                        <i className='pause icon' />
                    </button>
                    <button className='ui  icon green button' onClick={() => this.onclickReset()}>
                        <i className='stop icon' />
                    </button>
                </div>
                <audio>
                <source src={soundfile} type='audio/mpeg'></source>
                </audio>
            </div>
        )
    }
}

export default Pomodoro
