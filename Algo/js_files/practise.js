
//Function to find max & min in an array and handle null value  
let arr=[];
function minMAx(arr){
    arr.sort((a,b)=>a-b);
    let min=arr[0];

    arr.sort((a,b)=>b-a);
    let max=arr[0];
    
    if(min==undefined && max==undefined){
        min=null;
        max=null;
    }

    console.log('Min:- '+min);
    console.log('Max:- '+max);
}
minMAx([2,12,22,-3]);