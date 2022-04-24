// Dado um número X construa um programa que retorne a contagem regressiva no formato X...X-1...X-2...0!!! 
// Por exemplo, se X = 10, retorne 10...9...8...7...6...5...4...3...2...1...0!!!

const contagemRegrsivaArray = []

function contageRegresiva(x) {
  for (let index = 1; index <= x; index ++) {
    let subtracao = x - index;
    contagemRegrsivaArray.push(subtracao)
  }
  contagemRegrsivaArray.join('...')
  // contagemRegrsivaArray.push('!!!')

  // console.log({ contagemRegrsivaArray });
  console.log( `${contagemRegrsivaArray.join('...')}!!!`);
}
contageRegresiva(11);

console.log({ contagemRegrsivaArray });


//ou

function contageRegresiva2(x) {
  let str = `${x}`;
  for (let index = x - 1; index >= 0; index --) {
    str += '...' + index;
  }
  console.log(`${str}!!!`);
  return `${str}!!!`
}

contageRegresiva2(10);