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
import presidents from '../Assets/presidents.pdf'
import presidentsCover from '../Assets/presidentsCover.png'
import croquetCover from '../Assets/croquetCover.png'
import PresidentialCroquet from '../Assets/PresidentialCroquet.jpg'
import Crawfish from '../Assets/Crawfish.jpg'
import crawfishCover from '../Assets/crawfishCover.png'
import solarEclipseCover from '../Assets/solarEclipseCover.png'
import eclipseStencil from '../Assets/eclipseStencil.JPG'
import mlkCover from '../Assets/mlkCover.png'
import mlkStencil from '../Assets/mlkStencil.JPG'
import PilgrimPassport from '../Assets/PilgrimPassport.pdf'
import pilgrimPassportCover from '../Assets/pilgrimPassportCover.png'

const OtherWork = () => {
  return (
    <div className="other-work-container">
      <a href='https://www.youtube.com/watch?v=Ixqr9e3wCxI' className="work-link">YouTube Link: How to fold a pocket zine!</a>
      <div className="works-container">
        <div className='work'>
          <img className="work-img" src={breadBookletCover} alt="Bread Book Cover"/>
          <a href={sourdoughBread} className="work-link">Sourdough Bread Book</a>
        </div>
        <div className='work'>
          <img className="work-img" src={mlkCover} alt="Sourdough Bread with a stencil of Martin Luther King Jr" />
          <a href={mlkStencil} className="work-link">Sourdough Bread with MLK Jr.</a>
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
          <img className="work-img" src={presidentsCover} alt="drawing of 44 US presidents through Barak Obama" />
          <a href={presidents} className="work-link">First 44 US Presidents</a>
        </div>
        <div className='work'>
          <img className="work-img" src={croquetCover} alt="drawing of presidents playing croquet" />
          <a href={PresidentialCroquet} className="work-link">4th of July Postcard Invitation</a>
        </div>
        <div className='work'>
          <img className="work-img" src={crawfishCover} alt="drawing of crawfish boil" />
          <a href={Crawfish} className="work-link">Crawfish Boil Invitation</a>
        </div>
        <div className='work'>
          <img className="work-img" src={solarEclipseCover} alt="Sourdough Bread with a stencil of the solar eclipse" />
          <a href={eclipseStencil} className="work-link">Charcoal Sourdough Bread with a Solar Eclipse</a>
        </div>
        <div className='work'>
          <img className="work-img" src={breadRecipe} alt="Sourdough Bread Recipe Cover" />
          <a href={TurkeyRedBread} className="work-link">Sourdough Bread Recipe</a>
        </div>
        <div className='work'>
          <img className="work-img" src={pilgrimPassportCover} alt="Camino de Santiago Pilgrim Passport Cover" />
          <a href={PilgrimPassport} className="work-link">500 miles on the Camino de Santiago</a>
        </div>
      </div>
    </div>
  )
}

export default OtherWork