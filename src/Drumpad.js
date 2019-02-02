import React, { Component } from 'react'

class Drumpad extends Component {
  
  handleClick = () => {
    this.audio.play()
    this.audio.currentTime = 0; 
  }  
  
  render() {
    return (
      <div className="drum-pad" id={this.props.id} onClick={this.handleClick}>
        <p>{this.props.letter}</p>
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