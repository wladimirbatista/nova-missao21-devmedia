import Categorias from "../Categorias";
import { produtos } from "../../data/data-produtos";
import Cards from "../Cards";

import './style.css'

const Main = () => {
  return(
    <main>
      <div>
        <input placeholder="Escreva o nome do prato que você deseja!"/>
        <button>Pesquisar</button>
      </div>
      <Categorias />
      <div className="container-subtitulo">
        <h2>Cardápio</h2>
      </div>
      <div className="container-cards">
        {produtos.map(produto =>
          <Cards key={produto.id} produto={produto}/>
        )}
      </div>
    </main>
  )
}

export default Main;