var React = require('react');
var ReactDOM = require('react-dom');
var Minesweeper = require('./minesweeper');
var Board = require('./board');

var MinesweeperGame = React.createClass({
  getInitialState: function() {
    return { board: new Minesweeper.Board(9, 10) };
  },

  updateGame: function () {

  },

  render: function () {
    return(
      <Board board={this.state.board} updateGame={this.updateGame} />
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<MinesweeperGame />, document.getElementById('game'));
});
