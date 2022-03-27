import React from 'react';

const Modal = ({onClose, curretPhoto}) => {
    const {name, category, description, index} = currentPhoto;
    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
            <h3 className="modalTitle">{name}</h3>
          <img alt="current category" src={require(`../../assets/largeimages/${category}/${index}.jpg`)} />
          <p>{description}</p>
          <button type="button">
            Close this modal
          </button>
        </div>
      </div>
    );
}
  
export default Modal;