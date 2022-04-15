import React from 'react';

const Modal = ({onClose, currentPhoto}) => {
    const {name, description} = currentPhoto;
    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
            <h3 className="modalTitle">{name}</h3>
          {/* <img alt="current category" src={require(`../../assets/largeimages/${image.path}.jpg`)} /> */}
          <p>{description}</p>
          <button type="button" onClick={onClose}>
            Close this modal
          </button>
        </div>
      </div>
    );
}
  
export default Modal;