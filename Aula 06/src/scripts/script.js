const btnLike = document.querySelector('#btn-curtir')
const contaLike = document.querySelector('#contador')
btnLike.addEventListener('click', () => {
    contagem++;
    displayContador.textContent = contagem
    console.log(`Total de curtidas: ${contagem}`)
})

const campoTexto = document.querySelector('#campo-texto')
const previewTexto = document.querySelector('#preview-texto')
campoTexto.addEventListener('input', () => {
    const conteudo = campoTexto.value;
    previewTexto.textContent = `Digitando: ${conteudo}`;
    if (conteudo === "") {
        previewTexto.textContent = "Digitando..."
    }
})

const caixaCor = document.querySelector('#caixa-cor')
caixaCor.addEventListener('mouseover', () => {
    card.style.backgroundColor = 'blue'
})
caixaCor.addEventListener('mouseout', () => {
    card.style.backgroundColor = '#95a5a6'
})

const btnReset = document.querySelector('#btn-reset');
btnReset.addEventListener('click', () => {
    curtidas = 0;
    displayContador.textContent = curtidas; 
    campoTexto.value = "";
    previewTexto.textContent = "Digitando: ...";
    console.warn("O painel foi resetado!");
});