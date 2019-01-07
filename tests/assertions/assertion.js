const expect = require('expect');
const utils = require('../simple/utils');

it ('should should add two numbers', () => {
    var res = utils.add(3,2);

    expect(res).toBe(5);
    expect(typeof res).toBe('number');
})
