import React, { Component } from "react";
import "./App.css";
import img from "./images";

function shuffleCards(cards) {
  return img.sort((a, b) => 0.5 - Math.random());
}

class App extends Component {
  state = {
    img,
    currentScore: 0,
    topScore: 0,
    isCorrect: "",
    clicked: {}
  };

  handleClick = event => {
    if (this.state.clicked[event.target.src] === undefined) {
      let newClicked = Object.assign({}, this.state.clicked);
      newClicked[event.target.src] = true;
      const currentScore = this.state.currentScore + 1;
      this.setState({
        img: img.sort((a, b) => 0.5 - Math.random()),
        currentScore: currentScore,
        clicked: newClicked,
        topScore: Math.max(currentScore, this.state.topScore)
      });
    } else {
      this.setState({
        img: img.sort((a, b) => 0.5 - Math.random()),
        currentScore: 0
      });
    }
  };

  handleIncrement = () => {
    const currentScore = this.state.currentScore + 1;
    this.setState({
      currentScore: currentScore,
      isCorrect: ""
    });
    if (currentScore > this.state.topScore) {
      this.setState({ topScore: currentScore });
    } else if (currentScore === 12) {
      this.setState({ isCorrect: "VERY NICE" });
    }
    //adds one to current score
  };

  // handleReset = () => {
  //   //resets score
  //   this.setState({
  //     currentScore: 0,
  //     topScore: this.state.topScore,
  //     isCorrect: "Better Luck Next Time!",
  //     clicked: []
  //   });
  //   this.handleShuffle();
  // };

  // handleShuffle = () => {
  //   let shuffledCards = shuffleCards(img);
  //   this.setState({ img: shuffledCards });
  //   //shuffles the cards
  // };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Clicky Game</h1>
        </header>
        <div className="Game-header">
          <ul>
            <li>Score ={this.state.currentScore}</li>
            <li>
              Top Score=
              {this.state.topScore}
            </li>
            <li>{this.state.isCorrect}</li>
          </ul>
        </div>
        <div className="App-intro" onClick={this.handleClick}>
          <img src={img[0]} id="0" />
          <img src={img[1]} id="1" />
          <img src={img[2]} id="2" />
          <img src={img[3]} id="3" />
          <img src={img[4]} id="4" />
          <img src={img[5]} id="5" />
          <img src={img[6]} id="6" />
          <img src={img[7]} id="7" />
          <img src={img[8]} id="8" />
          <img src={img[9]} id="9" />
          <img src={img[10]} id="10" />
          <img src={img[11]} id="11" />
        </div>
      </div>
    );
  }
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;
