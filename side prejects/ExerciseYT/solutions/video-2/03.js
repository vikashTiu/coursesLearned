/*
  Exercise 3 : write a JS program to concatenate two strings except  their first character
*/ 

//--------MY METHOD--------
// const concatString = (str1 , str2) => {
//   return str1.slice(1,str1.length) + str2.slice(1,str2.length)
// }

const concatString = (str1,str2) =>
  str1.slice(1) + str2.slice(1)



console.log(concatString('name','vikash'))
console.log(concatString('tiue','vikash'))
console.log(concatString('Jigyasha','vikash'))