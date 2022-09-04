import React from 'react'
import homecali from '../../assets/homeCal.png'
import imgnav from '../../assets/navbar.png'
import login from '../../assets/cloeLogin.png'
import home from '../../assets/cloeF.png'
import cloe from '../../assets/cloeC.png'
import imgone from '../../assets/412.png'
import imgtwo from '../../assets/1024ipod.png'
import { BtnCode, BtnView} from '../Buttons/BtnsModal'
import './ModalStyle.scss'

export const ModalCalis = () => {
  return (
    <>
    <p className='txt-one'>Cuenta con diseño responsivo desde telefonos celular hasta laptops.</p>
    <div className='img-one'><img src={homecali} alt=''/></div>
    <p className='txt-two'>Algunas de las tecnologias utilizadas son: react,sass , react-router-dom, formik, yup, y emailJS para el formulario de contacto </p>
    <div className='img-two'><img  src={imgnav} alt=''/></div>
    <div className='container-btns'>
        <BtnCode 
        link={'https://github.com/DmnDeveloper/calistenia-gdl-mexico'}/>
        <BtnView 
        link={'https://dmndeveloper.github.io/calistenia-gdl-mexico/'}/>
    </div>
    </> 
  )
}

export const ModalCloe = () => {
  return (
    <>
    <p className='txt-one'>Esta app consta de un logeo inicial realizado con Formik y Yup para su manejo y validacion de datos. Generando un token con JSONWEBTOKEN que permite el logeo</p>
    <div className='img-one'><img src={login} alt=''/></div>
    <p className='txt-two'>Una vez generado el token de manera correcta, podremos encontrar todos los beneficios ofrecidos por CLOE a sus socios y trabajadores. </p>
    <div className='img-two'><img  src={home} alt=''/></div>
    <p className='txt-two'>El codigo desplegado para la vizualizacion solo es una muestra, no contiene ni el login ni codigo responsivo </p>
    <div className='img-two'><img src={cloe} alt='' /></div>
    <div className='container-btns'>
    <BtnCode 
    link={'https://github.com/DmnDeveloper/cloeoe'}/>
    <BtnView 
    link={'https://jade-chebakia-e8d428.netlify.app/'}/>
    </div>
    </>
  )
}

export const ModalPort = () => {
  return (
    <>
    <p className='txt-one'>Cuenta con diseño responsivo desde telefonos celular hasta laptops.</p>
    <div className='img-one'><img src={imgone} alt=''/></div>
    <p className='txt-two'>Algunas de las tecnologias utilizadas son: react,sass , react-router-dom, formik, yup, y emailJS para el formulario de contacto </p>
    <div className='img-two'><img src={imgtwo} alt=''/></div>
    <div className='container-btns'>
         <BtnCode
         link={'https://github.com/DmnDeveloper/portfolio'} />
    </div>
    </>
  )
}