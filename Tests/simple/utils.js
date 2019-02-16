module.exports.add = (a, b) => a + b;

module.exports.square = x => {
  if (x == null) {
    return null;
  } else {
    return x * x;
  }
};
