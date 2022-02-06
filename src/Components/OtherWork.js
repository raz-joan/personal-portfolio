import React from 'react'
import '../SassStyles/OtherWork.scss'
import sourdoughBread from '../Assets/sourdoughBread.pdf'
import breadBookletCover from '../Assets/breadBookletCover.png'
import starterCover from '../Assets/starterCover.png'
import EveryDaySourdoughStarter from '../Assets/EveryDaySourdoughStarter.pdf'
import WheatBooklet from '../Assets/WheatBooklet.pdf'
import WheatCover from '../Assets/WheatCover.png'
import breadRecipe from '../Assets/breadRecipe.png'
import TurkeyRedBread from '../Assets/TurkeyRedBread.pdf'

const OtherWork = () => {
  return (
    <div className="other-work-container">
      <a href='https://www.youtube.com/watch?v=Ixqr9e3wCxI' className="work-link">YouTube Link: How to fold a pocket zine!</a>
      <div className="works-container">
        <div className='work'>
          <img className="work-img" src={breadBookletCover} alt="Bread Booklet Cover"/>
          <a href={sourdoughBread} className="work-link">Sourdough Bread Booklet</a>
        </div>
        <div className='work'>
          <img className="work-img" src={starterCover} alt="Sourdough Starter Zine Cover"/>
          <a href={EveryDaySourdoughStarter} className="work-link">Sourdough Starter Pocket Zine</a>
        </div>
        <div className='work'>
          <img className="work-img" src={WheatCover} alt="Wheat Zine Cover"/>
          <a href={WheatBooklet} className="work-link">Moxie Wheat Pocket Zine</a>
        </div>
        <div className='work'>
          <img className="work-img" src={breadRecipe} alt="Sourdough Bread Recipe Cover" />
          <a href={TurkeyRedBread} className="work-link">Sourdough Bread Recipe</a>
        </div>
      </div>
    </div>
  )
}

export default OtherWork