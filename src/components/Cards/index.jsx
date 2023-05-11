import "./style.css"

const Cards = ({produto}) => {

  console.log(produto)

  return(
    <div className="card">
      <figure>
        <img src={produto.imagem} alt=""/>
      </figure>
      <div>
        <h3>{produto.nome}</h3>
        <p>{produto.descricao}</p>
      </div>
      <div>
        <span>{produto.preco}</span>
      </div>
    </div>
  )
}

export default Cards;