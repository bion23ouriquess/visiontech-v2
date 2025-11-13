import Header from '../../Components/Header/Header'
import "./PaginaPedidos.css"


function PaginaPedidos() {

  
  return (
    <div className='container-pedidos'>
        <Header />
        <div className="checkSituacao">
            <div>
  {/* SEÇÃO DE RASTREAMENTO */}
  <div>
    <h2>Rastrear Pedido Individual</h2>

    <div>
      <input
        type="number"
        placeholder="Digite o ID do pedido para rastrear"
      />
      <button>Rastrear</button>
    </div>

    {/* Exibição do Resultado da Busca */}
    <p></p>

    <div>
      <p>
        Pedido #ID: Modelo <span>Status</span>
      </p>
      <small>Lente: --- | Cor: ---</small>
    </div>
  </div>

  <hr />

  {/* SEÇÃO DA LISTA COMPLETA */}
  <h2>
    Todos os Pedidos
    <button>Atualizar Lista</button>
  </h2>

  <p>Carregando pedidos...</p>
  <p>Nenhum pedido encontrado.</p>

  <ul>
    <li>
      <div>
        <strong>Modelo</strong>
        <span>Status</span>
      </div>
      <small>ID: --- | Lente, Cor, Material, Tamanho</small>
    </li>
  </ul>
</div>
        </div>
    </div>
  )
}

export default PaginaPedidos