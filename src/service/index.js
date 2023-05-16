import { produtos } from "../data/data-produtos";

export const buscarProduto = (texto) => {
  return produtos.filter(
    (produto) =>
      produto.nome.toLowerCase().includes(texto.toLowerCase()) ||
      produto.descricao.toLowerCase().includes(texto.toLowerCase())
  );
};

export const filtrarProdutos = (categoria) => {
  return produtos.filter((produto) => produto.categoria === categoria);
};

export const produtosEntradas = filtrarProdutos("Entradas");
