import { FaHome } from "react-icons/fa"
import "./Header.css"


function Header() {
  return (
    <div className='container-header'>
      {/* <img className='logo' src="/logo.png" /> */}
      <img className='logo' src="/logovt.png" />

      <nav className="navigate">

        <FaHome />
        <a href="/">Ínicio</a>
        <a href="/customizar">Customizar</a>
        <a href="/pedidos">Pedidos</a>
        <a href="/admin">Admin</a>
      </nav>

      {/* <CiUser className="perfil" onClick={() => { navigate("/login") }} /> */}
    </div>
  )
}

export default Header