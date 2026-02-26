// const nome = prompt("Digite o seu primeiro nome: ")
// const sobrenome = prompt("Digite o seu sobrenome: ")
// let nomeFormat = nome.trim()
// let sobreFormat = sobrenome.trim()
// let nomeIntFormat = nomeFormat.concat(sobreFormat).toLowerCase().trim()
// alert(`Seu nome inteiro (${nomeIntFormat}) possui ${nomeIntFormat.length} letras!`)

// const total = prompt("Quanto foi o valor total da conta? ")
// const pessoas = prompt("Quantas pessoas vão pagar? ")
// const cadaPag = total / pessoas
// alert(`Cada amigo deve pagar R$${cadaPag.toFixed(2)}`)

// alert("Se o valor da sua compra for maior que R$150,00 seu frete é grátis, e se você tiver um cupom de frete grátis também!")
// const valor = prompt("Qual foi o valor total da sua compra?")
// const cupom = prompt("Você possui um cupom de frete grátis? Responda com S para 'Sim' e N para 'Não': ")
// if (Number(valor) > 150) {
//     alert("Você recebeu Frete Grátis!")
// } else if (cupom == "S" || cupom == "s") {
//     alert("Você recebeu Frete Grátis Via Cupom!")
// } else {
//     alert("Sem desconto pra você, bebê!")
// }

// let num = Number(prompt("Escolha um número de 1 a 10: "))
// const num1 = Math.floor(Math.random() * 10) + 1

// if (num <= 0 || num >= 11) {
//     alert("Valor Inválido!")
// } else if (num != num1) {
//     alert(`Você errou, infelizmente! O número sorteado era ${num1}!`)
// } else {
//     alert(`Você acertou! O número era ${num1}! =D`)
// }

class Veiculo {
    constructor(modelo, marca, ano) {
        this.modelo = modelo
        this.marca = marca
        this.ano = ano
    }
    idadeVeiculo() {
        return idadeV = anoAtual - anoCarro
    }
}

let anoAtual = prompt("Insira o ano atual: ")
let anoCarro = prompt("Insira o ano do seu carro: ")
const carrinho = new Veiculo("Viper", "Dodge", 2016)
carrinho.idadeVeiculo()