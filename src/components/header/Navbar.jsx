import styles from "../../styles/Navbar.module.css"
import { useEffect } from "react";
import React from 'react'

import { Link } from "react-router-dom";


import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Navbar() {


    useEffect(() => {
        const target = document.querySelectorAll("[data-containerHeader]")
        
        function animaScroll() {
            const windowTop = window.pageYOffset + ((window.innerHeight * 0.1) / 4);
            target.forEach(function(element) {  
                if (windowTop > element.offsetTop) {
                    element.classList.add("Navbar_animaHeader__4KoxB")
                
                } else {
                    element.classList.remove("Navbar_animaHeader__4KoxB")

                }
            })
        }         
        window.addEventListener('scroll', function() { 
            animaScroll()   
        })  
        
    }, [])

    return (
        <div data-containerHeader className={`${styles.containerNavbar}`}>
            <div className={styles.logoBox}>
                <p><span>{`<`}</span>{`Gustavo`}<span>{`{ ]`}</span>{`Tadeu`}<span>{`/>`}</span></p>
            </div>
            <div className={styles.navBox}>
                <div className={styles.dropdown}>
                    <AnchorLink offset={100} href="#main">
                        <div className={styles.dropbtn}><Link to="/">Home</Link></div>
                    </AnchorLink>
                    <div className={styles.dropdownContent}>
                        <AnchorLink offset={100} href="#experiencia">
                            <li>Experiência</li>
                        </AnchorLink>
                        <AnchorLink offset={200} href='#projetos'>
                            <li>Projetos</li>
                        </AnchorLink>
                        <AnchorLink offset={100} href="#formacao">
                            <li>Formação</li>
                        </AnchorLink>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <div className={styles.dropbtn}>
                        <Link to="/projetos">Projetos</Link>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <div className={styles.dropbtn}>
                        <AnchorLink offset={200} href="#aboutme">
                            <Link to="/">Sobre mim</Link>
                        </AnchorLink>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <div className={styles.dropbtn}>
                        <Link to="/contato">Contato</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}