/*
  Exercise 1 : write aJS program to replace the first digit in a string (should contain atleast digit) with $ character
*/

const replaceFirstDigit = (str) =>
  str.replace(/[0-9]/g,'$'); //for replacing every digit use /g- global

console.log(replaceFirstDigit('hello2all2'));
console.log(replaceFirstDigit('he23kdn4'));


