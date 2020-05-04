import React, { Component } from 'react'
import Header from './Header';

export class Pomodoro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tiempo: 1500
        }
    }

    timer=(segundos)=>{
        return this.state.tiempo%60;
    }

    onClickStart = () => {
        console.log('start');
        this.interval =setInterval(
             () => this.setState({ tiempo: this.state.tiempo - 1 }), 1000
        )
    }

    onClickStop = () => {
        console.log('stop');
      clearInterval(this.interval);
    }

    onclickReset=()=>{
        clearInterval(this.interval);
        this.setState({tiempo:1500})
    }

    render() {
        //console.log(this.state);
        return (
            <div className='ui center aligned container'>
            <Header segundos={this.state.tiempo}/>
                <div className='ui buttonss'>
                    <button className='ui basic red button' onClick={() => this.onClickStart()}>
                        Start
                    </button>
                    <button className='ui basic blue button' onClick={()=>this.onClickStop()}>Stop</button>
                    <button className='ui basic green button' onClick={()=>this.onclickReset()}>Reset</button>
                </div>
            </div>
        )
    }
}

export default Pomodoro
