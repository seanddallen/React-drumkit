import React, { Component } from 'react'

class Drumpad extends Component {
  
  handleClick = () => {
    this.audio.play()
    this.audio.currentTime = 0; 
  }  
  
  render() {
    return (
      <div className="drum-pad" id={this.props.id} onClick={this.handleClick}>
        <h1>{this.props.letter}</h1>
        <audio 
            className="clip" 
            src={this.props.src} 
            id={this.props.letter}>
            ref={ref => this.audio = ref}
        </audio>
      </div>
    )
  }
}

export default Drumpad; 