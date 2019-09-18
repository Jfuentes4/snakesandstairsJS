class Dice {
  constructor (caras) {
    this._caras = caras;
  }

  throw = () => {
    let num = Math.ceil(Math.random() * this._caras);
    //console.log(num);
    return num;
  }
}

export default Dice;
