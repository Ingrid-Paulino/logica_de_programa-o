// Construa um algoritmo que encontre a soma de todos os números naturais múltiplos de 3 ou 5 menores que um dado número. Por exemplo, quando listamos todos os números naturais menores que 10 que são múltiplos de 3 ou 5, temos: 3, 5, 6 e 9. A soma desses números é 3+5+6+9= 23

function multiplos(x) {
  let soma = 0;

  for (let index = 1; index < x; index ++) {
    if ((index % 3 === 0) || (index % 5 === 0 )) {
      soma += index;
    }
  }
  console.log({soma});
}
multiplos(10)