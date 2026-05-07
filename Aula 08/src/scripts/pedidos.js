document.addEventListener('DOMContentLoaded', function() {
    renderizarPedidos()
    // CONTINUA...
})

function renderizarPedidos() {
    const lista = document.querySelector('#lista-pedidos')
    const spanTotal = document.querySelector('#valor-total')
    const spanResumo = document.querySelector('#valor-total-resumo')
    const spanContador = document.querySelector('#contador-itens')

    if(!lista) return

    const pedidos = JSON.parse(localStorage.getItem('techfood_pedidos') || '[]')

    if(pedidos.length === 0) {
        lista.innerHTML = 
        "<li class='pedido-vazio'> Nenhum pedido ainda. Acesse o " + "<a href='index.html'>Cardápio</a> para adicionar! 😊</li>"

        if(spanTotal) spanTotal.textContent = 'R$0,00'
        if(spanResumo) spanResumo.textContent = 'R$0,00'
        if(spanContador) spanContador.textContent = '0 itens'
    }

    lista.innerHTML = ''
    let total = 0

    pedidos.forEach(function(pedido, indice){

        const li = document.createElement('li')
        li.classList.add('item-pedido')

        if (!secaoResumo || !listaResumo) return;

        // Passo 2: cria o <span> com o texto
        const textoSpan = document.createElement("span");
        textoSpan.innerHTML = "<strong>" + pedidos.nome + "</strong>" + " - " + 
        pedidos.qtd + " x " + " R$ " + pedidos.preco.toFixed(2).replace(".", ",") + 
        " = <span class ='subtotal-item'> R$ " + pedidos.subtotal.toFixed(2).replace(".", ",")

        // Passo 3: cria o botão ✕
        const btnRemover = document.createElement("button");
        btnRemover.textContent = "✕";
        btnRemover.classList.add("btn-remover");

        // PARTE 7 — remove() (escrever ao vivo)
        btnRemover.addEventListener("click", () => {
            const lista = JSON.parse(localStorage.getItem('techfood_pedidos') || '[]')

            lista.splice(indice, 1)

            localStorage.setItem('techfood_pedidos')
            renderizarPedidos()
        })
        li.appendChild(textoSpan);
        li.appendChild(btnRemover);
        lista.appendChild(li);
        total += pedido.subtotal

        const totalFmt = 'R$' + total.toFixed(2).replace('.', ',')

    })

    // Passo 4: monta a estrutura e insere na página
    
}

function configurarLimparPedidos() {
    const btn = document.querySelector('btn-limpar-pedidos')

    if(btn) return

    btn.addEventListener('click', function() {
        localStorage.removeItem('techfood_pedidos')
        renderizarPedidos(btn)
    })
}