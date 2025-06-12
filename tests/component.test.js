function runComponentTests() {
  testar("COMPONENT - Formulário deve estar presente na página", () => {
    const form = document.getElementById("form");
    if (!form) throw new Error("Formulário não encontrado");
  });

}
function runComponentTests() {
  testar("COMPONENT - Botões de aluguel devem estar presentes na página", () => {
    const botoes = document.querySelectorAll(".rent-btn");
    if (botoes.length === 0) throw new Error("Nenhum botão de aluguel encontrado");
  });

  testar("COMPONENT - Mensagem aparece ao clicar em 'Alugar'", () => {
    const botao = document.querySelector(".rent-btn");
    if (!botao) throw new Error("Botão de aluguel não encontrado");

    botao.click();

    const msgDiv = document.getElementById("msg-Fiat Uno");
    if (!msgDiv || msgDiv.textContent.trim() === "") {
      throw new Error("Mensagem de aluguel não foi exibida");
    }
  });
}