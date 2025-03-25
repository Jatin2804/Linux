function GetPieces(arr){
    console.log(arr);
 let pieces = 1;
 let grpMidgot = false;
 for (let i = 1; i < arr.length; i++) {
    
    if(arr[i] !== arr[i-1]){
        console.log(arr[i-1]," ",arr[i],grpMidgot);
       
        if(arr[i-1] ===  0){
            grpMidgot = true
         }
            pieces++;
            console.log("cutting");
        }
    }
 
 if(grpMidgot){
   return pieces-1;
 }
 return pieces;
}

let ans =GetPieces([1,1,0,1,0,0,1]);
console.log(ans);

// 11010
// 00000000
// 1
// 10
// 0001111
// 0110

// 3
// 1
// 1
// 2
// 1
// 2


