import React, {useState} from 'react'
import '../SassStyles/Book.scss'
import grandma from '../Assets/grandma.jpg'
import mathImg from '../Assets/mathImg.png'
import baker from '../Assets/baker.JPG'

const Book = () => {
  const numOfPages = 4
  const maxLocation = numOfPages + 1
  const [currentLocation, setCurrentLocation] = useState(1)
  const [bookTransform, setBookTransform] = useState('')
  const [p1Flip, setP1Flip] = useState('')
  const [p2Flip, setP2Flip] = useState('')
  const [p3Flip, setP3Flip] = useState('')
  const [p4Flip, setP4Flip] = useState('')

  const openBook = () => {
    setBookTransform('openBook')
  }

  const closeBook = (isAtBeginning) => {
    if (isAtBeginning) {
      setBookTransform('closeBookBeginning')
    } else {
      setBookTransform('closeBookEnd')
    }
  }

  const goNextPage = () => {
    if (currentLocation < maxLocation) {
      switch (currentLocation) {
        case 1:
          openBook();
          setP1Flip("flipped flippedP1")
          break;
        case 2:
          setP2Flip("flipped flippedP2")
          break;
        case 3:
          setP3Flip("flipped flippedP3")
          break;
        case 4:
          setP4Flip("flipped flippedP4")
          closeBook(false);
          break;
        default:
          throw new Error("unkown state with currentLocation");
      }

      setCurrentLocation(currentLocation + 1)
    }
  }

  const goPrevPage = () => {
    if (currentLocation > 1) {
      switch (currentLocation) {
        case 2:
          closeBook(true)
          setP1Flip('')
          break;
        case 3:
          setP2Flip('')
          break;
        case 4:
          setP3Flip('')
          break;
        case 5:
          openBook()
          setP4Flip('')
          break;
        default:
          throw new Error("unkown state with currentLocation");
      }

      setCurrentLocation(currentLocation - 1)
    }
  }

  return (
    <div className="book-btn-container">
      <button onClick={() => { goPrevPage() }}>Previous</button>
      <p className='no-book'>A larger screen size is needed to view the book!</p>

      {/* Book */}
      
      <div className={`book ${bookTransform}`}>

        {/* Paper 1 */}
        
        <div className={`paper p1 ${p1Flip}`}>
          <div className="front">
            <div className="f1 front-content">
              <h1>My Favorite Things</h1>
            </div>
          </div>
          <div className="back">
            <div className="b1 back-content">
              <h1>My Grandmother</h1>
              <p>She taught me all about balance ????</p>
              <img className='book-cover-img' src={grandma} alt='Joan and Grandma balancing on one leg.'/>
            </div>
          </div>
        </div>

        {/* Paper 2 */}
        
        <div className={`paper p2 ${p2Flip}`}>
          <div className="front">
            <div className="f2 front-content">
              <h1>The Five Earth Touchings</h1>
              <p>In gratitude, I bow to all generations of ancestors in my blood family.</p>
              <p>In gratitude, I bow to all generations of ancestors in my spiritual family.</p>
              <p>In gratitude, I bow to this land and all of the ancestors who made it available.</p>
              <p>In gratitude and compassion, I bow down and transmit my energy to those I love.</p>
              <p>In understanding and compassion, I bow down to reconcile myself with all those who have made me suffer.</p>
            </div>
          </div>
          <div className="back">
            <div className="b2 back-content">
              <img className='book-cover-img' src={mathImg} alt='Mathematics is the study of things that come out a certain way because there is no other way they could possibly be.'/>
            </div>
          </div>
        </div>
        
        {/* Paper 3 */}
        
        <div className={`paper p3 ${p3Flip}`}>
          <div className="front">
            <div className="f3 front-content">
              <h1>The Poetry of Logical Ideas</h1>
              <p>My favorite mathematical endeavors were crafting concise, creative, and elegant proofs to theoretical problems.</p>
              <p>In particular, those that arose while studying number theory, (ordered) set theory and graph theory.</p>
              <p>Theory of probability and statistics were my other favorite courses.</p>
              {/* <p>Beyond Calculus, I have studied: Linear Algebra, Abstract Algebra, Discrete Mathematics, Partial Differential Equations, Numerical Analysis, Real Analysis, Graph Theory, Set Theory, Ordered Set Theory, OOP and Data Structures, Theory of Probability, Theory of Statistics</p> */}
            </div>
          </div>
          <div className="back">
            <div className="b3 back-content">              
              <img className='book-cover-img' src={baker} alt='Joan holding bread.'/>
            </div>
          </div>
        </div>

        {/* Paper 4 */}

        <div className={`paper p4 ${p4Flip}`}>
          <div className="front">
            <div className="f4 front-content">
              <h1>Sourdough Fermentation</h1>
              <p>"Hearing, touching, smelling, seeing, and tasting -- bread is about all of these. The bread is always talking to us, and only when we open ourselves fully -- mind and senses together -- do we slowly begin to learn the subtle, but quite articulate, language of bread."</p>
              <p>     - Jeffery Hamelman</p>
            </div>
          </div>
          <div className="back">
            <div className="b4 back-content">
              <h1>This is a wonderful day. I have never seen this one before. - Maya Angelou</h1>
            </div>
          </div>
        </div>
      </div>

      <button onClick={() => { goNextPage() }}>Next</button>
    </div>
  )
}

export default Book
