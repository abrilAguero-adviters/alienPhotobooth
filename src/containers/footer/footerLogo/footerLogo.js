import React, { useState } from 'react'
import './footerLogo.css'
export const FooterLogo = () => {
    const [triggerAnimation, setTriggerAnimation] = useState(false)
    window.addEventListener("scroll", function(event) {
        let top = this.scrollY;
        let topElement =window.scrollY + document.getElementById('triggerUfo').getBoundingClientRect().top // Y
        if (((topElement-800)<top)&&((topElement+400)>top)) {
            setTriggerAnimation(true)
        }else{
            setTriggerAnimation(false)
        }
    }, false);
  return (
    <div className='footerC1 i1'>
        <div className='footerC1TextContainer'>
            
            <div className='footerC1Text' id='triggerUfo'>
                <span>THE ALIEN BOY</span>
                
                <div className={`footerC1Alien ${triggerAnimation&&`slide-in-tr`}`}>
                    <img src={require(`../../../assets/img/footer/ufo_violet.png`)}  alt=''/>
                </div></div>
        </div>
    </div>
  )
}
