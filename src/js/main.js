import Game from './Game.js';

class Main {
  constructor () {
    this._game = new Game(2);
    document.getElementById('btnTirar').addEventListener('click', this._tirar);
    this._game.start();
  }

}

var main = new Main();
