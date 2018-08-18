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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Fishy Clicky Game</h1>
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
          <img src={img[0]} />
          <img src={img[1]} />
          <img src={img[2]} />
          <img src={img[3]} />
          <img src={img[4]} />
          <img src={img[5]} />
          <img src={img[6]} />
          <img src={img[7]} />
          <img src={img[8]} />
          <img src={img[9]} />
          <img src={img[10]} />
          <img src={img[11]} />
        </div>
      </div>
    );
  }
}

export default App;
