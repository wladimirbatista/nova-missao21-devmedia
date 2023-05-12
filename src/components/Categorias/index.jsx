import "./style.css";

import imagem1 from "../../assets/entrada.png";
import imagem2 from "../../assets/massa.png";
import imagem3 from "../../assets/carne.png";
import imagem4 from "../../assets/bebidas.png";
import imagem5 from "../../assets/salada.png";
import imagem6 from "../../assets/sobremesa.png";
import { useState } from "react";


const Categorias = ({produtoFiltrado}) => {

  const [filtroCategoria, setFiltroCategoria] = useState("");

  const produtoFiltroCategoria = produtoFiltrado.filter((produto) => produto.categoria === filtroCategoria);
  setFiltroCategoria(produtoFiltroCategoria)
  
  return (
    <section className="container-categorias">
      <div>
        <h2>Categorias</h2>
      </div>
      <div className="container-botoes">
        <button name="Entradas" value="Entradas" onClick={() => setFiltroCategoria("Entradas")}>Entradas
          <img src={imagem1} alt="ícone" />
        </button>
        <button name="Massas" value="Massas" onClick={() => setFiltroCategoria("Massas")}>Massas
          <img src={imagem2} alt="ícone" />
        </button>
        <button name="Carnes" value="Carnes" onClick={() => setFiltroCategoria("Carnes")}>Carnes
          <img src={imagem3} alt="ícone" />
        </button>
        <button name="Sobremesas" value="Sobremesas" onClick={() => setFiltroCategoria("Sobremesas")}>Sobremesas
          <img src={imagem4} alt="ícone" />
        </button>
        <button name="Bebidas" value="Bebidas" onClick={() => setFiltroCategoria("Bebidas")}>Bebidas
          <img src={imagem5} alt="ícone" />
        </button>
        <button name="Saladas" value="Saladas" onClick={() => setFiltroCategoria("Saladas")}>Saladas
          <img src={imagem6} alt="ícone" />
        </button>
      </div>
    </section>
  );
};

export default Categorias;
