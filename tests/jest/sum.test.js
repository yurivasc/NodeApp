const sum = require("./sum");

test("sum numbers", () => {
  var res = sum(1, 2);
  expect(res).toBe(3);
});

test("sum null", () => {
  var res = sum(1, null);
  expect(res).toBe(null);
});
