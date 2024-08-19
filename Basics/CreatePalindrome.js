// function Solution(N,S){
//    if(N.length === 0){
//     return 0;
//    }else if (N.length > 1000){
//     return 'N should not pass 1000 integers';
//    }
//    if (S !== S.toLowerCase()){
//     return 'The string should be in lowercase'
//    }
//    if(N !== S.length){
//     return 'Length does not match the length of N'
//    }
// let chars = S.split('');

// }
// console.log()

function sol(S) {
   const strLen = S.length;
   const splitStr = S.split("");
   console.log(splitStr);
 
   // get the left and right index of the split string
 
   let left = 0;
   let right = strLen - 1;
 
   while (left <= right) {
     if (splitStr[left] === "?" && splitStr[right] === "?") {
       splitStr[left] = "a";
       splitStr[right] = "a";
     } else if (splitStr[left] === "?") {
       splitStr[left] = splitStr[right];
     } else if (splitStr[right] === "?") {
       splitStr[right] = splitStr[left];
     } else if (splitStr[left] !== splitStr[right]) {
       return "NO";
     }
 
     left++;
     right--;
   }
 
   return splitStr.join("");
 }
 
 console.log(sol("?ab??a"));
 

