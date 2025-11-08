import { useNavigate } from "react-router-dom";
import "./Header.css"
import { CiUser } from "react-icons/ci";
function Header() {
  const navigate = useNavigate();
  return (
    <div className='container-header'>
     <img className='logo' src="/logo.png" />

    <nav className="navigate">
        <a href="/">Ínicio</a>
        <a href="/customizar">Customizar</a>
        <a href="/pedidos">Pedidos</a>
        <a href="/admin">Admin</a>
    </nav>

  <CiUser className="perfil" onClick={() => {navigate("/login")}}/>
    </div>
  )
}

export default Header