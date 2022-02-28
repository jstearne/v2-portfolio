import React from 'react';
import LinkModal from './LinkModal';


function toGitHub(props) { 
  window.open(
    `https://github.com/jstearne`, "_blank"); 
}

function Project(props) { /* props is passed from App.js and is an all-in-one arg */
    return(
        <div className="Project-Component">
            <div className="project-nested-div">
                <h2 style={{ textDecorationLine: 'overline' }} >{props.projectName}</h2>
                <p>{props.blurb}</p>
            </div>

            {/* Nested subcomponent with links, additional skill icons */}
            <p><LinkModal /> <button className="github-button" onClick={toGitHub}>&nbsp;my GitHub&nbsp;</button> 
                {props.tech1} {props.tech2} {props.tech3} {props.tech4} {props.tech5} {props.tech6}</p>
        
        </div>
    );
}

export default Project;
