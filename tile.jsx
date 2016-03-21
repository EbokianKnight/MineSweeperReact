var React = require('react');

var Tile = React.createClass({
  handleClick: function (e) {
    if (!this.props.won && !this.props.lost) {
      this.props.updateGame(this.props.tile, e.altKey);
    }
  },

  render:  function () {
    var tile = this.props.tile;
    var flagged = tile.flagged ? "flagged " : "";
    var explored = tile.explored ? "explored " : "";
    var kaboom = this.props.lost && tile.bombed ? "bomb" : "";
    var klass = "tile " + flagged + explored + kaboom;
    var bombs = tile.explored ? tile.adjacentBombCount() : "";
    bombs = bombs > 0 ? bombs : "";


    return (
      <li className={klass} onClick={this.handleClick}>{bombs}</li>
    );
  }

});

module.exports = Tile;
