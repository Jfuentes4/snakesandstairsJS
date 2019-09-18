class Board {
  constructor () {
    this._cells = [];
    this._initialize();
  }

  get cells() {
    return this._cells;
  }

  _initialize = () => {

    for(let j = 0; j <= 100; j++) this._cells[j] = j;

    let specialCells = [],
    noSpecialCells = Math.floor((Math.random() * 3) + 6);

    for (let i = 0; i < noSpecialCells; i++) {
      let cell = Math.floor(Math.random() * 91);
      if(specialCells.find((element) => {return element === cell}) === undefined){
        specialCells.push(cell);
        let stairMaxSize = cell < 50 ? 45: 94 - cell;
        let stairSize =  Math.ceil((Math.random() * stairMaxSize) + 5);
        this._cells[cell] = cell + stairSize;
      }else {
        i--;
      }
    }

    noSpecialCells = Math.floor((Math.random() * 3) + 6);

    for (let h = 0; h < noSpecialCells; h++) {
      let cell = Math.floor(Math.random() * 93 + 5);
      if(specialCells.find((element) => {return element === cell}) === undefined){
        specialCells.push(cell);
        let snakeMaxSize = cell >= 50 ? 45: cell - 5;
        let snakeSize =  Math.ceil((Math.random() * snakeMaxSize) + 5);
        this._cells[cell] = cell - snakeSize;
      }else {
        h--;
      }
    }
    console.log(this._cells);
  }
}

export default Board;
