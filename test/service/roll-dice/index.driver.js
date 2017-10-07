const rollDice = require('src/service/roll-dice/index.js');
const driverChaining = require('test/util/driver-chaining.js');

class RollDiceDriver {
  _result;

  roll() {
    this._result = rollDice();
    return this;
  }

  given = {
    randoms: (arg1, arg2) => {
      const values = [arg1, arg2];
      spyOn(Math, 'random').and.callFake(() => values.shift());
    }
  }
  result = {
    rolled: (arg1, arg2) => {
      expect(this._result).toEqual([arg1, arg2]);
    }
  }
}

module.exports = driverChaining(RollDiceDriver);