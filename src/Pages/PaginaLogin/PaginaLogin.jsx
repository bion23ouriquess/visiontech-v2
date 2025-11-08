import "./PaginaLogin.css";

function PaginaLogin() {
  return (
    <div className="container-login-2">
      <div className="loginBox">
        <img className="logo" src="/logo.png" alt="" />
        <label>Email:</label>
        <input type="email" placeholder="Digite seu email" />

        <label>Senha:</label>
        <input type="password" placeholder="Digite sua senha" />

        <button>Entrar</button>

        <p className="mensagem-login">Acesse com suas credenciais cadastradas.</p>
      </div>
    </div>
  );
}

export default PaginaLogin;
