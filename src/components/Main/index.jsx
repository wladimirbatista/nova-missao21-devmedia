import "./style.css";
import Categorias from "../Categorias";
import Cards from "../Cards";

import { produtos } from "../../data/data-produtos";

import { useState } from "react";

import { funcaoFiltrarProdutoPorCategoria, funcaoPesquisarProduto } from "../../funcoesLogicas";

import imagem1 from "../../assets/entrada.png";
import imagem2 from "../../assets/massa.png";
import imagem3 from "../../assets/carne.png";
import imagem4 from "../../assets/bebidas.png";
import imagem5 from "../../assets/salada.png";
import imagem6 from "../../assets/sobremesa.png";

const Main = () => {

  const [dadosArmazenados, setDadosArmazenados] = useState(produtos);
  const [nomeDoProduto, setNomeDoProduto] = useState("");
  const [nomeDaCategoria, setNomeDaCategoria] = useState("Todos");

  const funcaoDeBusca = (event) => {
    const produtoPesquisado = funcaoPesquisarProduto(nomeDoProduto);
    setNomeDoProduto(event);
    setDadosArmazenados(produtoPesquisado);
  };

  const funcaoDeFiltro = (event) => {
    const produtosFiltrados = funcaoFiltrarProdutoPorCategoria(nomeDaCategoria);
    setNomeDaCategoria(event);
    setDadosArmazenados(produtosFiltrados);
  };

  return (
    <main>
      <div className="barra-de-pesquisa">
        <input
          type="text"
          value={nomeDoProduto}
          onChange={(event) => funcaoDeBusca(event.target.value)}
          placeholder="Qual prato você deseja?"
        />
      </div>
      {/* <Categorias produtofiltrado={produtoPesquisado}/> */}

      <section className="container-categorias">
        <div>
          <h2>Categorias</h2>
        </div>
        <div className="container-botoes">
          <button
            name="Entradas"
            value="Entradas"
            onClick={() => funcaoDeFiltro("Entradas")}
          >
            Entradas
            <img src={imagem1} alt="ícone" />
          </button>
          <button
            name="Massas"
            value="Massas"
            onClick={() => funcaoDeFiltro("Massas")}
          >
            Massas
            <img src={imagem2} alt="ícone" />
          </button>
          <button
            name="Carnes"
            value="Carnes"
            onClick={() => funcaoDeFiltro("Carnes")}
          >
            Carnes
            <img src={imagem3} alt="ícone" />
          </button>
          <button
            name="Bebidas"
            value="Bebidas"
            onClick={() => funcaoDeFiltro("Bebidas")}
          >
            Bebidas
            <img src={imagem4} alt="ícone" />
          </button>
          <button
            name="Saladas"
            value="Saladas"
            onClick={() => funcaoDeFiltro("Saladas")}
          >
            Saladas
            <img src={imagem5} alt="ícone" />
          </button>
          <button
            name="Sobremesas"
            value="Sobremesas"
            onClick={() => funcaoDeFiltro("Sobremesas")}
          >
            Sobremesas
            <img src={imagem6} alt="ícone" />
          </button>
        </div>
      </section>

      <div className="container-subtitulo">
        <h2>Cardápio</h2>
      </div>
      <div className="container-cards">
        {dadosArmazenados.map((produto) => (
          <Cards key={produto.id} produto={produto} />
        ))}
      </div>
    </main>
  );
};

export default Main;
