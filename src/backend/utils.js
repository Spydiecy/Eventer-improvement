module.exports.hexGenerate = function () {
  var random = Math.random();
  var exponent = --random.toExponential().split("-")[1];

  // Make sure random number is between 1.0 and 0.1 to assure correct hex values.
  random *= Math.pow(10, exponent);

  return "#" + (~~(random * (1 << 24))).toString(16);
};