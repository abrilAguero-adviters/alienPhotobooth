import React from 'react'
import './footerButton.css'
export const FooterButton = ({text='button',link='',}) => {
  return (
    <>
      {
        link?
          <a className='footerButtonLink' href={link}>
            <div className='footerButton'>{text}</div>
          </a>
        :
          <div className='footerButtonLink' href={link}>
            <div className='footerButton'>{text}</div>
          </div>
      }
    </>
  )
}
