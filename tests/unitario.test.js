testar("UNIT - Soma com negativo", () => {
  if (somar(5, -2) !== 3) throw new Error("Esperado 3");
});

testar("UNIT - alugarVeiculo atualiza mensagem corretamente e limpa após 5s", () => {
  return new Promise((resolve, reject) => {
  
    const testId = 'msg-Teste-Carro';
    const divTeste = document.createElement('div');
    divTeste.id = testId;
    document.body.appendChild(divTeste);

    alugarVeiculo('Teste-Carro');

    if (divTeste.textContent !== 'Você alugou o veículo: Teste Carro') {
      reject(new Error(`Mensagem incorreta: ${divTeste.textContent}`));
      return;
    }

    setTimeout(() => {
      if (divTeste.textContent !== '') {
        reject(new Error('Mensagem não foi limpa após 5 segundos'));
        return;
      }

      document.body.removeChild(divTeste);

      resolve();
    }, 5100);
  });
});

