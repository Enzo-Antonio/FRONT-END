// PARTE 7 (continuação) — Botão Limpar Tudo
const btnLimpar = document.querySelector("#btn-limpar");
if (btnLimpar) {
  btnLimpar.addEventListener("click", () => {
    const listaResumo = document.querySelector("#lista-resumo");
    const secaoResumo = document.querySelector("#secao-resumo");

    // Remove todos os badges dos cards
    document.querySelectorAll(".badge-adicionado").forEach((b) => b.remove());

    // Remove filhos da lista um a um com firstElementChild
    while (listaResumo.firstElementChild) {
      listaResumo.firstElementChild.remove();
    }

    secaoResumo.style.display = "none";
  });
}