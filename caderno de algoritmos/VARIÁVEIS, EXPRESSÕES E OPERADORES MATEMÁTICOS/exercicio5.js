// Qual é o resultado das operações quando o algoritmo encontrar as seguintes linhas:
  /*
    a) Escreva ('mario' = 'maria');
    b) Escreva (2 + 4 = 6);
    c) Escreva (10 - 4 > 7);
    d) Escreva ((2*3)>(3*2));
    e) Escreva (não('a' > 'A'));
  */

const valores = [
  ('mario' == 'maria'),
  ((2 + 4) == 6),
  (10 - 4 > 7),
  ((2*3) > (3*2)),
  (!('a' > 'A'))
]

const result = valores.forEach((val) => {
  if (val) {
    console.log('true');
  } else {
    console.log('false');
  }
})