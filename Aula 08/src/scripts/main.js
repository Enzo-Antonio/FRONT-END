document.addEventListener('DOMContentLoaded', function(){
    inicializarHoverCards()
    inicializarVitrine()
    atualizarPrecoCard()
    salvarPedido()
})

function inicializarHoverCards() {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-5px)";
            card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
        card.style.boxShadow = "none";
    });
    });
}

function inicializarVitrine() {
    // PARTE 2 — DELEGAÇÃO DE EVENTOS (escrever ao vivo)
    const main = document.querySelector("main");

    if(!main) return

    main.addEventListener("click", (event) => {
    const clicado = event.target;


    // PARTE 3 — QUANTIDADE MODERNA (escrever ao vivo)
    if (clicado.classList.contains("btn-menos")) {
        const box = clicado.parentElement;
        const spanQtd = box.querySelector(".qtd-valor");
        const valorAtual = Number(spanQtd.textContent);
        spanQtd.textContent = Math.max(1, valorAtual - 1);
        atualizarPrecoCard(box);
        return;
    }

    if (clicado.classList.contains("btn-mais")) {
        const box = clicado.parentElement;
        const spanQtd = box.querySelector(".qtd-valor");
        spanQtd.textContent = Number(spanQtd.textContent) + 1;
        atualizarPrecoCard(box);
        return;
    }


    // PARTE 4 — NAVEGAÇÃO COM parentElement (escrever ao vivo)
    if (clicado.classList.contains("btn-pedido")) {
        event.preventDefault();

        const card = clicado.parentElement;
        const nomePrato = card.querySelector("h3").textContent;
        const quantidade = card.querySelector(".qtd-valor").textContent;
        const precoExibido = card.querySelector(".preco").textContent;

        // Feedback visual no botão (igual Aula 6 — alunos já conhecem)
        clicado.textContent = "✓ Adicionado!";
        clicado.style.backgroundColor = "#27ae60";
        clicado.disabled = true;

        setTimeout(() => {
        clicado.textContent = "Pedir Agora";
        clicado.style.backgroundColor = "";
        clicado.disabled = false;
        }, 1500);


    // PARTE 5 — insertAdjacentHTML: badge no card (escrever ao vivo)

    const badgeExistente = card.querySelector('.badge-adicionado')

    if (badgeExistente) badgeExistente.remove() ;{
        card.insertAdjacentHTML(
            "beforeend",
            "<span class='badge-adicionado'>✔ No resumo</span>"
        );
    }

    setTimeout(function() {
        const badge = card.querySelector('.badge-adicionado')
        if (badge) badge.remove() 
    }, 2000
)

    // Resetar a quantidade de itens (NOVO)
    const box = card.querySelector('.quantidade-box')
    if (box) {
        box.querySelector('.qtd-valor').textContent = '1'
        atualizarPrecoCard(box)
    }

    // Chama a função que cria o item no resumo (Parte 6)
        salvarPedido({nome: nomePrato, preco: preco, qtd: quantidade, });

    }

        atualizarContadorPedidos()
  });
}

function atualizarPrecoCard(box) {
    const card = box.parentElement;
    const spanPreco = card.querySelector(".preco");
    const precoUnitario = parseFloat(spanPreco.getAttribute("data-preco"));
    const quantidade = Number(box.querySelector(".qtd-valor").textContent);
    const total = precoUnitario * quantidade;
    spanPreco.textContent = "R$ " + total.toFixed(2).replace(".", ",");
    spanPreco.style.color = total > 150 ? "#c0392b" : "#e67e22";
    
}

function salvarPedido(pedido) {
    // Ação de LER
    const lista = JSOM.parse(localStorage.getItem('techfood_pedidos') || '[]')

    // Ação de MODIFICAR
    pedido.subtotal = pedido.preco * pedido.qtd

    lista.push(pedido)

    // Ação de SALVAR
    localStorage.setItem('techfood_pedidos', JSON.stringify(lista))
}

function atualizarContadorPedidos() {
    // CONTINUA...
}
