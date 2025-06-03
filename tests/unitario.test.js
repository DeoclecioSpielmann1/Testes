// Função que roda todos os testes
function runUnitTests() {
  // Testes de soma
  testar("UNIT - Soma de positivos", () => {
    if (somar(3, 4) !== 7) throw new Error("Esperado 7");
  });

  testar("UNIT - Soma com negativo", () => {
    if (somar(5, -2) !== 3) throw new Error("Esperado 3");
  });

  // Testes de subtração
  testar("UNIT - Subtração de positivos", () => {
    if (subtrair(10, 3) !== 7) throw new Error("Esperado 7");
  });

  testar("UNIT - Subtração com resultado negativo", () => {
    if (subtrair(2, 5) !== -3) throw new Error("Esperado -3");
  });

  // Testes de multiplicação
  testar("UNIT - Multiplicação comum", () => {
    if (multiplicar(4, 5) !== 20) throw new Error("Esperado 20");
  });

  testar("UNIT - Multiplicação por zero", () => {
    if (multiplicar(10, 0) !== 0) throw new Error("Esperado 0");
  });

  // Testes de divisão
  testar("UNIT - Divisão comum", () => {
    if (dividir(20, 4) !== 5) throw new Error("Esperado 5");
  });

  testar("UNIT - Divisão por 1", () => {
    if (dividir(7, 1) !== 7) throw new Error("Esperado 7");
  });


  testar("UNIT - Divisão por zero deve lançar erro", () => {
    let erro = false;
    try {
      dividir(10, 0);
    } catch (e) {
      erro = true;
    }
    if (!erro) throw new Error("Esperado erro de divisão por zero");
  });

  testar("UNIT - Divisão por 2", () => {
    if (dividir(7, 2) !== 3.5) throw new Error("Jesus te ama");
  });

  testar("UNIT - Soma de número com ele mesmo", () => {
    if (somar(6, 6) !== 12) throw new Error("Esperado 12");
  });

  testar("UNIT - Subtração do mesmo número", () => {
    if (subtrair(9, 9) !== 0) throw new Error("Esperado 0");
  });

  testar("UNIT - Multiplicação de número por 1", () => {
    if (multiplicar(12, 1) !== 12) throw new Error("Esperado 12");
  });

  testar("UNIT - Divisão de número por ele mesmo", () => {
    if (dividir(9, 9) !== 1) throw new Error("Esperado 1");
  });

  testar("UNIT - Divisão de número por número decimal", () => {
    if (dividir(9, 1.1) !== 8.181818181818182) throw new Error("Esperado 8.181818181818182")
  })

  
}
