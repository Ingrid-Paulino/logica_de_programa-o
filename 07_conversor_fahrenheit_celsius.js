// Para se converter uma temperatura medida em um termômetro em Fahrenheits para a escala Celsius, com a qual estamos mais acostumados no Brasil deve-se usar a equação: C= F-32 / 1,8 onde C é a temperatura em graus Celsius e F a temperatura medida em Fahrenheits.

//Construa um algoritmo que, ao receber um valor de temperatura medido em Fahrenheits retorne a medida equivalente em Celsius. Por exemplo, ao receber a leitura de 95°F retorne: 95°F-32 / 1,8 = 35,0°C 

//Atenção para a saida em um número de ponto flutuante

const conversao = (numFahrenheits) => {
  const celsius = ((numFahrenheits - 32) / 1.8).toFixed(1);
  console.log({ celsius });
  return celsius
}

conversao(95)
