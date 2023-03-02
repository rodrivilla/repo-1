import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'
import './inicio.css'

const Inicio = ({setLoading}) => {

  const navigate = useNavigate()

  const [tpoDoc, setTpoDoc] = useState('Cédula De Ciudadanía')
const [bordeVerde, setBordeVerde] = useState(false)
const [bordeVerde2, setBordeVerde2] = useState(false)
const [bordeVerde3, setBordeVerde3] = useState(false)
const [mostrarUl, setMostrarUl] = useState(false)
const [recordar, setRecordar] = useState(false)
const [colorBtn, setColorBtn] = useState(false)

const selectTipoDoc = e => {
if(e.target.classList.contains('cc')) setTpoDoc('Cédula De Ciudadanía')
if(e.target.classList.contains('ce')) setTpoDoc('Cédula De Extranjería')
if(e.target.classList.contains('ti')) setTpoDoc('Tarjeta De Identidad')
}

const desplegarUl = () => {
    mostrarUl ? setMostrarUl(false) : setMostrarUl(true)
}

const activeRecordar = () => {
  recordar ? setRecordar(false) : setRecordar(true)
}

const change = e => {
  !e.target.value.length ? setColorBtn(false) : setColorBtn(true)
}

const ingresar = e => {
  e.preventDefault()

  navigate('/usuario-popular')
  setLoading(true)

  setTimeout(() => {
    setLoading(false)
  }, 1000);
}

  return (
    <div className='inicio'>
      
      <section>
        <img src="https://mi.bancopopular.com.co/assets/images/logotipo-horizontalx3.png" alt="" />

        <h1>Ingresa a tu zona transaccional</h1>

        <form onSubmit={ingresar}>
          <div>
            <label>Tipo de documento</label>
            <span onClick={desplegarUl} id='cc'>{tpoDoc} <i className='bx bxs-chevron-down'></i>
            <ul className={`${mostrarUl && 'desplegar-ul' }`}>
              <li 
              onClick={selectTipoDoc}
              className={` cc ${bordeVerde && 'border-verde'}`} 
              onMouseEnter={() => setBordeVerde(true)} 
              onMouseLeave={() => setBordeVerde(false)} >Cédula De Ciudadanía</li>
              <li 
              onClick={selectTipoDoc}
              className={` ce ${bordeVerde2 && 'border-verde'}`} 
              onMouseEnter={() => setBordeVerde2(true)} 
              onMouseLeave={() => setBordeVerde2(false)} >Cédula De Extranjería</li>
              <li 
              onClick={selectTipoDoc}
              className={` ti ${bordeVerde3 && 'border-verde'}`} 
              onMouseEnter={() => setBordeVerde3(true)} 
              onMouseLeave={() => setBordeVerde3(false)} >Tarjeta De Identidad</li>
            </ul>
            </span>
          </div>
          <div>
            <label htmlFor="cc">Número de documento</label>
            <input onChange={change} type="number" id='cc' />
          </div>

        <div className='bottom-form'>
        <div onClick={activeRecordar} className={`recordar ${recordar && 'active-recordar'}`}>
          <div className={`circulo-recordar ${recordar && 'active-circulo'}`}></div>
        </div>
        <p>Recordar tipo y número de documento</p>
        </div>

        <button className={`${colorBtn && 'btn-active'}`}>Continuar</button>

        </form>


       <Footer />
      </section>
    </div>
  )
}

export default Inicio