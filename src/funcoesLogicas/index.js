import { produtos } from "../data/data-produtos";

export const funcaoPesquisarProduto = (nomeDoProduto) => {
  return nomeDoProduto === ""
    ? produtos
    : produtos.filter((produto) =>
        produto.nome.toLowerCase().includes(nomeDoProduto.toLowerCase())
      );
};

export const funcaoFiltrarProdutoPorCategoria = (nomeDaCategoria) => {
  return nomeDaCategoria === "Todos"
  ? produtos 
  : produtos.filter((produto) => produto.categoria === nomeDaCategoria);
};
