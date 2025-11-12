import { useNavigate } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import "./PaginaInicial.css"
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';


function PaginaLogin() {
  const [mostrarImagens, setMostrarImagens] = useState(false)
  const navigate = useNavigate();
  return (
    <div className="container-login">
      <Header />
      <div className="markting">
        <h2 className='titulo'>Destaques</h2>
        <TypeAnimation
          sequence={[
            'Conheça nossos modelos mais procurados',
            () => setMostrarImagens(true)]}
          speed={10}
          deletionSpeed={99}
          wrapper='h1'
        /> {mostrarImagens && (
          <div className='imagesOculos'>
          <img src="/Aviador-removebg.png" alt="image1" />
          <img src="/Redondo-removebg.png" alt="image2" />
          <img src="/QuadradoPreto-removebg.png" alt="image3" />
          </div>
        )}



        {/* <p>Conheça nossos modelos mais procurados</p>
        <div className="imagesOculos">
          <img src="/Aviador-removebg.png" alt="image1" />
          <img src="/Redondo-removebg.png" alt="image2" />
          <img src="/QuadradoPreto-removebg.png" alt="image3" />
        </div> */}
      </div>
      <div className='button'>

        <button className='buttonCustomizar' onClick={() => { navigate("/customizar") }}>Customizar um novo ocúlos</button>

      </div>
    </div>
  )
}

export default PaginaLogin