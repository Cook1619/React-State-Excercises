import React, { Component } from "react";
import Die from "./Die";

export default class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      die1: "one",
      die2: "three",
      rolling: false,
    };
    this.rollDice = this.rollDice.bind(this);
  }
  rollDice() {
    let numbers = ["one", "two", "three", "four", "five", "six"];
    let random1 = numbers[Math.floor(Math.random() * numbers.length)];
    let random2 = numbers[Math.floor(Math.random() * numbers.length)];
    this.setState({
      die1: random1,
      die2: random2,
    });
  }
  render() {
    return (
      <div>
        <Die number={this.state.die1} />
        <Die number={this.state.die2} />
        <button onClick={this.rollDice}>
          {!this.state.rolling ? "Roll Dice" : "Rolling..."}
        </button>
      </div>
    );
  }
}
