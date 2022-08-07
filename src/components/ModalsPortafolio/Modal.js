import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import './Modal.scss'

export const Modal = ({ children, isOpen, closeModal }) => {
  const handleModelContainerClick = e => e.stopPropagation()
  return (
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
        <div className='modal-container' onClick={handleModelContainerClick}>
            <button className='modal-close' onClick={closeModal}><AiOutlineClose size='20px'/></button>
            {children}
        </div>
    </article>
  )
}
