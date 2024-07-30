import React from 'react'
import './footerStars.css'
export const FooterStars = () => {
  return (
    <div className='footerStarsContainer'>
        <div className={`footerStars`}>
            <img src={require(`../../../assets/img/footer/footer_star.png`)} alt='' />
        </div>
        <div className={`footerStars2`}>
            <img src={require(`../../../assets/img/footer/footer_star.png`)} alt='' />
        </div>
        <div className={`footerStars3`}>
            <img src={require(`../../../assets/img/footer/footer_star.png`)} alt='' />
        </div>
        <div className={`footerStarsAlien`}>
            <img src={require(`../../../assets/img/footer/ufo_orange.png`)} alt='' />
        </div>
    </div>
  )
}
