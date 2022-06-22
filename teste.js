/*faça uma função que a mesma devolva todos os possíveis números de 4 dígitos, onde cada um seja menor ou igual a <maxDigit>, e a soma dos dígitos de cada número gerado seja 21.
Exemplos com maxDigit=6: 3666,4566 */



function generateNumbers(input) {
  if (input >= 6) {
    for (let i = 1; i <= input; i++) {
      for (let j = 0; j <= input; j++) {
        for (let k = 0; k <= input; k++) {
          for (let l = 0; l <= input; l++) {
            let value = (i + j + k + l);
            if (value === 21) {
              console.log(`${i}${j}${k}${l}`);
            }
          }
        }
      }
    }
  } else {
    console.log(null);
  }
}

generateNumbers(6);