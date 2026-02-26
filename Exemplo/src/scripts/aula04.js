class Prato {
    constructor(nome, preco) {
        this.nome = nome
        this.preco = preco
    }
    exibirValor(total) {
        return "R$"+ total.toFixed(2)
    }
}
const lasanha = new Prato("Lasanha à Bolonhesa", 67.67)

alert('Seja bem vindo ao Restaurante Sabor e Saber!')
console.log('Teste')

const cliente = prompt("Bem vindo! Insira seu nome para atendimento personalizado: ")
let nomeFormatado = cliente.trim().toUpperCase()
alert(`Bem vindo, ${nomeFormatado}`)

const timeIs = new Date()
const hora = timeIs.getHours()
if(hora < 11) {
    alert(`Bom dia, ${nomeFormatado}, aproveite as delícias do café da manhã!`)
    console.log("Antes das 11h00")
} else {
    alert(`Boa tarde, ${nomeFormatado}, aproveite os nossos pratos para almoço e jantar!`)
    console.log("Depois das 11h00")
}

const cquepece = confirm(`Fala resenhudo, ${nomeFormatado}, você gostaria de fazer um pedido?`)
if(cquepece) {
    let quantidade = prompt("Quantas unidades? ")
    let total = lasanha.preco * quantidade
    // alert(total)
    alert(`Bacana, o seu total de ${lasanha.nome} é de: ${lasanha.exibirValor(total)}`)
} else {
    alert(`Obrigado pela visita, volte sempre, ${nomeFormatado}!`)
}