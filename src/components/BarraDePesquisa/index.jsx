import { useState } from "react";
import { produtos } from "../../data/data-produtos";

const BarraDePesquisa = () => {
  const [pesquisarProduto, setPesquisarProduto] = useState("");

  const produtoFiltrado = produtos.filter((produto) => produto.nome.includes(pesquisarProduto.toLocaleLowerCase()));

  return (
    <div>
      <input
        type="text"
        value={pesquisarProduto}
        onChange={(event) => setPesquisarProduto(event.target.value)}
        placeholder="Escreva o nome do prato desejado!"
      />
      <button>Pesquisar</button>
    </div>
  );
};

export default BarraDePesquisa;
