let goalsdata = require("./goals.json");
let symptomsdata = require("./symptoms.json");

const solution = (key_value) => {
  let obj = {};
  if (Object.keys(goalsdata).includes(key_value)) {
    obj["title"] = key_value;
    obj["symptoms"] = [];
    goalsdata[key_value].symptoms.forEach((element) => {
      obj["symptoms"].push(symptomsdata[element]);
    });
  } else {
    return "not present in data";
  }

  return obj;
};

module.exports = solution;
