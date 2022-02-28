import React from 'react';
import NavBar from '../../components/NavBar';


function Welcome(props) { /* props is passed from App.js and is an all-in-one arg */
    return(
        <div className="Welcome-Component">
            <h1>A lovely day <span className="alternate-font"> in Paradise</span></h1> 
            <h6><code> [ My name's {props.name}, and I'm a full-stack engineer looking for an opportunity! ] </code></h6>
            
            
            {/* SEE TOOLTIPS CSS - need to add them here in v2.0. Can I display alt-text? */}
            
            
            {/* Technology Icons: Javascript */} 
            <div className="tooltip">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript-logo" />
                <p className="tooltiptext"> Language<br /><b>Javascript</b> </p>
            </div>
            
            {/* Python */} 
            <div className="tooltip">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" alt="python-logo" />
                <p className="tooltiptext"> Language<br /><b>Python</b> </p>
            </div>
            
            {/* React */} 
            <div className="tooltip">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="react-logo"/>
                <p className="tooltiptext"> Library<br /><b>React</b> </p>
            </div>
            
            {/* Node.js */} 
            <div className="tooltip">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs-logo"/>
                <p className="tooltiptext"> Environment<br /><b>Node.js</b> </p>
            </div>
            
            {/* Postgresql */} 
            <div className="tooltip">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql-logo"/>
                <p className="tooltiptext"> Database<br /><b>SQL/Postgresql</b> </p>
            </div>
            
            {/* MongoDB - hard to read! */} 
            <div className="tooltip">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb-logo"/>
                <p className="tooltiptext"> Database<br /><b>MongoDB</b> </p>
            </div>
            
            {/* Django */} 
            <div className="tooltip">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-original.svg" alt="django-logo"/>
                <p className="tooltiptext"> Framework<br /><b>Django</b> </p>
            </div>
            
            {/* Express */} 
            <div className="tooltip">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt="express-logo"/>
                <p className="tooltiptext"> Framework<br /><b>Express</b> </p>
            </div>
            
            {/* HTML */} 
            <div className="tooltip">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="html5-logo"/>
                <p className="tooltiptext"> Language<br /><b>HTML5</b> </p>
            </div>
            
            {/* CSS */} 
            <div className="tooltip">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="css3-logo"/>
                <p className="tooltiptext"> Language<br /><b>CSS3</b> </p>
            </div>
            
            {/* Github */}
            <div className="tooltip">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="github-logo"/>
                <p className="tooltiptext"> DevTool<br /><b>Github</b> </p>
            </div>
            
            {/* Heroku */} 
            {/* <div className="tooltip">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg" alt="heroku-logo"/>
                <p className="tooltiptext"> DevTool<br /><b>Heroku</b> </p>
            </div> */}

            <NavBar />



            
        </div>
    );
}
/* Must contain: Header/Title, Technical Skills List, About Me Blurb (nav bar component?) */
export default Welcome;
