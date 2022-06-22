/*desenvolva uma função que recupere o valor de um parametro de query string a partir de uma URL.

a função deverá receber duas strings: uma URL e o nome do parametro.

A função deve retornar o valor do parametro encontrado na query string. Caso o parametro NÃO 
exista na URL, retorne na string a palavra "none".

Exemplo: url > "http://www.uol.com.br?company=uol&page=home"
param > "company"

return uol*/

function getQueryString(url, param) {
  let queryString = url.split("?")[1];
if(param) {
  
  let params = queryString.split("&");
}
  console.log(params);
  let paramValue = "none";

  for (var i = 0; i < params.length; i++) {
    let paramName = params[i].split("=")[0];
    let paramValuefor = params[i].split("=")[1];

    if (paramName === param) {
      return paramValuefor;
    }
  }

  return paramValue;
}

console.log(getQueryString("http://www.uol.com.br?company=uol&page=home", "city"));