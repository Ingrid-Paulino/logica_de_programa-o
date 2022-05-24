// Neste desafio, você deve calcular e imprimir a soma dos elementos em uma matriz, tendo em mente que alguns desses inteiros podem ser bem grandes.


// Sample Input
//5

// saida1
// 1000000001 1000000002 1000000003 1000000004 1000000005

// saida2 - soma

function aVeryBigSum(ar) {
  // Write your code here
  const arr = []
  for(let index=1; index <= ar; index++) {
    let result = 10**8 + [index]
    // console.log(baseNine);
    arr.push(Number(result));
  }

  const sumWithInitial = arr.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  console.log(sumWithInitial);

  // OU

  // let res = 0;
  // for(let index=0; index < arr.length; index++) {
  //   // console.log('sailas', res += arr[index]);
  //   res += arr[index]
  // }
  // console.log(res);
}

aVeryBigSum(5)