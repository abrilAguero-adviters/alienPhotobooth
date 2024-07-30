import React, {useState, useEffect} from 'react'
import darkModeIcon from '../../assets/img/control/darkModeIcon.png'
import lightModeIcon from '../../assets/img/control/lightModeIcon.png'
import { ReactComponent as LogoSVG } from '../../assets/img/control/logoSVG.svg';
import { ReactComponent as Instagram } from '../../assets/img/control/socialMedia/instagram.svg';
import { ReactComponent as Twitter } from '../../assets/img/control/socialMedia/twitter.svg';
import { ReactComponent as Youtube } from '../../assets/img/control/socialMedia/youtube.svg';
import { ReactComponent as Opensea } from '../../assets/img/control/socialMedia/opensea.svg';
import { ReactComponent as Looksrare } from '../../assets/img/control/socialMedia/looksrare.svg';
import { ReactComponent as Discord } from '../../assets/img/control/socialMedia/discord.svg';


import ConnectWallet from './../connectWallet/ConnectWallet';

import './navbar.css'
import CustomHyperLink from './../../components/customHyperLink/CustomHyperLink';

export default function Navbar() {

    const [Theme, setTheme] = useState(false)

    useEffect(() => {
        let localTheme =  localStorage.getItem("theme")
        setTheme(localTheme === "light")
    }, [])

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", Theme ? "light" : "dark")
        localStorage.setItem("theme", Theme ? "light" : "dark");
    }, [Theme])


  return (
    <div className='navbar'>
        <div>
        <LogoSVG fill='current' stroke='current' className='logo'/>
            {/* <div className='rightNavbar'> */}
                <div className='socialMediaWrapper'>
                    <CustomHyperLink href='https://www.youtube.com/watch?v=bFy_NgeW4ZQ'><Youtube/></CustomHyperLink>
                    <CustomHyperLink href="https://twitter.com/TheAlienBoyNFT"><Twitter/></CustomHyperLink>
                    <CustomHyperLink href="https://discord.com/invite/TheAlienBoy"><Discord/></CustomHyperLink>
                    <CustomHyperLink href="https://www.instagram.com/thealienboy_nft/"><Instagram /></CustomHyperLink>
                    <CustomHyperLink href="https://looksrare.org/collections/0x4581649aF66BCCAeE81eebaE3DDc0511FE4C5312"><Looksrare/></CustomHyperLink>
                    <CustomHyperLink href="https://opensea.io/collection/thealienboy"><Opensea/></CustomHyperLink>
                </div>
               
            {/* </div> */}
            <div className="darkModeWalletWrapper">
                    <img src={ Theme ? darkModeIcon : lightModeIcon} onClick={() => {setTheme(prev => !prev)}} className={`themeColorButton ${Theme && "rotateMoon"}`}/>
                    <ConnectWallet />
                </div>
        </div>
    </div>
  )

}
