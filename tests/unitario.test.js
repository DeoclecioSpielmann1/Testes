  testar("UNIT - alugarVeiculo atualiza mensagem corretamente e limpa após 5s", () => {
  
            const testId = 'msg-Teste-Carro';
            const divTeste = document.createElement('div');
            divTeste.id = testId;
            document.body.appendChild(divTeste);

            alugarVeiculo('Teste-Carro');

            if (divTeste.textContent !== 'Você alugou o veículo: Teste Carro') {
                throw new Error(`Mensagem incorreta: ${divTeste.textContent}`);
            }

            setTimeout(() => {
                if (divTeste.textContent !== '') {
                    throw new Error('Mensagem não foi limpa após 5 segundos');