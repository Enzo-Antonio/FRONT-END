document.addEventListener("DOMContentLoaded", function () {
  renderizarPedidos();
  configurarLimparPedidos();
  configurarEnviarCozinha();
  configurarVerConta();
  configurarFecharConta();
});

function renderizarPedidos() {
  const lista = document.querySelector("#lista-pedidos");
  const spanTotal = document.querySelector("#valor-total");
  const spanResumo = document.querySelector("#valor-total-resumo");
  const spanContador = document.querySelector("#contador-itens");

  if (!lista) return;

  const totalMesa = parseFloat(sessionStorage.getItem("techfood_total_mesa") || "0");
  const pedidos = JSON.parse(localStorage.getItem("techfood_pedidos") || "[]");

  if (pedidos.length === 0) {
    lista.innerHTML =
      "<li class='pedido-vazio'>Nenhum item ainda. Acesse o " +
      "<a href='index.html'>Cardápio</a> para adicionar! 😊</li>";
    if (spanResumo) spanResumo.textContent = "R$ 0,00";
    if (spanTotal) spanTotal.textContent = `R$ ${totalMesa.toFixed(2).replace(".", ",")}`;
    if (spanContador) spanContador.textContent = "0 itens";
    return;
  }
  // Mostra a lista se tiver itens
  lista.innerHTML = "";

  pedidos.forEach((p, index) => {
    const item = document.createElement("li");
    item.classList.add("item-pedido");
    item.innerHTML = `
    <span class="qtd">${p.quantidade}x</span>
    <span class="nome">${p.nome}</span>
    <span class="subtotal">R$ ${p.subtotal.toFixed(2).replace(".", ",")}</span>
    `;
    lista.appendChild(item);
  });
  // Atualiza os totais no header e na seção
  const totalPedidos = pedidos.reduce((s, p) => s + p.subtotal, 0);
  const totalGeral = totalPedidos + totalMesa;

  if (spanContador) spanContador.textContent = `${pedidos.length} itens`;
  if (spanResumo) spanResumo.textContent = `R$ ${totalPedidos.toFixed(2).replace(".", ",")}`;
  if (spanTotal) spanTotal.textContent = `R$ ${totalGeral.toFixed(2).replace(".", ",")}`;
}