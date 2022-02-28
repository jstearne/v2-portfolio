import React from 'react';
import Popup from 'reactjs-popup';

// verified and working. Popup with link that sends to another window, different site. Make three buttons and style!

function toLinkedIn() { 
    window.open(
      `https://www.linkedin.com/in/jared-stearne/`, "_blank"); 
}

const ModalTest = () => (
    <Popup trigger={<button className="button"> Open LinkModal </button>} modal>
      <span> Modal content and links go here! <a href="www.google.com" onClick={toLinkedIn} target="_blank">Google Link</a> </span>
    </Popup>
  );

export default ModalTest;