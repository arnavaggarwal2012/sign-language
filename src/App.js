import { Component } from 'react';
import Images from './Components/images.js'
import './App.css';

import heartImg from '../src/heart.png';

const inputText = document.getElementsByClassName('inputValue');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      final: '',
    }
  }

  submitValue = (e) => {
    this.setState({
      input: e.target.value,
    })
  }
  onSubmitValue = (e) => {
    this.setState({
      final: this.state.input
    })
  }
  resetValue = () => {
    this.setState({
      final: '',
      input: '',
    })
    document.getElementsByClassName('inputValue')[0].value = ''
  }
  enterKey = (e) => {
    if (e.keyCode === 13) {
      this.onSubmitValue()
    }
  }
  render() {
    return (
      <div className="App">
        <div className="relative">
          <div className="header">
            <h1>
              Communicating in a new way
            </h1>
        </div>
          <div className="Content">
            <div className="about">
              <span id="typewriter">
                <br></br>
                American Sign Language (ASL) is a visual language that deaf people use to communicate. It uses the hands, face, and body to convey meaning. It is the main language of the deaf community in North America, but it is also spoken by many people around the world.
<br></br><br></br>
One of the most basic skills in ASL is learning the alphabet. This is also known as finger spelling or hand spelling. It is a way of spelling out words letter by letter using different hand shapes. You can use finger spelling to introduce yourself, indicate a place, clarify a word, or communicate with someone who uses a different sign language.
 <br></br><br></br>
Finger spelling can also help you communicate in places where spoken languages are not possible or practical, such as underwater, in space, through glass, or in noisy environments.
 <br></br><br></br>
ASL is one of the most widely used sign languages in the world, but it is not the only one. There are many other sign languages that have their own histories, structures, and communities.
 <br></br><br></br>
Do you want to communicate with deaf people using ASL? Don’t worry if you don’t know the language. Just type in the sentence that you want to translate and our website will convert it into ASL for you. Sounds amazing, right? Try it now and break the communication barrier!
             </span>
            </div>
            <div className="inputField ">
              <input type="text" placeholder="Enter Text to translate" onChange={this.submitValue} className="inputValue" contenteditable="true" onKeyDown={this.enterKey}></input>
              <button type="submit" onClick={this.onSubmitValue} onKeyPress={this.enterKey} className="button1" contenteditable="true">TRANSLATE</button>
              <button onClick={this.resetValue} className="button1" contenteditable="true">RESET</button>
            </div>
            <div className="images">
              <Images text={this.state.final} />
            </div>
          </div>
          <div className="footer">
              Made with <img className="heart" src={heartImg} alt='heartimg' />  By Arnav Aggarwal
          </div>
        </div>
      </div>
    );
  }
}

export default App;
