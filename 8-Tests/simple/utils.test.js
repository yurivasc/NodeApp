const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(33, 11);

  if (res !== 44) {
    throw new Error(`Expected 44, but got ${res}.`)
  }
});

it('should square a number', () => {
  var res = utils.square(3);

  if (res !== 9) {
    throw new Error(`Expected 9, but got ${res}.`);
  }
});

describe("Test cases.. ", () => {
  it('should not sum if null',  () => {
    var res = utils.square(null);

    if (res !== null){
      throw new Error(`Expected null, but got ${res}`);
    }
  })
}) 



//npm install mocha -g
//mocha utils.test.js