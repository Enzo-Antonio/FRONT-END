import Header from "./components/Header";

const cardapio = [
  {
    id: 1,
    nome: "Feijoada",
    preco: 42.9,
    categoria: "Prato Principal",
  },

  {
    id: 2,
    nome: "Moqueca",
    preco: 49.9,
    categoria: "Prato Principal",
  },

  {
    id: 3,
    nome: "Pudim",
    preco: 15.0,
    categoria: "Sobremesas",
  },
];

function App() {
  return (
    <main className="app">
      <Header />
      <section className="cardapio">
        {cardapio.map(
          (prato = (
            <CardPrato
              key={prato.id}
              nome={prato.nome}
              preco={prato.preco}
              categoria={prato.categoria}
            />
          )),
        )}
      </section>
    </main>
  );
}

export default App