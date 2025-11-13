import { BrowserRouter, Route, Routes} from 'react-router-dom'
import PaginaInicial from './Pages/PaginaInicial/PaginaInicial'
import PaginaCustomizacao from './Pages/PaginaCustomizacao/PaginaCustomizacao'
import PaginaPedidos from './Pages/PaginaPedidos/PaginaPedidos'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginaInicial />}/>
        <Route path='/customizar' element={<PaginaCustomizacao />}/>
        <Route path='/pedidos' element={<PaginaPedidos />}/>
        <Route path='/admin' element={<PaginaInicial />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
