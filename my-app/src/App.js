import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

function shuffleCards(){
  //TODO figure out how to shuffle
}

class App extends Component {
  state = {
    cards,
    currentScore: 0,
    topScore: 0,
    isCorrect: "",
    clicked: []
  };

  handleClick = id => {
    //handle on click event; should increment if correct, otherwise
    //use reset function
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore;
      isCorrect: ""
    });
    if (newScore > this.state.topScore){
      this.setState({ topScore: newScore})
    }
    else if (newScore === 12){
      this.setState({isCorrect: "VERY NICE"})
    }
    this.handleShuffle
    //adds one to current score
  };

  handleReset = () => {
    //resets score
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      isCorrect: "Better Luck Next Time!",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledCards = shuffleCards(cards)
    this.setState({cards: shuffledcards})
    //shuffles the cards
  };
}

class App extends Component {
  render() {
    return (
      <div>
        <Game />
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
