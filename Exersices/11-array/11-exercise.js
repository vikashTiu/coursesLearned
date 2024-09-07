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
/*
let arr=[12,-23,-1];
let i=0;
let newArr=[];
while(i<arr.length){
    newArr.push(arr[i]+1);
    ++i;
}
console.log(newArr);
*/

//11h-function increases by 1
/*
function addOne(arr){
    let i=0;
    let newArr=[];
    while(i<arr.length){
        newArr.push(arr[i]+1);
        ++i;
    }
    console.log(newArr);
}
addOne(arr);
*/

//11i-adding into array
/*
function addNum(arr,num){
    let newArr =[],i=0;
    while(i<arr.length){
        newArr.push(arr[i]+num);
        ++i;
    }
    console.log(newArr);
}
addNum([1,22,19,5],5);
*/

//11j-Add two array
/*
function addArray(arr1,arr2){
    let i=0,k;
    let newArr=[];

    if(arr1.length<arr2.length){
        k=arr1.length;
    }else{
        k=arr2.length;
    }

    while(i<k){
        newArr.push(arr1[i]+arr2[i]);
        ++i;
    }
    console.log(newArr);
}
addArray([1,2,3],[4,5,6]);
*/

//11k-Count number of positive numbers
/*
function countPositive(nums){
    let i=0,count=0;
    while(i<nums.length){
        if(nums[i]>=0){
            count++;
        }
        ++i;
    }
    console.log(count);
}
countPositive([1,-9,22,-88,8]);
*/

//11L(Challeng Section)-Function to return min and max value in the array

function minMax(nums){
    let min,max;
 
    max=Math.max(...nums);
    min=Math.min(...nums);
 
    console.log(`min:- ${min}\nmax:- ${max}`);
}
minMax([1,22,3,-645,66,7,2456]);


//11m- MINMAX  function handling null value
function minMAx1(arr){
    arr.sort((a,b)=>a-b);
    let min=arr[0];

    arr.sort((a,b)=>b-a);
    let max=arr[0];

    if(min==undefined && max==undefined){
        min=null;
        max=null;
    }
    console.log(`min:- ${min}\t max:- ${max}`);

}
minMAx1([]);


//word_count from a string

function wordCount(str){
    return str.split(" ").length;
}
console.log(wordCount("Hello world"));

//11n

function countWord(str){
    let countApple = 0;
    let countGrape = 0;
    let i=0;

    while(i<str.length){
        if(str[i]=='Apple'||str[i]=='apple'){
            countApple+=1;
        }else if(str[i]=='Grape'||str[i]=='grape'){
            countGrape+=1;
        }
        i++;
    }

    let countFruit = {
        Apple : countApple,
        Grape : countGrape
    };

    console.log(countFruit);

}
countWord(['Apple','grape','Apple','apple']);