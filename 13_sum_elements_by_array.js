// Neste desafio, você deve calcular e imprimir a soma dos elementos em uma matriz, tendo em mente que alguns desses inteiros podem ser bem grandes.

// Complete a função aVeryBigSum no editor abaixo. Deve retornar a soma de todos os elementos do array. aVeryBigSum tem os seguintes parâmetros: int ar[n]: uma matriz de inteiros.

// Sample Input
//5
// 1000000001 1000000002 1000000003 1000000004 1000000005


function aVeryBigSum(arr) {
  const res = arr.reduce((previousValue, currentValue) => previousValue + currentValue, 0)

  console.log(res);
}

aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])