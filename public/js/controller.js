$(document).ready(function() {
  var view = new View();
  var board = new ConnectFour();
  var turn = false;
  var controller = new Controller(view, board);
  controller.initialize()
  controller.bindListeners();

})

Controller = function(view, board) {
  this.won = false
  this.view = view
  this.board = board
  this.currentPlayer = 1
  this.initialize = function(){
    this.view.makeBoard()
  }
}

Controller.prototype = {
  bindListeners: function() {
    //change - put EventListener on
    $('body').on("click","canvas", this.playerTurn.bind(this))
  },

  //current player instead of player1 or player2
  //switches player everytime there's a successful click

  playerTurn: function(e){
    if (this.won){
      return 0
    }
    else {
      var col = parseInt($(e.target).attr("id"))
      var row = this.board.makeMove(this.currentPlayer, col)
      if (row != -1 ){
        this.view.placePiece(col, row, this.currentPlayer)
        if (this.board.checkWin(col, row)){
          this.won = true
        }
        this.currentPlayer *= -1
      }
    }
  }
}




// 1. odd/ even clicks - create an algorithm that listens for the click and adds to the total clicks variable. (looks complicated but whatever)
// 2. player active: (boolean) -- true or false (seems easier)
// after every click on a COLUMN, you switch states/turns and start the timer


