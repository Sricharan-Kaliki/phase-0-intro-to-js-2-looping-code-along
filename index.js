// Code your solutions in this file
function writeCards(arr,name){
    const resultArray=[];
    for(let i=0;i<arr.length;i++){
       
       resultArray.push( `Thank you, ${arr[i]}, for the wonderful surprise gift!`)
    }
return resultArray;
}

function countDown(n)
{
    for(let i=n;i>=0;i--){
       console.log(i);
    }
}