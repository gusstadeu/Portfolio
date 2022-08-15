import stylesSection from '../styles/Section.module.css'
import styles from '../styles/Footer.module.css'

import React from 'react'

import TitleLeft from "../components/section/TitleLeft";
import { FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa' ;   
import { GrMail } from "react-icons/gr";

import Redes from '../components/footer/Redes';

export default function Footer() {
    return (
        <>
            <div id="contato" className={`${stylesSection.containerSection} ${styles.containerSection}`}>
                <div className={styles.containerOne}>
                    <TitleLeft titleLeftOne="CONTATA" titleLeftTwo="ME" firstRed size='55vh' />
                    <div className={styles.containerContatos}>
                        <a href="https://www.linkedin.com/in/guss-tadeu/" target='_blank' rel="noopener noreferrer">
                            <Redes icon={FaLinkedinIn} text="Gustavo Tadeu" />
                        </a>
                        <a href="https://www.instagram.com/guss_ttadeu_/" target='_blank' rel="noopener noreferrer">
                            <Redes icon={FaInstagram} text="guss_ttadeu_" />
                        </a>
                        <a href="https://github.com/gusstadeu" target='_blank' rel="noopener noreferrer">
                            <Redes icon={FaGithub} text="gusstadeu" />
                        </a>
                        <a href="mailto:gtadeu.jg@gmail.com?subject=subject text" target='_blank' rel="noopener noreferrer">
                            <Redes icon={GrMail} text="gtadeu.jg@gmail.com" />
                        </a>
                        
                    </div>
                </div>
                <div className={styles.containerTwo}>
                    <div className={styles.containerPhoto}>
                        <div className={styles.line}>
                            <div className={styles.photo}>
                            </div>
                        </div>
                    </div>
                    <div className={styles.containerIcons}>
                        <a href="https://www.linkedin.com/in/guss-tadeu/" target='_blank' rel="noopener noreferrer">
                            <FaLinkedinIn />
                        </a>
                        <a href="https://www.instagram.com/guss_ttadeu_/" target='_blank' rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://github.com/gusstadeu" target='_blank' rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                        <a href="mailto:gtadeu.jg@gmail.com?subject=Interessado sobre seu Portfolio - [nome, empresa]" target='_blank' rel="noopener noreferrer">
                            <GrMail />
                        </a>
                    </div>
                    <div className={styles.containerDireitos}>
                        <p>2022 <span style={{color:'#DE1313' }}>Gustavo Tadeu</span>.<br></br> todos os direitos reservados</p>
                    </div>
                </div>

            </div>
        </>
    )
}