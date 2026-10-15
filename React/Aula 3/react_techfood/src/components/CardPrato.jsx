function CardPrato(nome, prato, categoria) {
    const precoFormatado = preco.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
    })

    return(
        <article className="card-prato">
            <span className="categoria">{categoria}</span>
            <h2>{nome}</h2>
            <p className="preco">{precoFormatado}</p>
        </article>
    )
}

export default CardPrato