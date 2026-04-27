/* ==========================================================
   AULA 06: EVENTOS DOM - TECHFOOD
   CORREÇÃO: Eventos aplicados para funcionar em todos os dispositivos
   ========================================================== */

const { createElement } = require("react");

// 1. SAUDAÇÃO DINÂMICA (Base Aula 5)
const saudacao = document.querySelector("#boas-vindas");
const hora = new Date().getHours();
if (saudacao) {
    saudacao.textContent =
        hora < 12
            ? "Bom dia! Qual o seu pedido?"
            : "Boa tarde! Confira nosso cardápio.";
}

// 2. CÁLCULO DE PREÇO DINÂMICO (Aula 6)
const inputQtd = document.querySelector("#qtd-lasanha");
const precoTexto = document.querySelector("#preco-lasanha");

if (inputQtd && precoTexto) {
    inputQtd.addEventListener("input", () => {
        const precoUnitario = 45.0;
        const total = Number(inputQtd.value) * precoUnitario;
        precoTexto.textContent = `R$ ${total.toFixed(2)}`;

        // Mudança sutil de cor se o valor for alto (Feedback Visual Aula 6)
        precoTexto.style.color = total > 150 ? "#c0392b" : "#e67e22";
    });
}

// 3. EVENTO DE CLIQUE PARA TODOS OS BOTÕES (Mobile e Desktop)
// Usamos querySelectorAll para garantir que todos os botões da página funcionem.
const botoesPedido = document.querySelectorAll(".btn-pedido");


// 4. INTERATIVIDADE NOS CARDS (Feedback visual)
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

// 3. Delegação de Eventos
const main = document.querySelector('main')
main.addEventListener('click', (event) => {
    const clicado = event.target

    if (clicado.classList.contains('btn-menos')){
        const box = clicado.parentElement
        const spanQtd = box.querySelector('.qtd-valor')
        const valorAtual = Number(spanQtd.textContent)
        spanQtd.textContent = Math.max(1, valorAtual - 1)
        atualizarPrecoCard(box)
        return
    }

    if (clicado.classList.contains('btn-mais')){
        const box = clicado.parentElement
        const spanQtd = box.querySelector('.qtd-valor')
        spanQtd.textContent = Number(spanQtd.textContent) + 1
        atualizarPrecoCard(box)
        return
    }

    if (clicado.classList.contains('btn-pedido')) {
        event.preventDefault()
        const card = clicado.parentElement
        const nome = card.querySelector('h3').textContent
        const qtd = card.querySelector('.qtd-valor').textContent
        const precoExibido = card.querySelector('.preco').textContent

        // Efeito Visual ao clicar em "Pedir agora"
        clicado.textContent = '👌🎉✅ Adicionado'
        clicado.style.backgroundColor = '#27ae60'
        clicado.disable = true
        setTimeout(() => {
            clicado.textContent = 'Pedir agora'
            clicado.style.backgroundColor = ''
            clicado.disable = false
        }, 1500)

        if (!card.querySelector('.badge-adicionado')) {
            card.insertAdjacentHTML(
                'beforeend', '<span class = "badge-adicionado"> ✅No resumo </span>'
            )
        }
        
        adicionarItemAoResumo(nome, qtd, precoExibido, card)

    }

})

// 4. Funções de Atualização e Inserção de Produto no Resumo

function atualizarPrecoCard(box) {
    const card = box.parentElement
    const spanPreco = card.querySelector('.preco')
    const precoUnitario = parseFloat(spanPreco.getAttribute('data-preco'))
    const qtd = Number(box.querySelector('.qtd-valor').textContent)
    const total = precoUnitario * qtd
    spanPreco.textContent = "R$" + total.toFixed(2).replace('.', ',')
    spanPreco.style.color = total > 150 ? '#c0392b' : '#e67e22'
}

function adicionarItemAoResumo(nome, qtd, preco, cardOrigem) {
    const secaoResumo = document.querySelector('#secao-resumo')
    const listaResumo = document.querySelector('#lista-resumo')

    if (!secaoResumo || !listaResumo) return
    
    secaoResumo.style.display = 'block'

    const itemLi = document.createElement('li')
    itemLi.classList.add('item-resumo')

    const textoSpan = document.createElement('span')
    textoSpan.textContent = qtd + 'x' + nome + '-' + preco

    const btnRemover = document.createElement('button')
    btnRemover.textContent = '❌'
    btnRemover.classList.add('btn-remover')

    btnRemover.addEventListener('click', ()=>{
        itemLi.remove()

        const badge = cardOrigem.querySelector('.badge-adicionado')

        if(badge) badge.remove()

        if(listaResumo.children.length === 0) {
            secaoResumo.style.display = 'none'
        }
    })

    itemLi.appendChild(textoSpan)
    itemLi.appendChild(btnRemover)
    listaResumo.appendChild(itemLi)

    const btnLimpar = document.querySelector('btn-limpar')
    
    if(btnLimpar){
        btnLimpar.addEventListener('click', ()=>{
            const listaResumo = document.querySelector('#lista-resumo')
            const secaoResumo = document.querySelector('#secao-resumo')

            document.querySelector('.badge-adicionado').forEach(excluir) => excluir.remove()
        })
    }
}