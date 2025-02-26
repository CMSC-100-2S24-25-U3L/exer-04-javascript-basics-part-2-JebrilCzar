import { v4 as uuidv4 } from "uuid";

function generateUniqueID(firstname, lastname) {
  //since the uuifv4 function generates multiple unique strings, split function was used to separate the strings by the -
  var randomid = uuidv4().split("-");

  //tolowercase functions was used to transform the first characters of the first and last name to lower case and add it to the first index of the randomid variable
  return firstname[0].toLowerCase() + lastname[0].toLowerCase() + randomid[0];
}

//test
console.log(generateUniqueID("juan", "delacruz"));
console.log(generateUniqueID("Alan", "Turing"));
