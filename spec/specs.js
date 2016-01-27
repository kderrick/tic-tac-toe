describe('Player', function() {
  it('should return the players mark', function() {
    var testPlayer = new Player('X');
    expect(testPlayer.mark).to.equal('X');
  });
});

describe('Space', function() {
  it("returns the player's coordinate of x", function() {
      var testSpace = new Space(1,2);
      expect(testSpace.xCoordinate).to.equal(1);
   });

  it("returns the player's coordinate of y", function() {
     var testSpace = new Space(1,2);
     expect(testSpace.yCoordinate).to.equal(2);
  });

  it("lets a player mark a space", function() {
     var testPlayer = new Player("X")
     var testSpace = new Space(1,2);
     expect(testSpace.markedBy(testPlayer)).to.equal(testPlayer.mark);
  });

});

describe('Board', function() {
  it('expect Board to be a constructor with one empty array property', function() {
    var newBoard = new Board();
    expect(newBoard.grid).to.eql([])
  });

  it('expect thisBoard.gridMaker to make a grid of nine spaces', function() {
    var newBoard = new Board();
    newBoard.gridMaker();
    expect(newBoard.grid.length).to.equal(9);
  });

  it('expect thisBoard.gridMaker create the specified coordinates of x', function() {
    var newBoard = new Board();
    newBoard.gridMaker();
    expect(newBoard.grid[4].xCoordinate).to.equal(2);
  });

  it('expect thisBoard.gridMaker create the specified coordinates of y', function() {
    var newBoard = new Board();
    newBoard.gridMaker();
    expect(newBoard.grid[7].yCoordinate).to.equal(3);
  });
});
