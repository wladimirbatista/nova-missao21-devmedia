import { Link } from 'react-router-dom';
import './style.css'

const Topo = () => {
  return (
    <header>
      <div className='container-topo'>
        <div>
          <span>Olá</span>
          <h2>Seja bem vindo(a)</h2>
        </div>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </div>
    </header>
  )
}

export default Topo;