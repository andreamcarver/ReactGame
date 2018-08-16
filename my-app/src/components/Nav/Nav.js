import React from "react";

const Nav = props => (
  <nav>
    <ul>
      <li class="Game-header">
        <a href="/clicky-game/">{props.title}</a>
      </li>

      <li id="rw">{props.isCorrect}</li>

      <li id="cur-sco">Current Score: {props.score}</li>

      <li id="top-sco">Top Score: {props.topScore}</li>
    </ul>
  </nav>
);

export default Nav;
