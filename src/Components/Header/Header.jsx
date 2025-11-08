import "./Header.css"
function Header() {
  return (
    <div className='container-header'>
     <img className='logo' src="/logo.png" />

    <nav className="navigate">
        <a href="/">Ínicio</a>
        <a href="/customizar">Customizar</a>
        <a href="/pedidos">Pedidos</a>
        <a href="/admin">Admin</a>
    </nav>
    </div>
  )
}

export default Header