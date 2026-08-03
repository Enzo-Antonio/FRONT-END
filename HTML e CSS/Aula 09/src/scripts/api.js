const BASE_URL = "http://localhost:3000";

async function buscarProdutos() {
  const response = await fetch(`${BASE_URL}/produtos`);
  const dados = await response.json();
  
  if (!response.ok) {
    throw new Error(dados.erro || `Erro ao buscar produtos: ${response.status}`);
  }
  
  return dados.dados; 
}

async function criarPedido(cliente, itens) {
  const response = await fetch(`${BASE_URL}/pedidos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ cliente, itens }),
  });
  
  const dados = await response.json();
  
  if (!response.ok) {
    throw new Error(dados.erro || `Erro ao criar pedido: ${response.status}`);
  }
  
  return dados;
}

async function buscarPedidos() {
  const response = await fetch(`${BASE_URL}/pedidos`);
  const dados = await response.json();
  
  if (!response.ok) {
    throw new Error(dados.erro || `Erro ao buscar pedidos: ${response.status}`);
  }
  
  return dados;
}

async function atualizarStatusPedido(id, novoStatus) {
  const response = await fetch(`${BASE_URL}/pedidos/${id}/status`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status: novoStatus }),
  });
  
  const dados = await response.json();
  
  if (!response.ok) {
    throw new Error(dados.erro || `Erro ao atualizar status: ${response.status}`);
  }
  
  return dados;
}

async function deletarPedido(id) {
  const response = await fetch(`${BASE_URL}/pedidos/${id}`, {
    method: "DELETE",
  });
  
  const dados = await response.json();
  
  if (!response.ok) {
    throw new Error(dados.erro || `Erro ao deletar pedido: ${response.status}`);
  }
  
  return dados;
}