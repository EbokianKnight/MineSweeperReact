var React = require('react');
var Tile = require('./tile');


var Board = React.createClass({


  render:  function () {
    var tiles = [];
    var that = this;
    for (var i = 0; i < this.props.board.grid.length; i++) {
      for (var j = 0; j < this.props.board.grid[0].length; j++) {
        tiles.push(this.props.board.grid[i][j]);
      }
    }
    return (
      <ul className="grid group">
        { tiles.map( function (tile, index){
          return <Tile key={index} tile={tile} updateGame={that.props.updateGame}/>;
        })}
      </ul>
    );
  }

});

module.exports = Board;
