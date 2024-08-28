//11a
/*
const nums = [10,20,30];
console.log(nums);
*/

//11b
/*
let myArray=[1,22,34,2,123,345];
console.log(myArray[myArray.length-1])
function getLastvalue(myArray){
    let indexLength=myArray.length - 1;
    console.log(myArray[indexLength]);
}
getLastvalue(myArray);
*/

//11c
/*
let myArray=[1,22,34,2,123,345];
function arraySwap(arr){
    let temp;
    temp = arr[0];
    arr[0]=arr[arr.length-1];
    arr[arr.length-1]=temp;
    console.log(arr);
}
arraySwap(myArray)
*/

//11d
/*
function even(){
    let i=0;
    for(i=0;i<=10;i+=2){
        console.log(i);
    }
    
    while(i<= 10){
        console.log(i);
        i+=2;
    }
    
}
even();
*/

//11e
/*
for(let i=5;i>=0;--i){
    console.log(i);
}
let i=5;
while(i>=0){
    cosole.log(i);
    --i;    
}
*/

//11g-pushing increased number into array 

let arr=[12,23,34];
let i=0;
let newArr=[];
while(i<arr.length){
    newArr.push(arr[i]+1);
    ++i;
}
console.log(newArr);


