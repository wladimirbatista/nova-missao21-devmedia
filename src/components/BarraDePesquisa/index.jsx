import "./style.css";
import Lupa from '../../assets/lupa-de-pesquisa.png'

const BarraDePesquisa = ({ textoBuscaDigitado, handleBusca }) => {
  return (
    <div className="barra-de-pesquisa">
      <img src={Lupa} alt="icone"/>
      <input
        type="text"
        value={textoBuscaDigitado}
        onChange={(event) => handleBusca(event.target.value)}
        placeholder="Pesquise aqui um dos pratos do nosso cardápio"
      />
    </div>
  );
};

export default BarraDePesquisa;
