import React, { useEffect } from 'react'
import ReactDOM from 'react-dom';
import './Modal.scss'

type Props =  {
  open: boolean;
  children: React.ReactNode,
  closeModal: () => void,
  hideBtn?: boolean
} 

const modalRoot = document.getElementById('modal-root')

export const Modal: React.FC<Props> = ({open = true, children, closeModal, hideBtn = true}) => {
  if(!open) return null
  if(!modalRoot) return null

  return ReactDOM.createPortal(
    <>
      <div className="backdrop" onClick={closeModal}></div>
      <div className="modal">
        {
          hideBtn ?
          <div className="modal-header">
             <div className="modal-header__btn" onClick={closeModal}>x</div>
           </div>: 
          null
        }
        {children}
      </div>
    </>
    ,
    modalRoot
  )
}
