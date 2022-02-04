import { SiGithub, SiLinkedin } from "react-icons/si";
import '../SassStyles/App.scss';
import resume from '../Assets/resume.pdf'
import headshot from '../Assets/profileHeadshot.jpeg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Joan Rasmussen</h1>
        <nav>
          <a href={resume}>Resume</a>
          <a href={resume}>Tech Projects</a>
          <a href={resume}>Other Work</a>
        </nav>
      </header>
      <main>
        <div className="title-pic-container">
          <img src={headshot} alt="headshot of website author" />
          <div className="link-container">
            <a href="https://www.linkedin.com/in/joan-elaine-rasmussen/"><SiLinkedin className="icon" /></a>
            <a href="https://github.com/raz-joan"><SiGithub className="icon" /></a>
          </div>
        </div>
        <div className="info-container">
          <h2>Hey there and welcome!</h2>
          <p>I am an empathetic and gentle human, a creative thinker, a detail-oriented problem-solver, and a curious adventurer.</p>
          <p>As a software engineer, I strive to create engaging and intuitive user experiences, to write clean, elegant and organized code that is well-tested, to maintain a focused work flow, and to foster meaningful work relationships.</p>
          <p>Previously, I was a math teacher and sourdough bread baker. I learned many things in these spaces, but the most important were to be attentive, to be reliable, to be humble, to be flexible, to celebrate others, and to show up and work hard.</p>
          <p>Other than writing code, my passions are baking, traveling, reading, gravel biking, and trail running.</p>
          <p>If you'd like to be in touch, then please email me! raz.joan@gmail.com</p>
        </div>
      </main>
    </div>
  );
}

export default App;
