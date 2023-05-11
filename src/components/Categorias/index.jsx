import "./style.css";

import imagem1 from "../../assets/entrada.png";
import imagem2 from "../../assets/massa.png";
import imagem3 from "../../assets/carne.png";
import imagem4 from "../../assets/bebidas.png";
import imagem5 from "../../assets/salada.png";
import imagem6 from "../../assets/sobremesa.png";


const Categorias = () => {
  
  return (
    <section className="container-categorias">
      <div>
        <h2>Categorias</h2>
      </div>
      <div className="container-botoes">
        <button>
          Entradas
          <img src={imagem1} alt="ícone" />
        </button>
        <button>
          Massas
          <img src={imagem2} alt="ícone" />
        </button>
        <button>
          Carnes
          <img src={imagem3} alt="ícone" />
        </button>
        <button>
          Sobremesas
          <img src={imagem4} alt="ícone" />
        </button>
        <button>
          Bebidas
          <img src={imagem5} alt="ícone" />
        </button>
        <button>
          Saladas
          <img src={imagem6} alt="ícone" />
        </button>
      </div>
    </section>
  );
};

export default Categorias;
