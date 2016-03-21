var React = require('react');
var Tile = require('./tile');


var Board = React.createClass({

  tiles: function () {
    var tiles = [];
    for (var i = 0; i < this.props.board.grid.length; i++) {
      for (var j = 0; j < this.props.board.grid[0].length; j++) {
        tiles.push(this.props.board.grid[i][j]);
      }
    }
    return tiles;
  },

  message: function () {
    if (this.props.won) { return "You Did Not Blow Up"; }
    else if (this.props.lost) { return "You Blew Up"; }
    else { return ""; }
  },

  render:  function () {
    var buttonClass = !this.props.won && !this.props.lost ? "disable" : "";

    return (
      <div>

        <ul className="grid group">
          { this.tiles().map( function (tile, index){
            return <Tile key={index} tile={tile} won={this.props.won}
              lost={this.props.lost} updateGame={this.props.updateGame}/>;
          }.bind(this))}
        </ul>

        <h2 className="end-message">{this.message()}</h2>

        <button className={"reset-button " + buttonClass} onClick={this.props.reset}>
          Reset Game
        </button>

      </div>
    );
  }
});

module.exports = Board;
