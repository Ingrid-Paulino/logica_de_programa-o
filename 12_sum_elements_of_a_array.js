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

  // let res = 0;

  // for(let index=0; index < arr.length; index++) {
  //   // console.log('sailas', res += arr[index]);
  //   res += arr[index]
  // }

  // console.log(res);
}

aVeryBigSum(5)