import React from 'react'
import {Routes, Route, Link} from 'react-router-dom' 
import '../SassStyles/App.scss';
import resume from '../Assets/resume.pdf'
import Landing from './Landing'
import TechProjects from './TechProjects';
import OtherWork from './OtherWork';
import Book from './Book.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/"><h1>Joan Rasmussen</h1></Link>
        <nav>
          <a href={resume}>Resume</a>
          <Link to="/tech-projects">Tech Projects</Link>
          <Link to="/other-work">Other Work</Link>
          <Link to="/book">More About Me</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/tech-projects" element={<TechProjects />} />
          <Route path="/other-work" element={<OtherWork />} />
          <Route path="/book" element={<Book />} />
          <Route path="/*" element={<p className="error">404: What you requested does not exist 🤷🏼‍♀️</p>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
