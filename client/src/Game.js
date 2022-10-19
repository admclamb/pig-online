export class Game {
  constructor(player1Name = 'Player 1', player2Name = 'Player 2') {
    this.player1 = { score: 0, name: player1Name };
    this.player2 = { score: 0, name: player2Name };
    this.turn = player1;
  }

  switchTurn() {
    if (this.turn === this.player1) {
      this.turn = this.player2;
    } else {
      this.turn = this.player1;
    }
  }
}
