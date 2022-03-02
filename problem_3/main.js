// Write a function: function solution(A); That will extract even and odd numbers from an array A. For example, given A = [1, 3, 4, 6, 8, 9], the function should return two arrays, index 0 should contain array of odd numbers and index 1 should return array of even number Note: if there are no even or odd numbers, the function should return an empty array.

const solution=require('./solution')


let list = [1, 3, 4, 6, 8, 9]
let result=solution(list)

console.log(result)