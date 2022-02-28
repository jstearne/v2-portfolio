import logo from './logo.svg';
import background from "./img/background.jpg"; /* custom background image in src/img/ */
import './App.css'; /* import CSS app.css */
import Welcome from './components/Welcome';
import Project from './components/Project';
import Credential from './components/Credential';
import NavBar from './components/NavBar';

import Popup from 'reactjs-popup';
import ModalTest from './components/ModalTest';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; /* Font Awesome icons */
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons"; /* FA solid import */

// scroll to top button
function toTop() { 
  window.scrollTo({top: 0, behavior: 'smooth'});
}


function App() {
  return (
    <div className="App" style={{ backgroundImage:`url(${background})`, backgroundRepeat:'no-repeat', backgroundAttachment:'fixed', backgroundPosition:'center', }}  >
    {/* attachment fixed prevents image scroll */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> {/* this looks amazing in app! */}

        {/* Welcome Component at top of page, selfie in tooltip? */}
        <Welcome name={'Jared'} /> 
        <ModalTest />

        {/* Pulsing down arrow to let users know to keep scrolling */}
        <FontAwesomeIcon className="down-arrow" icon={faAngleDoubleDown} size="lg" />
        
        {/* Project Components as needed */}
        <Project 
          projectName={"My Wedding App"}
          blurb={"I'm planning and organizing my upcoming wedding in this Heroku-deployed Python/Django mobile web app. Features authentication, full-CRUD, and database operations. Backend by Express, Node.js and PostgreSQL."}

          tech1={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" alt="python-logo" />  }
          tech2={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql-logo"/>  }
          tech3={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-original.svg" alt="django-logo"/>  }
          tech4={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="html5-logo"/>  }
          tech5={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="css3-logo"/>  }
         />

        <Project 
          projectName={"Fidget 2.0"}
          blurb={"A social media website with authentication, post/comment full CRUD. Pure Javascript, including a Node/Express server and an HTML/CSS/Javascript/EJS frontend."}

          tech1={ <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript-logo" /> }
          tech2={ <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs-logo"/> }
          tech3={ <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt="express-logo"/> }
          tech4={ <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb-logo"/> }
          tech5={ <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="css3-logo"/> }
        />

        <Project 
          projectName={"Wayfarer"}
          blurb={"A Python Django powered website allowing users to create new posts and interact with each other via comments. This was a fun opportunity to participate in the full software development cycle via client and scrum meetings."}
          
          tech1={ <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" alt="python-logo" /> }
          tech2={ <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql-logo"/> }
          tech3={ <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-original.svg" alt="django-logo"/> }
          tech4={ <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="html5-logo"/> }
          tech5={ <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="css3-logo"/> }
        />

        <Project 
          projectName={"Portfolio Site"}
          blurb={"A React-JS single-page website with extensive custom CSS. This portfolio replaces my initial effort, a Python/Django website with a Bootstrap frontend."}

          tech1={ <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="react-logo"/> }
          tech2={ <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript-logo" /> }
          tech3={ <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="css3-logo"/> }
        />

        {/* Credential Components as needed */}
        <Credential 
          credentialtype={"Education"}
          org1={"General Assembly, Software Engineering Immersive"}
          blurb1={`Immersive software engineering course focused on teaching full-stack development with a focus on Node/Javascript, Python and React. Additionally focused on key areas: UX/UI design, Git, collaborative coding and best practices.`}
          
          org2={"Morehouse College, Bachelor of Arts"}
          blurb2={`History Major, Sociology Minor. 3.67 GPA. 
          Also lettered in Track and Field (primarily the High Jump).`}
        />
        
        <Credential 
          credentialtype={"Professional"}
          org1={"Kelly Services, Account Executive"}
          blurb1={`Responsible for client management, new client outreach and management of recruiting resources. `}
          
          org2={"Automatic Data Processing, Major Accounts"}
          blurb2={`Responsible for new business development. Services consisted of cloud-based workforce technology and consulting services.`}
        />
        
        {/* smooth scroll to top */}
        <button className="scroll-button" onClick={toTop}>&nbsp; return to top &nbsp;</button>

        <footer>
          <NavBar tagline={"2022 - Jared Stearne"} />
        </footer>

      </header>
    </div>
  );
}

export default App;
