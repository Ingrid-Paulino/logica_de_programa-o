/* Dado um número X, retorne a diferença entre X e 10 de forma que o resultado seja sempre um valor positivo. 
Isto é: 
  •se X < 10, faça 10-X, por exemplo, se X = 3, retorne 7 (10-3)
  • se X> 10, faça X-10, por exemplo, se X = 15, retorne 5 (15-10) */

// function diferenca(x) {
//   if (x < 10) console.log(10 - x); 
//   if (x > 10) console.log(x - 10);
// }

// ou

// function diferenca(x) {
//   if (x < 10) {
//     console.log(10 - x); 
//   } else {
//     console.log(x - 10);
//   }
// }

// ou

function diferenca(x) {
  x < 10 ? console.log(10 - x) : console.log(`O resultado é: ${x - 10}`);
}

diferenca(20)