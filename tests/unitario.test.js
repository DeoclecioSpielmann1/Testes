// Função que roda todos os testes
function runUnitTests() {
  // Testes de soma
  testar("UNIT - Soma de positivos", () => {
    if (somar(3, 4) !== 7) throw new Error("Esperado 7");
  });

  testar("UNIT - Soma com negativo", () => {
    if (somar(5, -2) !== 3) throw new Error("Esperado 3");
  });


  
}
