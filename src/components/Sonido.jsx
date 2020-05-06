import React, { Component } from 'react'

export class Sonido extends Component {
  
  render() {
    return (
        <audio autoPlay name='media'>
        <source src='https://tonosparawhatsap.com/wp-content/uploads/tono/Cuak_(tonosparawhatsap.com).mp3' 
        type='audio/mpeg'/>
        </audio>
      )
  }
}

export default Sonido


