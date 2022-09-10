import React from 'react'
import { BsArrowsFullscreen } from 'react-icons/bs'
import { Modal } from './Modal';
import { useModal } from '../../hooks/useModal';
import { motion } from 'framer-motion';
import { ModalCloe, ModalCalis, ModalPort } from './AllModals';
import imgCloeModal from '../../assets/logoCloe.jpg'
import './Modals.scss'

const Modals = () => {
const [isOpenModal, openModalCloe, closeModalCloe] = useModal(false)
const [isOpenModalCalistenia, openModalCalistenia, closeModalCalistenia] = useModal(false)
const [isOpenModalPortafolio, openModalPortafolio, closeModalPotafolio] = useModal(false)
  return (
    <div className='file-modals-wrapper'>
{/* Cloe */}
        <ModalDesign 
        imgmodal={<img className='img-cloe-modal pad' src={imgCloeModal} alt='' />}
        text={'Aplicación Benefiios Cloe, desarrollada con React'} 
        myOnClick={openModalCloe}   
        />
        <Modal isOpen={isOpenModal} closeModal={closeModalCloe}><ModalCloe /></Modal>
        
{/* Portafolio: */}
        <ModalDesign 
        imgmodal={<h1 className='txt-logo-modal'>MyPortfolio</h1>}
        text={'Desarrollado com react, mi portafolio profesional'} 
        myOnClick={openModalPortafolio}
        />
        <Modal isOpen={isOpenModalPortafolio} closeModal={closeModalPotafolio}><ModalPort /></Modal>

{/* Calistenia */}
        <ModalDesign 
        imgmodal={<h1 className='txt-logo-modal'>CalisteniaMx</h1>}
        text={'Proyecto personal desarrollado con JS Vanilla'}
        myOnClick={openModalCalistenia} 
        />
        <Modal isOpen={isOpenModalCalistenia} closeModal={closeModalCalistenia}><ModalCalis /></Modal>
    </div>
  )
}

function ModalDesign(props) {
    return(
        <div className='individual-modal-card'>
            <div className='img-modal-card'>{props.imgmodal}</div>
            <div className='txt-modal-card'>
                <motion.p  whileHover={{ scale: 1.1 }} className='txt-modal'>{props.text}<br />...</motion.p>
            </div>
            <div className='btn-modal-card'>
                <motion.button className='button' 
                    onClick={props.myOnClick} 
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    ><BsArrowsFullscreen size='35px'/>
                </motion.button>
            </div>
        </div>
    )
}


export default Modals