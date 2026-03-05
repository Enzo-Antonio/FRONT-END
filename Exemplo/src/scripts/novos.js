const tituloRaviole = document.querySelector('#card-raviole h3')
const botoesCompra = document.querySelector('.btn-pedido')
const quartoCard = document.querySelector('.cad:nth-child(3)')

console.log("1. Mostrando o título NHOQUE (Pelo ID):", tituloRaviole)
console.log("2. Quantidade de botões de pedido: ", botoesCompra)
console.log("2. Quantidade de botões de pedido: ", botoesCompra.length)

const data = new Date()
const hora = data.getHours()

const saudacao = document.querySelector('#boas-vindas')
saudacao.textContent = hora < 18 ? "Boa tarde!": "Boa noite!"