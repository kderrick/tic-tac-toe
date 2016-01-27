function Player(mark) {
  this.mark = mark
}

function Space(xCoordinate, yCoordinate) {
  this.xCoordinate = xCoordinate;
  this.yCoordinate = yCoordinate;
};

Space.prototype.markedBy = function(player) {
  return player.mark;
};

function Board() {
  this.grid = [];
};

Board.prototype.gridMaker = function() {
  for (var i = 1; i <= 3; i++) {
    var newSpace = new Space(1, i);
    var newSpace2 = new Space(2, i);
    var newSpace3 = new Space(3, i);
    this.grid.push(newSpace, newSpace2, newSpace3);
  };
  console.log(this.grid);
  return this.grid;
};

function Game() {
  this.turn = 0;
};
