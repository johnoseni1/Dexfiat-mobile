import React from 'react';

const Popup = ({
  className = 'box',
  handleClose,
  content,
  closeBtn = false,
}) => {
  return (
    <div className='popup-box'>
      <div className={className}>
        {closeBtn && (
          <span className='close-icon' onClick={handleClose}>
            x
          </span>
        )}
        {content}
      </div>
    </div>
  );
};

export default Popup;
