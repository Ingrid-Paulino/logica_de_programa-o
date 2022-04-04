// Given an array of integers, find the sum of its elements.

// For example, if the array ar=[1, 2, 3] , 1+2+3=6 , so return 6.

function simpleArraySum1(ar) {
  // Write your code here
 return ar.reduce((n, arr) => n + arr, 0);
}

// ou

function simpleArraySum2(ar) {
  // Write your code here
  let soma = 0;
 for (let index=0; index < ar.length; index++) {
    soma += ar[index];
 }
 return soma;
}

console.log('simpleArraySum1:', simpleArraySum1( [1, 2, 3]));
console.log('simpleArraySum1:', simpleArraySum1( [10, 20, 30, 50]));
console.log('simpleArraySum2:', simpleArraySum2([1, 2, 3]));
console.log('simpleArraySum2:', simpleArraySum2( [10, 20, 30, 5]));