import React from 'react'
import { BsArrowsFullscreen } from 'react-icons/bs'
import { Modal } from './Modal';
import { useModal } from '../../hooks/useModal';
import { motion } from 'framer-motion';
import ModalCloe from './ModalCloe';
import ModalPort from './ModalPort';
import ModalCalis from './ModalCalis';
import './Modals.scss'
import imgCloeModal from '../../assets/logoCloe.jpg'

const Modals = () => {
    const [isOpenModal, openModalCloe, closeModalCloe] = useModal(false)
    const [isOpenModalCalistenia, openModalCalistenia, closeModalCalistenia] = useModal(false)
    const [isOpenModalPortafolio, openModalPortafolio, closeModalPotafolio] = useModal(false)

  return (
    <div className='file-modals-wrapper'>
        <ModalDesign 
        imgmodal={<img className='img-cloe-modal pad' src={imgCloeModal} alt='' />}
        txtmodal={<TextAnimated text={'Aplicación Benefiios Cloe, desarrollada con React'} />}
        btn={<><BtnOpenModal myOnClick={openModalCloe} />
            <Modal isOpen={isOpenModal} closeModal={closeModalCloe}>
                <ModalCloe />
            </Modal></>} 
        />

        <ModalDesign 
        imgmodal={<h1 className='txt-logo-modal'>MyPortfolio</h1>}
        txtmodal={<TextAnimated text={'Desarrollado com react, mi portafolio profesional'} />}
        btn={<><BtnOpenModal myOnClick={openModalPortafolio}/>
            <Modal isOpen={isOpenModalPortafolio} closeModal={closeModalPotafolio}>
                <ModalPort />
            </Modal></>}
        />

        <ModalDesign 
        imgmodal={<h1 className='txt-logo-modal'>CalisteniaMx</h1>}
        txtmodal={<TextAnimated text={'Proyecto personal desarrollado con JS Vanilla'}/>}
        btn={<><BtnOpenModal myOnClick={openModalCalistenia} />
            <Modal isOpen={isOpenModalCalistenia} closeModal={closeModalCalistenia}>
                <ModalCalis />
            </Modal></>}
        />
    </div>
  )
}

function ModalDesign(props) {
    return(
        <div className='individual-modal-card'>
            <div className='img-modal-card'>{props.imgmodal}</div>
            <div className='txt-modal-card'>{props.txtmodal}</div>
            <div className='btn-modal-card'>{props.btn}</div>
        </div>
    )
}

function BtnOpenModal (props) {
    return(
        <motion.button className='button' 
        onClick={props.myOnClick} 
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        ><BsArrowsFullscreen size='35px'/>
        </motion.button>
    )
}

const TextAnimated = (props) => <motion.p  whileHover={{ scale: 1.1 }} className='txt-modal'>{props.text}<br />...</motion.p>


export default Modals