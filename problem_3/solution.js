const solution = (list) => {
  // declaring two different even and odd array
  let even = [];
  let odd = [];

  // iterate element of list into array
  list.forEach((ele) => {
    // check if element is only number
    if (!isNaN(ele) && typeof ele != "string") {
      // check element is even
      if (ele % 2 == 0) {
        // if element is even then push into even array
        even.push(ele);
      } else {
        // if element is not even then add into odd array
        odd.push(ele);
      }
    }
  });

  // returning both array into one final array
  return [odd, even];
};

module.exports = solution;
