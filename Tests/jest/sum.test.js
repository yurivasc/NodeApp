const sum = require("./sum");

test("sum numbers", () => {
  var res = sum(1, 2);
  expect(res).toBe(3);
});

test("sum null", () => {
  var res = sum(1, null);
  expect(res).toBe(1);
});

test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test("simple tests", () => {
  const value = 5;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(6);
  expect(value).toBeLessThanOrEqual(5);
});

test("test arrays", () => {
  const list = ["water", "lettuce", "tomatos"];

  expect(list).toContain("water");
});
