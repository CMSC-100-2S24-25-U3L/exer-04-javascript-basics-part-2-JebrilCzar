import { v4 as uuidv4 } from "uuid";
import validator from "validator";
import { appendFileSync } from "node:fs";

function generateUniqueID(firstname, lastname) {
  //since the uuifv4 function generates multiple unique strings, split function was used to separate the strings by the -
  var randomid = uuidv4().split("-");

  //tolowercase functions was used to transform the first characters of the first and last name to lower case and add it to the first index of the randomid variable
  return firstname[0].toLowerCase() + lastname[0].toLowerCase() + randomid[0];
}

function addAccount(accountCredentials) {
  //this condition will ensure that array consists of exactly four entries
  if (accountCredentials.length == 4) {
    for (var i = 0; i < accountCredentials.length; i++) {
      //will check if all entries have values
      if (accountCredentials[i] == null) {
        console.log(i + "null");
        return false;
      }

      //will check if the first three entries are non-empty strings
      if ((accountCredentials[i] == "") & (i < 3)) {
        console.log(i + "blank");
        return false;
      }
    }

    if (!validator.isEmail(accountCredentials[2])) {
      return false;
    }

    if (
      (accountCredentials[3] < 18) |
      (typeof accountCredentials[3] != "number")
    ) {
      return false;
    }

    try {
      appendFileSync(
        "users.txt",
        accountCredentials[0] +
          "," +
          accountCredentials[1] +
          "," +
          accountCredentials[2] +
          "," +
          accountCredentials[3] +
          "," +
          generateUniqueID(accountCredentials[0], accountCredentials[1]) +
          "\n"
      );
    } catch (err) {
      /* Handle the error */
    }

    return true;
  } else {
    return false;
  }
}

export default { addAccount };
//test
//console.log(generateUniqueID("juan", "delacruz"));
//console.log(generateUniqueID("Alan", "Turing"));
//console.log(addAccount([12, 21, , 12]));
//console.log(addAccount(["asd", "sada", "aturing@w3c.com", "dsa"]));
//console.log(addAccount(["Alan", "Turing", "aturing@w3c.com", 58]));
//console.log(addAccount(["Tim", "Berners-Lee", "tim@w3c.com", 25]));
//console.log(addAccount(["Ted", "Nelson", "ted.n@w3c.com", 43]));
