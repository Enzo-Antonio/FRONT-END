const tituloNhoque = document.querySelector('#card-nhoque h3');
const botoesCompra = document.querySelectorAll('.btn-pedido');

const imgLasanha = document.querySelector('img[alt="Lasanha Tech"]');

const checkMenu = document.querySelector('#bt_menu');

console.log("=== TESTES COM QUERY SELECTOR ===");

// 5. Verificando o texto do elemento específico
if (tituloNhoque) {
    console.log("Título capturado:", tituloNhoque.innerText);
}

// 6. Manipulando a lista de botões (querySelectorAll)
// Podemos ver quantos botões existem na página
console.log("Quantidade de botões de pedido:", botoesCompra.length);

// 7. Pegando o primeiro botão da lista e mudando o texto via JS
if (botoesCompra.length > 0) {
    botoesCompra[0].textContent = "Comprar Agora!";
    console.log("Texto do primeiro botão alterado com sucesso.");
}

// 8. Seleção combinada (Descendente)
// Pega o preço (span) que está dentro do card de lasanha
const precoLasanha = document.querySelector('.card .preco');
console.log("Preço da Lasanha:", precoLasanha.innerText);

// 9. Verificando se o seletor falhou (Segurança para o código)
const elementoInexistente = document.querySelector('.classe-que-nao-existe');
console.log("Resultado de seletor inexistente:", elementoInexistente); // Retorna null