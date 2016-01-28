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
Game.prototype.result = function(arr, comboInput) {
  var lowLeft = arr[0];
  var lowCenter = arr[1];
  var lowRight = arr[2];
  var midLeft = arr[3];
  var midCenter = arr[4];
  var midRight = arr[5];
  var upperLeft = arr[6];
  var upperCenter = arr[7];
  var upperRight = arr[8];

  var combo1 = [lowLeft, lowCenter, lowRight];
  var combo2 = [midLeft, midCenter, midRight];
  var combo3 = [upperLeft, upperCenter, upperRight];
  var combo4 = [lowLeft, midLeft, upperLeft];
  var combo5 = [lowCenter, midCenter, upperCenter];
  var combo6 = [lowRight, midRight, upperRight];
  var combo7 = [upperLeft, midCenter, lowRight];
  var combo8 = [upperRight, midCenter, lowLeft];
  var count = 0;

  for (var i = 0; i < comboInput.length; i++) {
    if (comboInput[i] === combo1[0] || comboInput[i] ===  combo1[1] || comboInput[i] ===  combo1[2] ) {
      count++;
    } if (count === 3) {
      return 'You are the winner';
    }
  };
  for (var i = 0; i < comboInput.length; i++) {
    if (comboInput[i].mark === combo2[0].mark || comboInput[i].mark ===  combo2[1].mark || comboInput[i].mark ===  combo2[2].mark ) {
      count++;
    } if (count === 3) {
      return 'You are the winner';
    }
  };
  for (var i = 0; i < comboInput.length; i++) {
    if (comboInput[i].mark === combo3[0].mark || comboInput[i].mark ===  combo3[1].mark || comboInput[i].mark ===  combo3[2].mark ) {
      count++;
    } if (count === 3) {
      return 'You are the winner';
    }
  };
  for (var i = 0; i < comboInput.length; i++) {
    if (comboInput[i].mark === combo4[0].mark || comboInput[i].mark ===  combo4[1].mark || comboInput[i].mark ===  combo4[2].mark ) {
      count++;
    } if (count === 3) {
      return 'You are the winner';
    }
  };
  for (var i = 0; i < comboInput.length; i++) {
    if (comboInput[i].mark === combo5[0].mark || comboInput[i].mark ===  combo5[1].mark || comboInput[i].mark ===  combo5[2].mark ) {
      count++;
    } if (count === 3) {
      return 'You are the winner';
    }
  };
  for (var i = 0; i < comboInput.length; i++) {
    if (comboInput[i].mark === combo6[0].mark || comboInput[i].mark ===  combo6[1].mark || comboInput[i].mark ===  combo6[2].mark ) {
      count++;
    } if (count === 3) {
      return 'You are the winner';
    }
  };
  for (var i = 0; i < comboInput.length; i++) {
    if (comboInput[i].mark === combo7[0].mark || comboInput[i].mark ===  combo7[1].mark || comboInput[i].mark ===  combo7[2].mark ) {
      count++;
    } if (count === 3) {
      return 'You are the winner';
    }
  };
  for (var i = 0; i < comboInput.length; i++) {
    if (comboInput[i].mark === combo8[0].mark || comboInput[i].mark ===  combo8[1].mark || comboInput[i].mark ===  combo8[2].mark ) {
      count++;
    } if (count === 3) {
      return 'You are the winner';
    }
  };
};
