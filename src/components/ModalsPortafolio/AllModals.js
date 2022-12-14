import React from 'react'
import homecali from '../../assets/homeCal.png'
import imgnav from '../../assets/navbar.png'
import login from '../../assets/cloeLogin.png'
import home from '../../assets/cloeF.png'
import cloe from '../../assets/cloeC.png'
import imgone from '../../assets/412.png'
import imgtwo from '../../assets/1024ipod.png'
import { BtnCode, BtnView} from '../Buttons/BtnsModal'
import { Children } from './Modal'
import './ModalStyle.scss'


export const ModalCalis = () => {
  return ( 
    <Children 
      txtone={'Cuenta con diseño responsivo desde telefonos celular hasta laptops.'}
      imgone={homecali}
      txttwo={'Algunas de las tecnologias utilizadas son: react,sass , react-router-dom, formik, yup, y emailJS para el formulario de contacto'}
      imgtwo={imgnav}
      btncode={<BtnCode link={'https://github.com/DmnDeveloper/calistenia-gdl-mexico'}/>}
      btnview={<BtnView link={'https://dmndeveloper.github.io/calistenia-gdl-mexico/'}/>}
    />
  )
}

export const ModalCloe = () => {
  return (
    <Children 
      txtone={'Esta app consta de un logeo inicial realizado con Formik y Yup para su manejo y validacion de datos. Generando un token con JSONWEBTOKEN que permite el logeo'}
      imgone={login}
      txttwo={'Una vez generado el token de manera correcta, podremos encontrar todos los beneficios ofrecidos por CLOE a sus socios y trabajadores.'}
      imgtwo={home}
      txtthree={'El codigo desplegado para la vizualizacion solo es una muestra, no contiene ni el login ni codigo responsivo'}
      imgthree={cloe}
      btncode={<BtnCode link={'https://github.com/DmnDeveloper/cloeoe'}/>}
      btnview={<BtnView link={'https://jade-chebakia-e8d428.netlify.app/'}/>}
    />
  )
}

export const ModalPort = () => {
  return (
    <Children txtone={'Cuenta con diseño responsivo desde telefonos celular hasta laptops.'}
      imgone={imgone}
      txttwo={'Algunas de las tecnologias utilizadas son: react,sass , react-router-dom, formik, yup, y emailJS para el formulario de contacto'}
      imgtwo={imgtwo}
      btncode={<BtnCode link={'https://github.com/DmnDeveloper/portfolio'} />}
    />
  )
}