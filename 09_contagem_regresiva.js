// Dado um número X construa um programa que retorne a contagem regressiva no formato X...X-1...X-2...0!!! 
// Por exemplo, se X = 10, retorne 10...9...8...7...6...5...4...3...2...1...0!!!

const contagemRegrsivaArray = []

function contageRegresiva(x) {
  console.log(x);
  for (let index = 1; index <= x; index ++) {
    let subtracao = x - index;
    contagemRegrsivaArray.push(subtracao)
  }
  console.log({ contagemRegrsivaArray });
}

console.log({ contagemRegrsivaArray });

contageRegresiva(11);