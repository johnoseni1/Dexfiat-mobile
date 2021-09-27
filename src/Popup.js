import React from 'react';

const Popup = ({ className = 'box', handleClose, content }) => {
  return (
    <div className='popup-box'>
      <div className={className}>
        <span className='close-icon' onClick={handleClose}>
          x
        </span>
        {content}
      </div>
    </div>
  );
};

export default Popup;
