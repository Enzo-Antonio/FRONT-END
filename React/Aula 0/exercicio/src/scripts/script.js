/* ============================================
   GABARITO — Exercícios do Kickoff
   Tema: Bebidas do Sabor & Saber
   Contém os 5 exercícios em ordem incremental.
   ============================================ */

class Bebida {
  constructor(nome, preco, volume) {
    this.nome   = nome;
    this.preco  = preco;
    this.volume = volume;
  }

  descricao() {
    return `${this.nome} - ${this.volume}ml - R$ ${this.preco.toFixed(2)}`;
  }

  emLitros() {
    const litros = this.volume / 1000;
    return `${litros.toFixed(2)}L`;
  }
}

const coca      = new Bebida("Coca-Cola",         7.50,  350);
const suco      = new Bebida("Suco de Laranja",  10.00,  500);
const agua      = new Bebida("Água Mineral",      4.00,  500);
const cafe      = new Bebida("Café Espresso",     6.50,   50);
const guarana   = new Bebida("Guaraná Antártica", 7.00,  350);
const chaGelado = new Bebida("Chá Gelado",        8.00,  400);

console.log("=== Exercício 1 (descricao) ===");
console.log(coca.descricao());
console.log(suco.descricao());

console.log("=== Exercício 2 (emLitros) ===");
console.log(`${coca.nome}: ${coca.emLitros()}`);
console.log(`${suco.nome}: ${suco.emLitros()}`);
console.log(`${cafe.nome}: ${cafe.emLitros()}`);

const listaBebidas = [coca, suco, agua, cafe, guarana, chaGelado];

const container = document.querySelector('#lista-bebidas');

function criarCardBebida(bebida) {
  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
    <h3>${bebida.nome}</h3>
    <div class="info">${bebida.descricao()}</div>
  `;

card.addEventListener('click', () => {
    alert(`🥤 ${bebida.nome}\nVolume em litros: ${bebida.emLitros()}`);
  });

  return card;
}

function renderizarLista(textoBusca = '') {
  const filtro = textoBusca.trim().toLowerCase();

  // Limpa o container antes de re-renderizar → boa prática de idempotência.
  container.innerHTML = '';

  const bebidasFiltradas = listaBebidas.filter(b =>
    b.nome.toLowerCase().includes(filtro)
  );

  bebidasFiltradas.forEach(bebida => {
    container.appendChild(criarCardBebida(bebida));
  });

  // Fallback amigável quando nada bate — UX básico.
  if (bebidasFiltradas.length === 0) {
    container.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:#888;">Nenhuma bebida encontrada.</p>`;
  }
}

// Primeira renderização (sem filtro).
renderizarLista();

// Ouve o input em tempo real (evento 'input' dispara a cada tecla).
const inputFiltro = document.querySelector('#filtro');
inputFiltro.addEventListener('input', (event) => {
  renderizarLista(event.target.value);
});
