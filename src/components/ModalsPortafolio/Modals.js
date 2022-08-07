import React from 'react'
import { BsArrowsFullscreen } from 'react-icons/bs'
import imgCloeModal from '../../assets/logoCloe.jpg'
import { Modal } from './Modal';
import { useModal } from '../../hooks/useModal';
import { motion } from 'framer-motion';
import './Modals.scss'
import ModalCloe from './ModalCloe';
import ModalPort from './ModalPort';
import ModalCalis from './ModalCalis';

 function ModalDesign(props) {
    return(
        <div className='individual-modal-card'>
            <div className='img-modal-card'>{props.imgmodal}</div>
            <div className='txt-modal-card'>{props.txtmodal}</div>
            <div className='btn-modal-card'>{props.btnmodal}</div>
        </div>
    )
}
//cloe
const img = () => <img className='img-cloe-modal pad' src={imgCloeModal} alt=''></img>
const txt = () => <motion.p  whileHover={{ scale: 1.1, fontWeight: 'bold' }} className='txt-modal'>Aplicación Benefiios Cloe, desarrollada con React <br />...</motion.p>
const BtnModal = () =>{
    const [isOpenModal, openModalCloe, closeModalCloe] = useModal(false)
    return(
        <>   
        <motion.button 
        className='btn-modal-info' 
        onClick={openModalCloe}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}   
        >    <BsArrowsFullscreen size='35px'/>
        </motion.button>

        <Modal isOpen={isOpenModal} closeModal={closeModalCloe}>
            <ModalCloe />
        </Modal>
        </>
    )
}
//portfoliio
const imgPortafolio = () =>  <h1 className='txt-logo-modal'>MyPortfolio</h1>
const txtPortafolio = () => <motion.p  whileHover={{ scale: 1.1, fontWeight: 'bold' }} className='txt-modal'>Desarrollado com react, mi portafolio profesional<br />...</motion.p>
const BtnPortafolio = () => {
    const [isOpenModalPortafolio, openModalPortafolio, closeModalPotafolio] = useModal(false)
    return(
        <>
        <motion.button 
        className='btn-modal-info' 
        onClick={openModalPortafolio}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        >   <BsArrowsFullscreen size='35px'/>
        </motion.button>
        <Modal isOpen={isOpenModalPortafolio} closeModal={closeModalPotafolio}>
            <ModalPort />
        </Modal>
        </>
    )
}
//calistenia 
const imgCalistenia = () => <h1 className='txt-logo-modal'>CalisteniaMx</h1>
const txtCalistenia = () => <motion.p  whileHover={{ scale: 1.1, fontWeight: 'bold' }} className='txt-modal'>Proyecto personal desarrollado con JS Vanilla<br />...</motion.p>
const BtnCalistenia = () => {
    const [isOpenModalCalistenia, openModalCalistenia, closeModalCalistenia] = useModal(false)
    return(
        <>
        <motion.button 
        className='btn-modal-info' 
        onClick={openModalCalistenia}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        >   <BsArrowsFullscreen size='35px'/>
        </motion.button>
        <Modal isOpen={isOpenModalCalistenia} closeModal={closeModalCalistenia}>
            <ModalCalis />
        </Modal>
        </>
    )
}

const Modals = () => {
  return (
    <>  
    <div className='file-modals-wrapper'>
        <ModalDesign 
        imgmodal={img()}
        txtmodal={txt()}
        btnmodal={BtnModal()}
        />
        <ModalDesign 
        imgmodal={imgPortafolio()}
        txtmodal={txtPortafolio()}
        btnmodal={BtnPortafolio()}
        />
        <ModalDesign 
        imgmodal={imgCalistenia()}
        txtmodal={txtCalistenia()}
        btnmodal={BtnCalistenia()}
        />
    </div>
    <div className='file-modals-wrapper'>
    </div>
    </>
  )
}

export default Modals