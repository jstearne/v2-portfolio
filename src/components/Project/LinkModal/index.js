import React from 'react';
import Popup from 'reactjs-popup';

// verified and working. Popup with link that sends to another window, different site. Make three buttons and style!

function toWedding() { 
    window.open(
      `https://joellen-jared.herokuapp.com/`, "_blank"); 
}
function toFidget() { 
    window.open(
      `https://fidget2.herokuapp.com/`, "_blank"); 
}
function toWayfarer() { 
    window.open(
      `https://github.com/V3rita2/project-wayfarer`, "_blank"); 
}

// reactjs-modal has built-in Popup component. Still need JS for buttons.
// Workaround for the fact that I can't prop > customize links to repo/heroku sites

const LinkModal = () => (
    <Popup trigger={<button className="link-modal-button"> &nbsp;visit app&nbsp; </button>} modal>
        <div className='modal'>
            <h2 style={{ textDecorationLine: 'overline' }}>Check out the apps:
                <br/><br/>
                <button className="github-button" onClick={toWedding}>&nbsp;wedding app&nbsp;</button>
                <br/>
                <button className="github-button" onClick={toFidget}>&nbsp;fidget 2.0&nbsp;</button>
                <br/>
                <button className="github-button" onClick={toWayfarer}>&nbsp;wayfarer (git only)&nbsp;</button>
            </h2>
        </div>
    </Popup>
);

export default LinkModal;