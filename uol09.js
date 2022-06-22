/* Desenvolva um função que uma string como parametro e retorne uma string invertida. */

function invertedString(string) {
  let invertedString = "";

  for (var i = string.length - 1; i >= 0; i--) {
    invertedString += string[i];
  }

  return invertedString;

}

// console.log(invertedString("junior"));

function teste() {
  for (let x = 1; x < 3; ++x) {

    return "x = " + x;
  }
}


// console.log(teste());