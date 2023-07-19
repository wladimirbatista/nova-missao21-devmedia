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
  const [botaoClicado, setBotaoClicado] = useState("Entradas");

  const handleBusca = (texto) => {
    setTextoBuscaDigitado(texto);
    texto.length >= 3 && setDadosFiltrados(buscarProduto(texto));
    setBotaoClicado("");
  };

  const handleFiltro = (categoria) => {
    setTextoBuscaDigitado("");
    setDadosFiltrados(filtrarProdutos(categoria));
    setBotaoClicado(categoria);
  }

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
        <Categorias handleFiltro={handleFiltro} botaoClicado={botaoClicado} />

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
