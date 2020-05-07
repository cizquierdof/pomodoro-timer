import React, { Component } from 'react'
import Header from './Header';
import './Pomodoro.css'
import Sound from 'react-sound'


export class Pomodoro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tiempo: 1500,
            running: false,
            intervalNumber: 1,
            message: 'Intervalo',
            totalIntervalo: 1500,
            sound: false
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
            }), 100
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
            totalIntervalo: 1500,
            sound: false
        })
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
                        totalIntervalo: 300,
                        sound: true
                    })
                }

                //caso del último intervalo antes de la pausa
                if (intervalType === 'Intervalo' && intervalNmbr === 4) {
                    this.setState({
                        tiempo: 1200,
                        message: 'Descanso largo',
                        totalIntervalo: 1200,
                        sound: true
                    });
                }

                //final de la pausa corta
                if (intervalType === 'Descanso corto') {
                    this.setState({
                        tiempo: 1500,
                        message: 'Intervalo',
                        intervalNumber: this.state.intervalNumber + 1,
                        totalIntervalo: 1500,
                        sound: false
                    })
                }

                //final pausa larga
                if (intervalType === 'Descanso largo') {
                    this.setState({
                        tiempo: 1500,
                        message: 'Intervalo',
                        intervalNumber: 1,
                        totalIntervalo: 1500,
                        sound: false
                    })
                }
            }
        }
    }

    handleSongFinishedPlaying = () => {
        this.setState(
            { sound: false }
        )
    }

    render() {
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
                <div>
                    {this.state.message ?
                        <Sound url='/Cuak.mp3'
                            playStatus={this.state.sound ? Sound.status.PLAYING : Sound.status.STOPPED}
                            onFinishedPlaying={this.handleSongFinishedPlaying}
                        /> : null
                    }

                </div>
            </div>
        )
    }
}

export default Pomodoro
