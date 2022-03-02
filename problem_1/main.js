// Question 1: You have an array containing the following values [10, 20, 60, 30, 54, 39]. Write a function to get the sum of all elements of an array. Note:- This function should manage different possibilities.

const solution=require('./solution')


// case 1
let list=["10", "20", 60, 30, 54, 39 ,undefined]
let result=solution(list)
console.log(result)

// case 2
list= [1,2,5,2,8,-20,{name:"kay"},NaN,40.20]
result=solution(list)
console.log(result)

// case 3
list= [NaN,undefined,{name:"jay"}]
result=solution(list)
console.log(result)
