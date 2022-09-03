import React from 'react';
//import hero from './hero.jpg';
import logo from './logo.jpg';
import style from './LandingPage.module.css';

import { SocialIcon } from 'react-social-icons';

export default function App() {
    return (
        <>
            <img src={logo} alt="CakeFox Logo" className="App-logo" />

            <div className={style.socials}>
                <SocialIcon url="https://www.facebook.com/CakeFoxBakes/" target="_blank" />
                <SocialIcon url="https://www.instagram.com/cakefoxbakes" target="_blank" />
                <SocialIcon url="mailto:penny@cakefox.co.uk" target="_blank" />
            </div>
        </>
    );
}
