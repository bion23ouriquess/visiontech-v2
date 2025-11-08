import Header from '../../Components/Header/Header'
import "./PaginaCustomizacao.css"
function PaginaCustomizacao() {
  return (
    <div className='container-customizar'>
      <Header />

      <div className='areaCustomizar'>
        <h2>Selecione as customizações do óculos</h2>
        <h3>Selecione as opções abaixo:</h3>
        <p>Confirme com o cliente antes de finalizar pedido!</p>

        <label>Modelo:</label>
        <select name="modelo">
          <option value="">Selecione</option>
          <option value="Aviador">Aviador</option>
          <option value="Redondo">Redondo</option>
          <option value="Quadrado">Quadrado</option>
        </select>

        <label>Lente:</label>
        <select name="lente">
          <option value="">Selecione</option>
          <option value="Transparente">Transparente</option>
          <option value="Escura">Escura</option>
          <option value="Fotocromática">Fotocromática</option>
        </select>

        <label>Cor:</label>
        <select name="cor">
          <option value="">Selecione</option>
          <option value="Preto">Preto</option>
          <option value="Dourado">Dourado</option>
          <option value="Prata">Prata</option>
        </select>

        <label>Material:</label>
        <select name="material">
          <option value="">Selecione</option>
          <option value="Metal">Metal</option>
          <option value="Plástico">Plástico</option>
          <option value="Titanium">Titanium</option>
        </select>

        <label>Tamanho:</label>
        <select name="tamanho">
          <option value="">Selecione</option>
          <option value="Pequeno">Pequeno (P) - 48mm</option>
          <option value="Medio">Médio (M) - 52mm</option>
          <option value="Grande">Grande (G) - 56mm</option>
        </select>

        <button>Enviar Pedido</button>

        <p>Status da solicitação aqui</p>
      </div>
    </div>
  )
}

export default PaginaCustomizacao
