import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; /* Font Awesome icons */
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'; /* FA brand import */
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons"; /* FA solid import */


function toGitHub() { 
  window.open(
    `https://github.com/jstearne`, "_blank"); 
}
function toLinkedIn() { 
  window.open(
    `https://www.linkedin.com/in/jared-stearne/`, "_blank"); 
}
function emailMe() { 
  window.open(
    `mailto:jared.stearne@gmail.com`, "_blank"); 
}
function showResume() { 
  window.open(
    `https://drive.google.com/file/d/1hhf2MdzANtC2PgJ8VJ3XP7vXmIcGsKhJ/view?usp=sharing`, "_blank"); 
}

function NavBar(props) { /* props is passed from App.js and is an all-in-one arg */
    return(     
        <div>
            <p className="tagline">{ props.tagline }</p>
            <div className="icon-wrap">
                <FontAwesomeIcon className="icons" icon={faGithubSquare} onClick={toGitHub} size="lg" />
                <FontAwesomeIcon className="icons" icon={faLinkedin} onClick={toLinkedIn} size="lg" />
                <FontAwesomeIcon className="icons" icon={faEnvelope} onClick={emailMe} size="lg" />
                <FontAwesomeIcon className="icons" icon={faFilePdf} onClick={showResume} size="lg" />
            </div>
        </div>
    );
}

export default NavBar;
