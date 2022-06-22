const isValid = (2 == 2);
const isValid1 = (0 === "");
const isValid2 = (1 == "1");
const isValid3 = (0 === []);
const isValid4 = (0 === false);

console.log(isValid, isValid1, isValid2, isValid3, isValid4);

function fn(v) {
  if (v == 1 || v == 0) {
    return 1
  }
  if (v % 2 == 0) {
    return fn(v / 2) + 2;
  } else {
    return fn(v - 1) + 3;
  }
}

console.log(fn(7));