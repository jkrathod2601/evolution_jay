const solution = (list) => {
  // initial i is 1 because we start from positive integer
  let i = 1;

  // check for every i present in list
  while (true) {
    // check i is present in list
    if (list.includes(i)) {
      // if present in list so increase the i
      i = i + 1;
    } else {
      // return i if not in list
      return i;
    }
  }
};

// solution2
// const solution=(list)=>{
//     dic={}
//     list.forEach((ele)=>{
//         dic[ele]=1
//     })
//     let i=1
//     while(true){
//         if(dic[i]==undefined){
//             return i
//         }
//         i=i+1
//     }
// }

module.exports = solution;
