import React from 'react';
import Popup from 'reactjs-popup';



const ModalTest = () => (
    <Popup trigger={<button className="button"> Open Modal </button>} modal>
      <span> Modal content </span>
    </Popup>
  );

export default ModalTest;