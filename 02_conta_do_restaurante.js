// EXERCÍCIO 2 
// Elaborar um programa que leia o valor de um jantar. Calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.
// EXEMPLO: 
// Valor do jantar: R$80,00
// Taxa do garçom: R$8,00
// Total a pagar: R$88,00
// ---------------------------------------------------------------

function restaurante(valorJantar, porcentagem) {
  const porcentagemGarcom = Number(((valorJantar * porcentagem) / 100).toFixed(2));
  const totalPagar = (valorJantar + porcentagemGarcom);

  console.log(`A taxa do garçom é R$${porcentagemGarcom}`);
  console.log(`O valor total é R$${totalPagar}`);
  return totalPagar;
}

restaurante(80, 10)