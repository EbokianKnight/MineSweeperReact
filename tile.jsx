var React = require('react');

var Tile = React.createClass({
  handleClick: function () {

  },

  render:  function () {
    var tile = this.props.tile;
    var flagged = tile.flagged ? "flagged " : "";
    var explored = tile.explored ? "explored " : "";
    var klass = "tile " + flagged + explored;
    var bombs = tile.explored ? tile.adjacentBombCount() : tile.adjacentBombCount();

    return (
      <li className={klass} onClick={this.handleClick}>{bombs}</li>
    );
  }

});

module.exports = Tile;
