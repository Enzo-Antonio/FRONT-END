document.addEventListener("DOMContentLoaded", function () {
  renderizarCardapio();
  inicializarVitrine();
  inicializarHoverCards();
});

// --- RENDERIZAÇÃO DINÂMICA (API) ---

async function renderizarCardapio() {
  const grid = document.querySelector("#grid-cardapio");
  if (!grid) return;

  grid.innerHTML = "<p class='loading'>Carregando cardápio...</p>";

  try {
    const produtos = await buscarProdutos();
    grid.innerHTML = "";

    produtos.forEach(produto => {
      const card = document.createElement("article");
      card.classList.add("card");
      card.setAttribute("data-id", produto.id);

      card.innerHTML = `
        <h3>${produto.nome}</h3>
        <p class='desc'>${produto.descricao}</p>
        <div class='quantidade-box'>
          <button class='btn-qtd btn-menos'>-</button>
          <span class='qtd-valor'>1</span>
          <button class='btn-qtd btn-mais'>+</button>
        </div>
        <span class='preco' data-preco='${produto.preco}'>
          R$ ${parseFloat(produto.preco).toFixed(2).replace(".", ",")}
        </span>
        <button class='btn-pedido'>Pedir Agora</button>
      `;

      grid.appendChild(card);
    });
  } catch (erro) {
    grid.innerHTML = "<p class='loading erro'>Erro ao carregar o cardápio. Verifique se o servidor está rodando.</p>";
  }
}

// --- INTERAÇÕES DA VITRINE ---

function inicializarVitrine() {
  const main = document.querySelector("main");
  if (!main) return;

  main.addEventListener("click", event => {
    const clicado = event.target;

    // Lógica de Quantidade (+ e -)
    if (clicado.classList.contains("btn-menos") || clicado.classList.contains("btn-mais")) {
      const box = clicado.parentElement;
      const spanQtd = box.querySelector(".qtd-valor");
      let qtd = Number(spanQtd.textContent);

      qtd = clicado.classList.contains("btn-mais") ? qtd + 1 : Math.max(1, qtd - 1);
      
      spanQtd.textContent = qtd;
      atualizarPrecoCard(box);
    }

    // Ação de Pedido
    if (clicado.classList.contains("btn-pedido")) {
      event.preventDefault();
      const card = clicado.parentElement;
      const produtoId = Number(card.getAttribute("data-id"));
      const quantidade = Number(card.querySelector(".qtd-valor").textContent);

      salvarPedido(produtoId, quantidade, clicado);
    }
  });
}

function atualizarPrecoCard(box) {
  const card = box.parentElement;
  const spanPreco = card.querySelector(".preco");
  const precoUnitario = parseFloat(spanPreco.getAttribute("data-preco"));
  const quantidade = Number(box.querySelector(".qtd-valor").textContent);
  const total = precoUnitario * quantidade;

  spanPreco.textContent = `R$ ${total.toFixed(2).replace(".", ",")}`;
  spanPreco.style.color = total > 150 ? "#c0392b" : "#e67e22";
}

// --- PERSISTÊNCIA E CONTROLE (LocalStorage) ---

function salvarPedido(produtoId, quantidade, botao) {
  const card = botao.parentElement;
  const nome = card.querySelector("h3").textContent;
  const preco = parseFloat(card.querySelector(".preco").getAttribute("data-preco"));
  const subtotal = preco * quantidade;

  const lista = JSON.parse(localStorage.getItem("techfood_pedidos") || "[]");
  
  lista.push({
    produto_id: produtoId,
    quantidade,
    nome,
    preco,
    subtotal
  });

  localStorage.setItem("techfood_pedidos", JSON.stringify(lista));

  // Feedback visual
  const btnOriginal = botao.textContent;
  botao.textContent = "✓ Pedido!";
  botao.disabled = true;
  botao.style.background = "#5cb85c";

  setTimeout(() => {
    botao.textContent = btnOriginal;
    botao.disabled = false;
    botao.style.background = "";
  }, 1500);

  // Atualiza contador do header
  atualizarResumoHeader();
}

function atualizarResumoHeader() {
  const pedidos = JSON.parse(localStorage.getItem("techfood_pedidos") || "[]");
  const totalGeral = pedidos.reduce((s, p) => s + p.subtotal, 0);

  document.getElementById("contador-itens").textContent = `${pedidos.length} itens`;
  document.getElementById("valor-total-resumo").textContent = `R$ ${totalGeral.toFixed(2).replace(".", ",")}`;
}

// --- HOVER ANIMATION (do arquivo original) ---

function inicializarHoverCards() {
  const cards = document.querySelectorAll(".card");

  cards.forEach(function (card) {
    card.addEventListener("mouseenter", function () {
      const containerImagens = card.querySelector(".container-imagem");
      const containerTextos = card.querySelector(".container-textos");

      containerImagens.style.transform = "translateY(-50%) scale(1.05)";
      containerTextos.style.transform = "translateY(0)";
    });

    card.addEventListener("mouseleave", function () {
      const containerImagens = card.querySelector(".container-imagem");
      const containerTextos = card.querySelector(".container-textos");

      containerImagens.style.transform = "translateY(0) scale(1)";
      containerTextos.style.transform = "translateY(100%)";
    });
  });
}