import Board from './Board.js';
import Dice from './Dice.js';
import Token from './Token.js';

class Game {
  constructor (players) {
    this._noPlayers = players;
    this._board = new Board();
    this._dice = new Dice(6);
    this._tokens = [];
    this._createTokens();
  }

  _createTokens = () => {
    for (let i = 0; i < this._noPlayers; i++){
      this._tokens.push(new Token('Player ' + (i+1)));
    }
  }

  start = () => {
    let winner = false;
    do {
      this._tokens.forEach((token) => {
        if (winner === false) {
          this.tirar(token);
          console.log(token.player + ' esta en ' + token.position);
          if (token.position >= 100) {
            winner = token.player;
          }
        }
      });
    } while (winner === false)

    console.log('El ganador es ' + winner);
  }

  tirar = (token) => {
    token.moverTo(this._board.cells[token.position + this._dice.throw()]);
    if (token.position === undefined) {
      token.moverTo(101);
    }
  }
}

export default Game;
