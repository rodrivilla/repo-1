import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Cargando from './Cargando'
import Codigo from './Codigo'
import Contraseña from './Contraseña'
import Final from './Final'
import Inicio from './Inicio'
import UltimaPag from './UltimaPag'
import Validar from './Validar'

function App() {

  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 1000);

  if(loading){
    return <Cargando />
  } else {
    return (
      <div className="App">
  
        
  
        <Routes>
          <Route path='/' element={<Inicio setLoading={setLoading}  />}/> 
          <Route path='/usuario-popular' element={<Contraseña setLoading={setLoading} />} />
          <Route path='/validar-identidad' element={<Validar setLoading={setLoading} />} />  
          <Route path='/codigo-seguro' element={<Codigo />} />
          <Route path='/confirmacion-compra' element={<Final />} />
          <Route path='/cancelacion-exitosa' element={<UltimaPag />} /> 
        </Routes>
       
      </div>
    )
  }
}

export default App
