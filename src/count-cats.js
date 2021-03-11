const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
 let counterCat = matrix.flat().filter( el => el === '^^' )
 return counterCat.length
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
