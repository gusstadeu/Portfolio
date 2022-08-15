import Experiencia from "./Experiencia"
import styles from '../styles/Body.module.css'
import Main from './Main'
import Resume from './Resume'
import AboutMe from "./AboutMe"
import Linguagens from "./linguagens"
import Projetos from "./Projetos"
import Formacao from "./Formacao"
import Footer from "./Footer"
import React from 'react'





export default function Body() {
    return (
        <div className={styles.containerBody}>
            <Main  />
            <Resume />
            <AboutMe /> 
            <Experiencia  />
            <Linguagens />
            <Projetos />
            <Formacao />
            <Footer />
        </div>
    )
}