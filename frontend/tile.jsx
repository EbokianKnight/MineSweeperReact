var React = require('react');

var Tile = React.createClass({

  handleClick: function (e) {
    if (!this.props.won && !this.props.lost) {
      this.props.updateGame(this.props.tile, e.altKey);
    }
  },

  klass: function () {
    var tile = this.props.tile;
    var flagged = tile.flagged ? "flagged " : "";
    var explored = tile.explored ? "explored " : "";
    var kaboom = this.props.lost && tile.bombed ? "bomb" : "";
    return "tile " + flagged + explored + kaboom;
  },

  bombs: function () {
    var tile = this.props.tile;
    var bombs = tile.explored ? tile.adjacentBombCount() : "";
    return bombs > 0 ? bombs : "";
  },

  render:  function () {
    return (
      <li className={this.klass()} onClick={this.handleClick}>{this.bombs()}</li>
    );
  }

});

module.exports = Tile;
