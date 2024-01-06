const _ = require("underscore");
let array = [1, 2, 3, 4, 5];

const found = _.contains(array, 4);
console.log(found);

var sum = _.reduce(
  array,
  function (memo, num) {
    return memo + num;
  },
  0
);
console.log(sum);
