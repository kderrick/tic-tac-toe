// Creates Player and their mark
function Player(mark) {
  this.mark = mark
}

//Creates Space with x and y coordinates.
function Space(xCoordinate, yCoordinate) {
  this.xCoordinate = xCoordinate;
  this.yCoordinate = yCoordinate;
  this.mark = '';
};

// Create a relationship between a Player's mark and the Space
Space.prototype.markedBy = function(player) {
  return this.mark =  player.mark;
};

// Creates an empty Board grid to be used by gridMaker
function Board() {
  this.grid = [];
};

// Fills the empty grid with Space values
Board.prototype.gridMaker = function() {
  for (var i = 1; i <= 3; i++) {
    var newSpace = new Space(1, i);
    var newSpace2 = new Space(2, i);
    var newSpace3 = new Space(3, i);
    this.grid.push(newSpace, newSpace2, newSpace3);
  };
  return this.grid;
};

// this.turn can be increased in UI by button click- if is even: player 1 turn, else: player 2 turn.
function Game() {
  this.turn = 0;
};

// Creates a result based on the input of the current grid array, and the input of the value of the mark/Space relationship. Will return win there is a winner.
Game.prototype.result = function(arrayInput, comboInput) {
  var lowLeft = arrayInput[0];
  var lowCenter = arrayInput[1];
  var lowRight = arrayInput[2];
  var midLeft = arrayInput[3];
  var midCenter = arrayInput[4];
  var midRight = arrayInput[5];
  var upperLeft = arrayInput[6];
  var upperCenter = arrayInput[7];
  var upperRight = arrayInput[8];

  var combo1 = [lowLeft, lowCenter, lowRight];
  var combo2 = [midLeft, midCenter, midRight];
  var combo3 = [upperLeft, upperCenter, upperRight];
  var combo4 = [lowLeft, midLeft, upperLeft];
  var combo5 = [lowCenter, midCenter, upperCenter];
  var combo6 = [lowRight, midRight, upperRight];
  var combo7 = [upperLeft, midCenter, lowRight];
  var combo8 = [upperRight, midCenter, lowLeft];
  var combinations = [combo1, combo2, combo3, combo4, combo5, combo6, combo7, combo8];

  var count = 0;

  for (var i = 0; i < combinations.length; i++) {
    if ((i === 7) && (count !== 3)) {
      return "This is a tie!";
    }
    count = 0
    var comboIndex = combinations[i];
    for (var j = 0; j < comboInput.length; j++) {
      if (comboInput[j] === comboIndex[0] || comboInput[j] ===  comboIndex[1] || comboInput[j] ===  comboIndex[2] ) {
        count++;
      } if (count === 3) {
        return 'You are the winner';
      }
    }

  };

};
