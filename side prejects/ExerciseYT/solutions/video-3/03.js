/*
  Exercise 1 : write aJS program to check whether a given array of integers is sorted in ascending order
*/
// --------My method--------
// function isAscending(arr){
//   let i=0;
//   while(i<arr.length){
//     if(arr[i]>arr[i+1]){
//       return console.log("It is not ascending!");
//     }
//     i++;
//   }
//   console.log("Yes,it is ascending!");
// }

const isAscending = (arr) => {
  for(let i=0; i<arr.length; i++){
    if(arr[i]>arr[i+1]) return console.log("It is not ascending!");
  }
  return console.log("Yes,it is ascending!");
}

isAscending([22,33,44,55,11]);
isAscending([11,45,99,123,123])