import React, { useState } from 'react'
import CustomHyperLink from '../../components/customHyperLink/CustomHyperLink'
import './footer.css'
import { FooterButton } from './footerButton/footerButton'
import { FooterLink } from './footerLink/footerLink'
import { FooterLogo } from './footerLogo/footerLogo'
import { FooterStars } from './footerStars/footerStars'

import { ReactComponent as Instagram } from '../../assets/img/control/socialMedia/instagram.svg';
import { ReactComponent as Twitter } from '../../assets/img/control/socialMedia/twitter.svg';
import { ReactComponent as Opensea } from '../../assets/img/control/socialMedia/opensea.svg';
import { ReactComponent as Looksrare } from '../../assets/img/control/socialMedia/looksrare.svg';
import { ReactComponent as Discord } from '../../assets/img/control/socialMedia/discord.svg';
export const Footer = () => {
  return (
    <div className='footer'>
        <FooterStars/>
        <div className='footerContainer'>
            <FooterLogo/>
            <div className='i2'>
                <div className='footerCTitle'>
                    <div>
                        External Links

                    </div>
                </div>
                <div className='footerCContent'>
                    <div>
                        <FooterLink url={'https://poprank.io/thealienboy'} title={'PopRank'} description={'The Alien Boy'}/>
                        <FooterLink url={'https://poprank.io/thealiengirl'} title={'PopRank'} description={'The Alien Girl'}/>
                        <FooterLink url={'https://poprank.io/thealienufo'} title={'PopRank'} description={'The Alien UFO'}/>
                        <FooterLink url={''} title={'The Mothership'} description={'Twitch'}/>
                        <FooterLink url={'https://maddies.co/collection/alien-boy/'} title={'Maddies.co'} description={'Shop'}/>
                        <FooterLink url={'https://drinkhomeclub.de/collections/topseller-neu'} title={'Drink H. Home Club'} description={'Shop'}/>
                        <FooterLink url={'https://twitter.com/Alien_BBall'} title={'The ABA League'} description={'Twitter'}/>
                        <FooterLink url={'https://www.instagram.com/thealienboy_nft/'} title={'Official'} description={'Instagram'}/>
                    </div>
                </div>
            </div>

            <div className='i3'>
                <div className='footerCTitle'>
                    <div>
                        Make Contact

                    </div>
                </div>
                <div className='footerCContent'>
                    <div>
                        <FooterLink url={'mailto:thealienboynft@gmail.com?subject=Website%20Contact'} title={''} description={'thealienboynft@gmail.com'}/>
                        <div className='footerMedia'>
                            <CustomHyperLink href="https://twitter.com/TheAlienBoyNFT" customClass={'CustomHyperLinkFooter'}><Twitter/></CustomHyperLink>
                            <CustomHyperLink href="https://discord.com/invite/TheAlienBoy" customClass={'CustomHyperLinkFooter'}><Discord/></CustomHyperLink>
                            <CustomHyperLink href="https://www.instagram.com/thealienboy_nft/" customClass={'CustomHyperLinkFooter'}><Instagram /></CustomHyperLink>
                            <CustomHyperLink href="https://looksrare.org/collections/0x4581649aF66BCCAeE81eebaE3DDc0511FE4C5312" customClass={'CustomHyperLinkFooter'}><Looksrare/></CustomHyperLink>
                            <CustomHyperLink href="https://opensea.io/collection/thealienboy" customClass={'CustomHyperLinkFooter'}><Opensea/></CustomHyperLink>
                        </div>
                    </div>
                    
                </div>
            </div>

            {/* <div className='i4'>
                <div className='footerCTitle'>
                    <div>The Alien Boy Records</div>
                </div>
                <div className='footerCContent'>
                    <div className='footerButtons'>
                        <div className='btn1'>
                            <FooterButton text='PODCAST (SOON)'/>
                        </div>
                        <div className='btn2'>
                            <FooterButton text='SPOTIFY' link='https://open.spotify.com/playlist/3pGwJfqfFYvvwt0Kb9jgZx'/>
                        </div>
                        <div className='btn3'>
                            <FooterButton text='SPACES' link='https://discord.gg/MB7XTTNGbV'/>
                        </div>
                        <div className='btn4'>
                            <FooterButton text='LABER NIGHT' link='https://nft.labernicht.com/alien-boy-exclusive/'/>
                        </div>

                    </div>
                </div>
            </div> */}

        </div>
        <div className='footerBottom'>
            <div>Alien Source Brand (Open Source) 2021 by The Alien Boy. One alien in your wallet is a curiosity. Two are an invasion. <a href='https://www.thealienboy.com/tyc'> Terms and Conditions.</a></div> 
        </div>
    </div>
  )
}
