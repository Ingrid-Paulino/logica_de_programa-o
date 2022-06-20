// Dada uma matriz quadrada, calcule a diferença absoluta entre as somas de suas diagonais.
// Por exemplo, a matriz quadrada 'arr' é mostrado abaixo:
/*
     1 2 3
     4 5 6
     9 8 9
*/
// A diagonal da esquerda para a direita = 1+5+9 = 15. A diagonal da direita para a esquerda = 3+5+9 = 17. Sua diferença absoluta é 15 - 17 = 2.

function diagonalDifference(arr) {
  let leftDiagonal = 0;
  let rightDiagonal = 0;
  for (let index=0; index < arr.length; index++) {
    leftDiagonal += arr[index][index];
    rightDiagonal += arr[index][arr.length - 1 - index];
  }
  console.log([leftDiagonal, rightDiagonal]);
  console.log((leftDiagonal - rightDiagonal) * (-1));
  console.log(Math.abs(leftDiagonal - rightDiagonal));

  return (leftDiagonal - rightDiagonal) * (-1);
  // return Math.abs(leftDiagonal - rightDiagonal)
}

const matriz = [
 [1, 2, 3],
 [4, -5, 6],
 [7, 8, -9]
  ]

diagonalDifference(matriz)


