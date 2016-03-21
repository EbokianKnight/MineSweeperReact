var React = require('react');
var ReactDOM = require('react-dom');
var Minesweeper = require('./minesweeper');
var Board = require('./board');

var MinesweeperGame = React.createClass({
  getInitialState: function() {
    return { board: new Minesweeper.Board(9, 10) };
  },
  resetGame: function () {
    this.setState({ board: new Minesweeper.Board(9, 10) });
  },
  updateGame: function (tile, flagging) {
    if (flagging) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }
    this.setState({ board: this.state.board });
  },

  render: function () {
    var gameWon = this.state.board.won();
    var gameLost = this.state.board.lost();
    return(
      <Board board={this.state.board} won={gameWon} lost={gameLost}
        reset={this.resetGame} updateGame={this.updateGame} />
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<MinesweeperGame />, document.getElementById('game'));
});
