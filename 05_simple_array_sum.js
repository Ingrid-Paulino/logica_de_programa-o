// Given an array of integers, find the sum of its elements.

// For example, if the array ar=[1, 2, 3] , 1+2+3=6 , so return 6.

function simpleArraySum(ar) {
  // Write your code here
 return ar.reduce((n, arr) => n + arr, 0)
}

console.log(simpleArraySum([1, 2, 3]));

console.log(simpleArraySum([10, 20, 30, 5]));