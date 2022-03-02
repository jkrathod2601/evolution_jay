const solution = (list) => {
  // initial sum is 0
  let sum = 0;

  //iterate each element of list with use of foreach
  list.forEach((ele) => {
    // check if element is only a number
    if (!isNaN(ele) && typeof ele != "string") {
      sum = sum + ele;
    }
  });

  // returning a sum of list
  return sum;
};

module.exports = solution;
