import "./style.css";

import icone1 from "../../assets/entrada.png";
import icone2 from "../../assets/massa.png";
import icone3 from "../../assets/carne.png";
import icone4 from "../../assets/bebidas.png";
import icone5 from "../../assets/salada.png";
import icone6 from "../../assets/sobremesa.png";

const Categorias = ({ handleFiltro }) => {
  return (
    <section className="secao-categorias">
      {/* <div>
        <h2>Categorias</h2>
      </div> */}
      <div className="container-botoes">
        <button value="Entradas" onClick={() => handleFiltro("Entradas")}>
          <img src={icone1} alt="ícone" />
          Entradas
        </button>
        <button value="Massas" onClick={() => handleFiltro("Massas")}>
          <img src={icone2} alt="ícone" />
          Massas
        </button>
        <button value="Carnes" onClick={() => handleFiltro("Carnes")}>
          <img src={icone3} alt="ícone" />
          Carnes
        </button>
        <button value="Bebidas" onClick={() => handleFiltro("Bebidas")}>
          <img src={icone4} alt="ícone" />
          Bebidas
        </button>
        <button value="Saladas" onClick={() => handleFiltro("Saladas")}>
          <img src={icone5} alt="ícone" />
          Saladas
        </button>
        <button value="Sobremesas" onClick={() => handleFiltro("Sobremesas")}>
          <img src={icone6} alt="ícone" />
          Sobremesas
        </button>
      </div>
    </section>
  );
};

export default Categorias;
