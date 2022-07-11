// Coloque VERDADEIRO ou FALSO na avaliação das seguintes expressões:
/* 
  a) 6 <= 7
  b) (64) ^ (1/2) > (5)*2
  c) 'Pseudocódigo' < 'PSEUDOCÓDIGO'
  d) 'Pseudocódigo' > 'turbo'
  e) 3 + 5 <= 2 * 4
*/

const valores = [
  (6 <= 7),
  ((64) ^ (1/2) > (5)*2),
  ('Pseudocódigo'.length < 'PSEUDOCÓDIGO'.length),
  ('Pseudocódigo'.length > 'turbo'.length),
  (3 + 5 <= 2 * 4)
]

const result = valores.forEach((val) => {
  if (val) {
    console.log('true');
  } else {
    console.log('false');
  }
})