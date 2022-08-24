import styles from '../styles/Main.module.css'
import stylesSection from '../styles/Section.module.css'
import React from 'react'

import imageMain from "../images/new/main.svg"
import AnchorLink from 'react-anchor-link-smooth-scroll'

import urlCV from '../docs/CV-gustavotadeu.pdf'

export default function Main() {
    return (
        <div id="main" className={`${styles.containerMain} ${stylesSection.containerSection}`}>
            <div className={`${styles.containerOne} ${stylesSection.containerOne}`}>
                <div className={styles.boxText}>
                    <h3>Olá, eu sou <span>Gustavo Tadeu</span></h3>
                    <h1>Front-end Developer</h1>
                    <p>Entusiasta da tecnologia, em busca de oportunidades no mercado de desenvolvimento.</p>
                    <div className={styles.containerButtons}>
                        {/* <div className={styles.containerButtonsCV}> */}
                            <a href={urlCV} download="CV-gustavotadeu.pdf">
                                <li>Download CV</li>
                            </a>
                        {/* </div> */}
                        <AnchorLink offset={150} href="#aboutme">
                            <li>Sobre mim</li>
                        </AnchorLink>
                    </div>
                </div>
            </div> 
            <div className={`${styles.containerTwo} ${stylesSection.containerTwo}`}>
                <div className={styles.boxImage}>
                    <img src={imageMain} alt="Homem programando" />
                </div>
            </div>
        </div>
    )
}