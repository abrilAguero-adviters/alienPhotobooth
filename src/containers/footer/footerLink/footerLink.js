import React from 'react';
import './footerLink.css';
export const FooterLink = ({url, title, description}) => {
  return (
    <>
    {
      url?
        <a href={url}>
          <div className='footerLink'>
              {title} <span>{description}</span>
          </div>
        </a>
      :
        <div>
            <div className='footerLink'>
                {title} <span>{description}</span>
            </div>
        </div>
    }
    </>
  )
}
