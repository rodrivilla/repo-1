import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Cargando from './Cargando'
import Contraseña from './Contraseña'
import Inicio from './Inicio'
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
        </Routes>
       
      </div>
    )
  }
}

export default App
