import React from 'react'
import '../SassStyles/OtherWork.scss'
import sourdoughBread from '../Assets/sourdoughBread.pdf'
import breadBookletCover from '../Assets/breadBookletCover.png'
import starterCover from '../Assets/starterCover.png'
import EveryDaySourdoughStarter from '../Assets/EveryDaySourdoughStarter.pdf'
import WheatBooklet from '../Assets/WheatBooklet.pdf'
import WheatCover from '../Assets/WheatCover.png'

const OtherWork = () => {
  return (
    <div className="other-work-container">
      <a href='https://www.youtube.com/watch?v=Ixqr9e3wCxI'>YouTube Link: How to fold a pocket zine!</a>
      <div className="works-container">
        <div className='booklet'>
          <img src={breadBookletCover} alt="Bread Booklet Cover"/>
          <a href={sourdoughBread}>Sourdough Bread Booklet</a>
        </div>
        <div className='booklet'>
          <img src={starterCover} alt="Sourdough Starter Zine Cover"/>
          <a href={EveryDaySourdoughStarter}>Sourdough Starter Pocket Zine</a>
        </div>
        <div className='booklet'>
          <img src={WheatCover} alt="Wheat Zine Cover"/>
          <a href={WheatBooklet}>Moxie Wheat Pocket Zine</a>
        </div>
      </div>
    </div>
  )
}

export default OtherWork