import React from 'react';
import LinkModal from './LinkModal';
// Still links to app.css! No need for a separate import

// temporary solution: to github jstearne page
function toGitHub(props) { 
//   const gitHubLink = props.gitLink; 
//   console.log(gitHubLink) // props always undefined. Use DOM to grab local button?

// could use conditional code here to get the right git repo
  window.open(
    `https://github.com/jstearne`, "_blank"); 
    // `https://github.com/jstearne/${gitHubLink}`, "_blank"); 
}

function Project(props) { /* props is passed from App.js and is an all-in-one arg */
    return(
        <div className="Project-Component">
            <div className="project-nested-div">
                <h2 style={{ textDecorationLine: 'overline' }} >{props.projectName}</h2>

                {/* Nested subcomponent with links */}
                <LinkModal />

                
                <p>{props.blurb}</p>
                <p>{props.tech1} {props.tech2} {props.tech3} {props.tech4} {props.tech5} </p>
                {/* need buttons for visiting the live site, git, and seeing image? */}
                <button className="github-button" onClick={toGitHub}>&nbsp;to GitHub&nbsp;</button>
            </div>
        </div>
    );
}

export default Project;
