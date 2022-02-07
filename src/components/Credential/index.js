import React from 'react';
// Still links to app.css! No need for a separate import

// temporary solution: to github jstearne page
function showResume() { 
  window.open(
    `https://drive.google.com/file/d/1tkm7dcR3CVtYQ4TTJuqCLwFZ0za7xUwY/view?usp=sharing`, "_blank"); 
}
function toLinkedIn() { 
  window.open(
    `https://www.linkedin.com/in/jared-stearne/`, "_blank"); 
}
function emailMe() { 
  window.open(
    `mailto:jared.stearne@gmail.com`, "_blank"); 
}

function Credential(props) { /* props is passed from App.js and is an all-in-one arg */
    return(
        <div className="Credential-Component">
            <div className="credential-nested-div">
                <h2 style={{ textDecorationLine: 'overline' }} >{props.credentialtype}</h2>

                <h3>{props.org1}</h3>
                <p>{props.blurb1}</p>

                <h3>{props.org2}</h3>
                <p>{props.blurb2}</p>

                {/* need buttons for visiting the live site, git, and seeing image? */}
                <button className="resume-button" onClick={showResume}>&nbsp;resume&nbsp;</button>
                <button className="linkedin-button" onClick={toLinkedIn}>&nbsp;to linkedin&nbsp;</button>
                <button className="email-button" onClick={emailMe}>&nbsp;email me&nbsp;</button>
            </div>
        </div>
    );
}

export default Credential;
// resume, linkedin, email