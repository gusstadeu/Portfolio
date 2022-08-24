import stylesSection from '../styles/Section.module.css'
import styles from '../styles/Linguagens.module.css'
import Title from '../components/section/Title'

import html from '../../src/images/html5.png'
import css from '../../src/images/css3Vector.png'
import javascript from '../../src/images/javascriptVector.png'
import sass from '../../src/images/sassVector.png'

import react from '../../src/images/reactVector.png'
import bootstrap from '../../src/images/bootstrapVector.png'
import api from '../../src/images/APIvector.png'
import { FaFigma } from 'react-icons/fa' ; 
import github from '../../src/images/githubVector.png'
import git from '../../src/images/gitVector.png'

import TitleLinguagens from '../components/section/TitleLinguagens'

import { useEffect } from "react";
import React from 'react'




export default function Linguagens() {

    useEffect(() => {
        const target = document.querySelectorAll("[data-subtitle]")
        
        function animaScroll() {
            const windowTop = window.pageYOffset + ((window.innerHeight * 2.5) / 4);
            target.forEach(function(element) {  
                if (windowTop > element.offsetTop) {
                    element.classList.add("animate")
                } else {
                    element.classList.remove("animate")


                }
            })
        }         
        window.addEventListener('scroll', function() { 
            animaScroll()   
        })  
        
    }, [])

    return (
        <>
            <Title title="Linguagens"/>
            <div className={`${stylesSection.containerSection} ${styles.containerSection}`}>
                
                <div className={styles.linguagensBoxOne}>
                    <div data-anima='bottom' className={styles.linguagensBox}>
                        <li>
                            <img src={javascript}  alt='icon-js'/>
                        </li>
                        <li>JavaSript</li>
                    </div>
                    <div data-anima='bottom' style={{transitionDelay: '0.5s'}} className={styles.linguagensBox}>
                        <li>
                            <img src={html}  alt='icon-html'/>
                        </li>
                        <li>HTML</li>
                    </div>
                    <div data-anima='bottom' style={{transitionDelay: '1s'}} className={styles.linguagensBox}>
                        <li>
                            <img src={css}  alt='icon-css' />
                        </li>
                        <li>CSS</li>
                    </div>
                    <div data-anima='bottom' style={{transitionDelay: '1.5s'}} className={styles.linguagensBox}>
                        <li>
                            <img src={sass}  alt='icon-sass' />
                        </li>
                        <li>SASS</li>
                    </div>
                </div>
                <div className={styles.linguagensBoxTwo}>
                    <div data-subtitle className={styles.containerFramework}>
                        <div data-subtitle className={styles.contentTitle}>
                            <TitleLinguagens titleRed='Frameworks'/>
                        </div>
                        <div className={styles.contentLinguagens}>
                            <div data-anima='left' className={styles.linguagensBox}>
                                <li>
                                    <img src={react}  alt='icon-react' />
                                </li>
                                <li>React.Js</li>
                            </div>
                            <div data-anima='left' style={{transitionDelay: '0.5s'}} className={styles.linguagensBox}>
                                <li>
                                    <img src={bootstrap}  alt='icon-bootstrap'/>
                                </li>
                                <li>Bootstrap</li>
                            </div>
                        </div>
                    </div>
                    <div data-subtitle className={styles.containerAPI}>
                        <div data-subtitle className={styles.contentTitle}>
                            <TitleLinguagens titleRed='APIs'/>
                        </div>
                        <div className={styles.contentLinguagens}>
                            <div data-anima='right' style={{transitionDelay: '0.5s'}} className={styles.linguagensBox}>
                                <li>
                                    <img src={api}  alt='icon-api'/>
                                </li>
                                <li>APIs</li>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.linguagensBoxThree}>
                    <div data-subtitle className={styles.containerDesign}>
                        <div data-subtitle className={styles.contentTitle}>
                            <TitleLinguagens titleRed='Web' titleWhite='Design'/>
                        </div>
                        <div className={styles.contentLinguagens}>
                            <div data-anima='left' className={styles.linguagensBox}>
                                <li>
                                    <div className={styles.figma}>
                                        <FaFigma />
                                    </div>
                                </li>
                                <li>Figma</li>
                            </div>
                        </div>
                    </div>
                    <div className={styles.containerVersionamento}>
                        <div data-subtitle className={styles.contentTitle}>
                            <TitleLinguagens titleRed='Versionamento' titleWhite='de Código'/>
                        </div>
                        <div className={styles.contentLinguagens}>
                            <div data-anima='right' className={styles.linguagensBox}>
                                <li>
                                    <img src={github}  alt='icon-github'/>
                                    
                                </li>
                                <li>Github</li>
                            </div>
                            <div data-anima='right' style={{transitionDelay: '0.5s'}} className={styles.linguagensBox}>
                                <li>
                                    <img src={git} alt='icon-git' />
                                </li>
                                <li>Git</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}