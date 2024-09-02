import './App.css'
import { Route, Routes } from 'react-router-dom'
import FormularioPage from './pages/FormularioPage'
import LogInPage from './pages/LogInPage'
import SeguimientoPage from './pages/SeguimientoPage'


function App() {

  return (
    <div>    
      <Routes>
        <Route path="/" element={ <LogInPage /> } />        
        <Route path="form" element={ <FormularioPage /> } />
        <Route path="seg" element={ <SeguimientoPage /> } />
      </Routes>
    </div>
  )
}

export default App


