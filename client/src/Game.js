import { Player } from './Player';

export class Game {
  constructor(player1Name = 'Player 1', player2Name = 'Player 2') {
    this.player1 = new Player(player1Name);
    this.player2 = new Player(player2Name);
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
