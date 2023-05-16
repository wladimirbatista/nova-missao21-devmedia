import "./style.css";
import Banner from "../../assets/banner.png";
import { useState } from "react";
import {
  filtrarProdutos,
  buscarProduto,
  produtosEntradas,
} from "../../service";
import Cards from "../../components/Cards";
import Categorias from "../../components/Categorias";
import BarraDePesquisa from "../../components/BarraDePesquisa";

const Home = () => {
  const [dadosFiltrados, setDadosFiltrados] = useState(produtosEntradas);
  const [textoBuscaDigitado, setTextoBuscaDigitado] = useState("");

  const handleBusca = (texto) => {
    setTextoBuscaDigitado(texto);
    if (texto.length >= 3) {
      const produtosPesquisado = buscarProduto(texto);
      setDadosFiltrados(produtosPesquisado);
    }
  };

  const handleFiltro = (categoria) => {
    setTextoBuscaDigitado("");
    const produtosFiltrados = filtrarProdutos(categoria);
    setDadosFiltrados(produtosFiltrados);
  };

  return (
    <div>
      <header className="banner">
        <img src={Banner} alt="banner" />
        <div>
          <h1>RESTAURANT</h1>
          <p>
            De pratos clássicos a criações surpreendentes, nosso cardápio é um
            requinte de sabores refinados.
          </p>
        </div>
      </header>
      <main className="container-principal">
        <Categorias handleFiltro={handleFiltro} />
        <BarraDePesquisa
          textoBuscaDigitado={textoBuscaDigitado}
          handleBusca={handleBusca}
        />

        <section className="secao-cards">
          <div>
            <h2>Cardápio</h2>
          </div>
          <div className="container-cards">
            {dadosFiltrados.map((produto) => (
              <Cards key={produto.id} produto={produto} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
