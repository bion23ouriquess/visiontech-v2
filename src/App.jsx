import { BrowserRouter, Route, Routes} from 'react-router-dom'
import PaginaLogin from './Pages/PaginaLogin/PaginaLogin'
import PaginaCustomizacao from './Pages/PaginaCustomizacao/PaginaCustomizacao'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginaLogin />}/>
        <Route path='/customizar' element={<PaginaCustomizacao />}/>
        <Route path='/pedidos' element={<PaginaLogin />}/>
        <Route path='/admin' element={<PaginaLogin />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
