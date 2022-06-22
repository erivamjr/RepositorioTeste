function generateNumbers(index) {
  let numbers = [];
  for (let i = 0; i <= index; i++) {
    for (let j = 0; j <= index; j++) {
      for (let k = 0; k <= index; k++) {
        for (let l = 0; l <= index; l++) {
          if (i + j + k + l === 21) {
            numbers.push(`${i}${j}${k}${l}`)
          }
        }
      }
    }
  }
  if (numbers.length === 0) {
    console.log(null);
  } else {
    for (const iterator of numbers) {
      console.log(iterator);
    }
  }
}

generateNumbers(6);