// EXERCÍCIO 3
// =========================
// Elaborar um programa para uma loja, o qual leia o preço de um produto e informe as opções de pagamento da loja. Calcule e informe o valor para pagamento à vista com 10% de desconto e o valor em 3x.
// EXEMPLO:
// Preço: R$60,00
// À vista: R$54,00
// Ou 3x de: R$20,00
// =========================

const pagamentoLoja = (preco, formaPagamento) => {
  switch (formaPagamento) {
    case 'aVista':
      const desconto = ((preco * 10) / 100).toFixed(2);
      const valor = (preco - desconto).toFixed(2);
      console.log(`Desconto de: R$${desconto}`);
      console.log(`Pagamento a vista: R$${valor}`);
      break;

    default:
      const count3x = preco / 3
      console.log(`Pagamento dividido de 3x: R$${count3x}`);
      break;
  }
}

pagamentoLoja(60, 'aVista')