
const tituloNhoque = document.querySelector('#card-nhoque h3');
const botoesCompra = document.querySelectorAll('.btn-pedido');

const imgLasanha = document.querySelector('img[alt="Lasanha Tech"]');

const checkMenu = document.querySelector('#bt_menu');

console.log("=== TESTES COM QUERY SELECTOR ===");

if (tituloNhoque) {
    console.log("Título capturado:", tituloNhoque.innerText);
}

console.log("Quantidade de botões de pedido:", botoesCompra.length);

if (botoesCompra.length > 0) {
    botoesCompra[0].textContent = "Comprar Agora!";
    console.log("Texto do primeiro botão alterado com sucesso.");
}

const precoLasanha = document.querySelector('.card .preco');
console.log("Preço da Lasanha:", precoLasanha.innerText);

const elementoInexistente = document.querySelector('.classe-que-nao-existe');
console.log("Resultado de seletor inexistente:", elementoInexistente); 