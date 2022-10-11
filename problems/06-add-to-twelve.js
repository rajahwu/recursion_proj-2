/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false
***********************************************************************/
// ? Understand the problem
// * Input : array
// * Return: boolean

function addToTwelve(arr) {
  // Your code here
   if(arr.length === 0) return false  // * base case 
let num1 = arr.pop() // * recursive step    
let num2 = arr[arr.length - 1]       // * recursive case arr.length !== 0
  if(num1 + num2 === 12) return true
  return addToTwelve(arr)
}


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}