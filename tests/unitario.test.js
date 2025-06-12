   testar("UNIT - Soma com negativo", () => {
    if (somar(5, -2) !== 3) throw new Error("Esperado 3");
  });
  testar("UNIT - alugarVeiculo atualiza mensagem corretamente e limpa após 5s", () => {
              if (divTeste.textContent !== 'Você alugou o veículo: Teste Carro') {
                throw new Error(`Mensagem incorreta: ${divTeste.textContent}`);
          