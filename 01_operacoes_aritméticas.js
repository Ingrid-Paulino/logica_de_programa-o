// EXERCÍCIO 1
// Faça as 4 operações básica com base nos números 2 e 4:
// Ao final de cada operação imprima na tela no seguinte formato: 
// Soma: 2 + 4 = x
// Subtração : 2 - 4 = x
// Divisão: 2 / 4 = x
// Multiplicação: 2 * 4 = x
// ----------------------------------------------------

let num1 = 2;
let num2 = 4;

function count(sinal) {
  switch (sinal) {
    case '-':
      let res1 = (num1 - num2) * (-1);
      console.log('subtração: (2 - 4) * (-1) = ' + res1); 
      break;
    case '+':
      let res2 = (num1 + num2);
      console.log('soma: 2 + 4 = ' + res2); 
      break;
    case '*':
      let res3 = (num1 * num2);
      console.log(' multiplicação: 2 * 4 = ' + res3); 
      break;
    case '/':
      let res4 = (num2 / num1);
      console.log('divisão: 4 / 2 = ' + res4); 
      break;
    default:
      console.log('Sinal não encontrado');
      break;
  }
}

count('t');

