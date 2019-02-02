import React, { Component } from 'react'

class Drumpad extends Component {
  
  componentDidMount() {
    console.log(this.audio)
    document.addEventListener('keydown', this.handleKeydown)
    window.focus()
  }
  
 componentWillUnmount() {
   document.removeEventListener('keydown', this.handleKeydown)
 }
  
  handleKeydown = e => {
    if(e.keyCode === this.props.letter.charCodeAt()) {
      this.audio.play()
      this.audio.currentTime = 0
      this.props.handleDisplay(this.props.id)
    }
  }

  handleClick = () => {
    this.audio.play()
    this.audio.currentTime = 0; 
    this.props.handleDisplay(this.props.id)
  }  
  
  render() {
    return (
      <div className="drum-pad" id={this.props.id} onClick={this.handleClick}>
        <h1>{this.props.letter}</h1>
        <audio 
            className="clip" 
            src={this.props.src} 
            id={this.props.letter}
            ref={ref => this.audio = ref}>  
        </audio>
      </div>
    )
  }
}

export default Drumpad; 