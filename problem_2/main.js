// Write a function: function solution(A); that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

const solution = require('./solution')

// case 1
let list= []
let result=solution(list)
console.log(result)

// case 2
list= [1,2,5,2,8]
result=solution(list)
console.log(result)

// case 3
list= [1,2,5,2,8,"string","5",undefined,{name:"jay"}]
result=solution(list)
console.log(result)