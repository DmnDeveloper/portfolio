import React from 'react'
import Foto from '../../assets/fotoBN.jpg'
import './MyPerfil.scss'

const MyPerfil = (props) => {
  return (
    <div className='wrapper-perfil'>
        <div className='wrapper-name-foto'>
            { props.name }
          <div className='img-wrapper'>
            <img className='image' src={Foto} alt='' />
          </div>
          <div className='name-wrapper'>
            {props.myname}
          </div>
        </div> 
        <div className='text-wrapper'>
          {props.txt}
        </div>
        <div className='btns-wrapper'>
        {props.btnCV}
        {props.btnContact}
        </div>
    </div>
  )
}

export default MyPerfil