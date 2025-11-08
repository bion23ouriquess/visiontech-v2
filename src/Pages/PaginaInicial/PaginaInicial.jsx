import { useNavigate } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import "./PaginaInicial.css"
function PaginaLogin() {
  const navigate = useNavigate();
  return (
    <div className="container-login">
      <Header />
      <div className="markting">
        <h2 className='titulo'>Destaques</h2>
        <p>Conheça nossos modelos mais procurados</p>
        <div className="imagesOculos">
          <img src="/oculos1.png" alt="image1" />
          <img src="/oculos2.png" alt="image2" />
          <img src="/oculos3.png" alt="image3" />
        </div>
      </div>
      <div className='button'>

        <button className='buttonCustomizar' onClick={() => { navigate("/customizar") }}>Customizar um novo ocúlos</button>

      </div>
    </div>
  )
}

export default PaginaLogin