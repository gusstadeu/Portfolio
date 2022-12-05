import { useState } from "react";
import React from 'react'

import '@coreui/coreui/dist/css/coreui.min.css'
import { CButton, COffcanvas, COffcanvasHeader, COffcanvasTitle, CCloseButton, COffcanvasBody } from '@coreui/react';
import styles from "../../styles/Header.module.css"
import buttonNav from "../../images/buttonNav.png"

import { Link } from "react-router-dom";

export default function NavbarMobile() {

    const [visible, setVisible] = useState(false)


    return (
        <div className={styles.containerOffcanvas}>
            <CButton className={styles.button} onClick={() => setVisible(true)}>
                <img src={buttonNav} className={styles.buttonNav} alt='icon-navbar'/>
            </CButton>
            <COffcanvas className={styles.offcanvasBox} placement="top" visible={visible} onHide={() => setVisible(false)}>
                <div className={styles.offcanvasContent}>

            <COffcanvasHeader className={styles.offcanvasHeader}>
                <COffcanvasTitle>
                    <p>Gustavo</p>
                    <h1>TADEU</h1>
                </COffcanvasTitle>
            </COffcanvasHeader>
            <COffcanvasBody className={styles.offcanvasBody}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/projetos">Projetos</Link>
                </li>
                <li>
                    <Link to="/contato">Contato</Link>
                </li>

                        {/* <AnchorLink className={styles.link} offset={200} href="#Home">
                            <li>Home</li>
                        </AnchorLink> */}
                        {/* <AnchorLink className={styles.link} offset={200} href="#aboutme">
                            <li>Sobre mim</li>
                        </AnchorLink> */}
                        {/* <AnchorLink className={styles.link} offset={100} href="#experiencia">
                            <li>Experiência</li>
                        </AnchorLink> */}
                        {/* <AnchorLink className={styles.link} offset={200} href='#projetos'>
                            <li>Projetos</li>
                        </AnchorLink> */}
                        {/* <AnchorLink className={styles.link} offset={250} href="#formacao">
                            <li>Formação</li>
                        </AnchorLink> */}
                        {/* <AnchorLink className={styles.link} offset={100} href="#contato">
                            <li>Contatos</li>
                        </AnchorLink> */}
            </COffcanvasBody>
                </div>
                <CCloseButton className={styles.textReset} onClick={() => setVisible(false)} />
            </COffcanvas>
        </div>
    )
}