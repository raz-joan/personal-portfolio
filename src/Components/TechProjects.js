import React from 'react'
import '../SassStyles/TechProjects.scss'
import wheatcute from '../Assets/wheatcute.png'
import theFlourStudio from '../Assets/theFlourStudio.png'
import boardGameBartender from '../Assets/boardGameBartender.png'
import travelTracker from '../Assets/travelTracker.png'
import ticTacToe from '../Assets/ticTacToe.png'

const TechProjects = () => {
  return (
    <div className='tech-projects-container'>

      <p className='projects-note'>(( Most recent to oldest 👩🏼‍💻 ))</p>
      {/* Project 1 */}
      <div className='project'>
        <div className='project-img-container'>
          <img src={wheatcute} alt='Project Landing Page'/>
        </div>
        <div className='project-details-container'>
          <h2 className='project-title'>Wheatcute</h2>
          <a href='https://wheat-cute.herokuapp.com/'>Deployed App</a>
          <a href='https://github.com/Fair-Trade-Grains'>Project Repos</a>
          <p>Group Project of 5 (2FE, 3BE)</p>
          <p>Goal: This app provides a platform to connect farmers with food makers in the emerging market of specialty grains.</p>
          <p>FE Technologies: React, React Router, JavaScript, JSX, CSS, GraphQL, Apollo-Client, RESTful API, Postman, Cypress, Cloudinary, Circle CI, Heroku, Excalidraw, Figma, Miro, GH Project Boards, Slack</p>
          <p>Achievments: Learned GraphQL. Agile team collaboration. Photo hosting. Email functionality. JSON contract. React modals. Responsive design. Live filtering.</p>
        </div>
      </div>

      {/* Project 2 */}
      <div className='project'>
        <div className='project-img-container'>
          <img src={theFlourStudio} alt='Project Landing Page' />
        </div>
        <div className='project-details-container'>
          <h2 className='project-title'>The Flour Studio</h2>
          <a href='https://the-flour-studio.herokuapp.com/'>Deployed App</a>
          <div className='two-repo-links'>
            <a href='https://github.com/raz-joan/the-flour-studio-ui'>Project Repo (UI)</a>
            <a href='https://github.com/raz-joan/the-flour-studio-api'>Project Repo (API)</a>
          </div>
          <p>Solo Project</p>
          <p>Goal: This app allows a boutique flour mill to help its users learn about unique grains and share reviews with others.</p>
          <p>Technologies: Node.js, Express.js, Postman, babel, nanoid.js, CORS, React, React Router, JavaScript, JSX, Sass, RESTful API, Cypress, Wave, Lighthouse, Heroku, Excalidraw, Excalidraw, Figma, GH Project Boards</p>
          <p>Achievments: Learned Express.js and hand-rolled the backend API. Robust planning and tracking. Cypress testing. Accessibility. Responsive design.</p>
        </div>
      </div>

      {/* Project 3 */}
      <div className='project'>
        <div className='project-img-container'>
          <img src={boardGameBartender} alt='Project Landing Page' />
        </div>
        <div className='project-details-container'>
          <h2 className='project-title'>Board Game Bartender</h2>
          <a href='https://colganmeanor.github.io/Board-Game-Bartender/'>Deployed App</a>
          <a href='https://github.com/colganmeanor/Board-Game-Bartender'>Project Repo</a>
          <p>Group Project of 3 (all FE)</p>
          <p>Goal: This app allows a user to plan a game night by pairing a board game with a cocktail and to favorite a cocktail.</p>
          <p>Technologies: React, React Router, Redux, JavaScript, JSX, CSS, RESTful API, Cypress, GH pages, Excalidraw, Figma, GH Project Boards, Slack</p>
          <p>Achievments: Learned GSM and Redux. Accessibility. Responsive design. Asynchronous functionality. Data persists using local storage. Successful team collaboration.</p>
        </div>
      </div>

      {/* Project 4 */}
      <div className='project'>
        <div className='project-img-container'>
          <img src={travelTracker} alt='Project Landing Page' />
        </div>
        <div className='project-details-container'>
          <h2 className='project-title'>Travel Tracker</h2>
          <a href='https://github.com/raz-joan/travel-tracker'>Project Repo</a>
          <p>Solo Project</p>
          <p>Goal: This vanilla JavaScript app has a login, a dashboard view, and allows a user to request a new trip.</p>
          <p>Technologies: JavaScript, HTML, Sass, Mocha, Chai, RESTful API, Lighthouse, Day.js, Glide.js, Excalidraw</p>
          <p>Achievments: Clean, modular code base. Error handling. Accessibility. Unit testing. Responsive design.</p>
        </div>
      </div>

      {/* Project 5 */}
      <div className='project'>
        <div className='project-img-container'>
          <img src={ticTacToe} alt='Project Landing Page' />
        </div>
        <div className='project-details-container'>
          <h2 className='project-title'>Tic Tac Toe</h2>
          <a href='https://raz-joan.github.io/tic-tac-toe/'>Deployed App</a>
          <a href='https://github.com/raz-joan/tic-tac-toe'>Project Repo</a>
          <p>Solo Project</p>
          <p>Goal: This vanilla JavaScript app allows a user to play tic-tac-toe and displays the current scores.</p>
          <p>Technologies: JavaScript, HTML, CSS, Excalidraw, GH Pages</p>
          <p>Achievments: Responsive layout. Light and Dark mode.</p>
        </div>
      </div>
    </div>
  )
}

export default TechProjects