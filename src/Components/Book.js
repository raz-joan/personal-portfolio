import React, {useState} from 'react'
import '../SassStyles/Book.scss'

const Book = () => {
  const numOfPages = 3
  const maxLocation = numOfPages + 1
  const [currentLocation, setCurrentLocation] = useState(1)
  const [bookTransform, setBookTransform] = useState('')
  const [p1Flip, setP1Flip] = useState('')
  const [p2Flip, setP2Flip] = useState('')
  const [p3Flip, setP3Flip] = useState('')

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
          openBook()
          setP3Flip('')
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

      {/* <!-- Book --> */}
      
      <div className={`book ${bookTransform}`}>

        {/* <!-- Paper 1 --> */}
        
        <div className={`paper p1 ${p1Flip}`}>
          <div className="front">
            <div className="f1 front-content">
              <h1>Front 1</h1>
            </div>
          </div>
          <div className="back">
            <div className="b1 back-content">
              <h1>Back 1</h1>
            </div>
          </div>
        </div>

        {/* <!-- Paper 2 --> */}
        
        <div className={`paper p2 ${p2Flip}`}>
          <div className="front">
            <div className="f2 front-content">
              <h1>Front 2</h1>
            </div>
          </div>
          <div className="back">
            <div className="b2 back-content">
              <h1>Back 2</h1>
            </div>
          </div>
        </div>
        
        {/* <!-- Paper 3 --> */}
        
        <div className={`paper p3 ${p3Flip}`}>
          <div className="front">
            <div className="f3 front-content">
              <h1>Front 3</h1>
            </div>
          </div>
          <div className="back">
            <div className="b3 back-content">
              <h1>Back 3</h1>
            </div>
          </div>
        </div>
      </div>
      
      <button onClick={() => { goNextPage() }}>Next</button>
    </div>
  )
}

export default Book