import '@coreui/coreui/dist/css/coreui.min.css'
import Navbar from '../components/header/Navbar';
import NavbarMobile from '../components/header/NavbarMobile';

import styles from "../styles/Header.module.css"
import logo from "../image/logo.png"
// import buttonNav from "../images/buttonNav.png"
// import AnchorLink from 'react-anchor-link-smooth-scroll'
import React from 'react'

 


export default function Header() {

    
    return (
    <div className={styles.containerHeader}>
        <div className={styles.logoBoxMobile}>
            <p><span>{`<`}</span>{`Gustavo`}<span>{`{ ]`}</span>{`Tadeu`}<span>{`/>`}</span></p>
            <img src={logo}  alt='icon-logo' />
        </div>
        <NavbarMobile />
        <div className={styles.Navbar}>
            <Navbar />
        </div>
    </div>
)
}