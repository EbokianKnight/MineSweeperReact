var React = require('react');
var Tile = require('./tile');


var Board = React.createClass({

  render:  function () {
    var resetButton = this.props.reset;
    var tiles = [];
    var that = this;
    var message = "";
    var buttonClass = !this.props.won && !this.props.lost ? "disable" : "";

    if (this.props.won) {
      message = "You Did Not Blow Up";
    } else if (this.props.lost) {
      message = "You Blew Up";
    }

    for (var i = 0; i < this.props.board.grid.length; i++) {
      for (var j = 0; j < this.props.board.grid[0].length; j++) {
        tiles.push(this.props.board.grid[i][j]);
      }
    }
    return (
      <div>
        <ul className="grid group">
          { tiles.map( function (tile, index){
            return <Tile key={index} tile={tile} won={that.props.won}
            lost={that.props.lost} updateGame={that.props.updateGame}/>;
          })}
        </ul>
        <h2 className="end-message">{message}</h2>
        <button className={"reset-button " + buttonClass} onClick={resetButton}>
          Reset Game
        </button>
      </div>
    );
  }

});

module.exports = Board;
