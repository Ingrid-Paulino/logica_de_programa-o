// Calcule o valor de cada expressão abaixo e indique o tipo do resultado (inteiro ou real(decimal)):
  /* 
    a) (20 - 15)/2
    b) 20 - 15/2
    c) 2*5/20 + 30/15*2
    d) 2*(5/20) + 30/(15*2)
    e) 23 div 4
    f) 23 mod 4
    g) 35 div 6 + 2
    h) 35 div 6 - 2
    i) 35 div 6 * 2
    j) sqrt(625)
    k) sqr(20)
    l) 2 + sqrt(21 div 5)
  */

const expressions = [
  ((20 - 15)/2),
  (20 - 15/2),
  (2*5/20 + 30/15*2),
  ( 2*(5/20) + 30/(15*2)),
  Math.floor(23/4),
  (23 % 4),
  (Math.floor(35/6) + 2),
  (Math.floor(35/6) - 2),
  (Math.floor(35/6) * 2),
  (Math.sqrt(625)),
  (Math.pow(20, 2)),
  (2 + Math.sqrt(Math.floor(21/5)))
];

const results = expressions.map((expression) => {
  const calculateExpression = expression;
  const a = calculateExpression.toString()

  if (a.includes('.')) {
    console.log(calculateExpression, 'REAL');
  } else {
    console.log(calculateExpression, 'INTEIRO');
  }

  return calculateExpression;
})