var React = require('react');
var Tile = require('./tile');


var Board = React.createClass({


  render:  function () {
    var tiles = [];
    for (var i = 0; i < this.props.board.grid.length; i++) {
      for (var j = 0; j < this.props.board.grid[0].length; j++) {
        tiles.push(this.props.board.grid[i][j]);
      }
    }
    debugger;
    return (
      <ul className="grid group">
        { tiles.map( function (tile){
          return <Tile tile={tile}/>;
        })}
      </ul>
    );
  }

});

module.exports = Board;
