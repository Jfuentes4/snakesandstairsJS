class Token {
  constructor (player) {
    this._player = player;
    this._position = 0;
  }

  get player () {
    return this._player;
  }

  get position () {
    return this._position;
  }

  moverTo = (pos) => {
    this._position = pos;
  }
}

export default Token;
