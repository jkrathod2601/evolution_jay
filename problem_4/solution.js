let goalsdata = require("./goals.json");
let symptomsdata = require("./symptoms.json");

const solution = (key_value) => {

  // check if key_value present in goals.json file
  if (Object.keys(goalsdata).includes(key_value)) {
    // create a empty object for result
    let obj = {};

    // add title to result object
    obj["title"] = key_value;

    // declaring a empty symptoms array for result and add into object
    obj["symptoms"] = [];

    // iterating a symptoms array of key_value
    goalsdata[key_value].symptoms.forEach((element) => {
      
      // finding the value from symptomsdata with element and push into result object
      obj["symptoms"].push(symptomsdata[element]);

    });

    // return final object
    return obj;

  } else {

    // if key_value not present in goals.json file then return this
    return "not present in data";
    
  }
};

module.exports = solution;
