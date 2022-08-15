
import '@coreui/coreui/dist/css/coreui.min.css'
import { CProgress, CProgressBar } from '@coreui/react';

import { useEffect } from "react";
import React from 'react'


import Title from "../components/section/Title";
import TitleLeft from "../components/section/TitleLeft";
import stylesSection from '../styles/Section.module.css'
import styles from '../styles/AboutMe.module.css'
import gym from '../../src/images/new/icons8-running-96.png'
import travel from '../../src/images/new/icons8-plane-96.png'
import ler from '../../src/images/new/icons8-read-96.png'



export default function AboutMe() {

    useEffect(() => {
        const target = document.querySelectorAll("[data-anima]")
        const targetTwo = document.querySelectorAll("[data-subtitle]")
        
        function animaScroll() {
            const windowTop = window.pageYOffset + ((window.innerHeight * 2.5) / 4);
            target.forEach(function(element) {  
                if (windowTop > element.offsetTop) {
                    element.classList.add("animate")
                } else {
                    element.classList.remove("animate")


                }
            })
            targetTwo.forEach(function(element) {  
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
            <div className={styles.title}>
                <Title title="Sobre Mim"/>
            </div>
            <div id="aboutme" className={`${stylesSection.containerSection} ${styles.containerSection}`}>
                <TitleLeft titleLeftOne="SOBRE" titleLeftTwo="MIM" size='200vh' secondRed />
                <div className={styles.containerAboutMe}>

                    <div className={styles.containerAboutMeOne}>     {/* Primeiro hiperContainer AbouteMe */}
                        <div className={styles.containerBox}> {/* Container de cima AbouteMe */}
                            <div className={styles.containerImage}>
                                <div data-anima='left'className={styles.contentImage}>IMAGE</div>
                            </div>
                            <div data-anima='right' className={styles.containerText}>
                                <p>Desde sempre apaixonado por Tecnologia, com enorme vontade de aprender e crescer constantemente na area de Programador e futuramente outras areas da tecnologia. Atualmente Cursando 2° semestre em Análise e desenvolvimento de sistemas - FMU</p>
                            </div>
                        </div>
                        <div className={styles.containerBox}> {/* Container de baixo AbouteMe */}
                            <div data-anima='left' className={styles.containerText}>
                                <p>Fiz Polo Aquático entre 2018 até 2021, fui capitão por 2 anos, porto com boa experiência de trabalho em equipe, perfil fortemente proativo, me considero colaborativo, aprendo com facilidade, gosto de desafiar meus próprios limites, que dessa maneira o crescimento é certo e imponente, com evolução constante na área de desenvolvedor. </p>
                            </div>
                            <div data-anima='right' className={styles.containerImage}>
                                <div className={styles.contentImage}>IMAGE</div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.containerAboutMeTwo}>   {/* Segundo hiperContainer AbouteMe */}  
                        <div className={styles.containerSkills}>    {/*   //Container skills AbouteMe  */}
                                <li data-anima='bottom' >
                                    <p>Dev Frontend</p>
                                    <div className={styles.progress}>  
                                        <CProgress className={`${styles.containerProgressBox} "mb-3"`}>
                                            <CProgressBar className={`${styles.containerProgress}`} animated variant="striped" value={80}/>
                                        </CProgress> 
                                    </div>
                                </li>
                                <li data-anima='bottom' style={{transitionDelay: '0.3s'}}>
                                    <p>Dev Backend</p>
                                    <div className={styles.progress}>
                                        <CProgress className={`${styles.containerProgressBox} "mb-3"`}>
                                            <CProgressBar className={`${styles.containerProgress}`} animated variant="striped"  value={40}/>
                                        </CProgress> 
                                    </div>
                                </li>
                                <li data-anima='bottom' style={{transitionDelay: '0.6s'}}>
                                    <p>Dev FullStack</p>
                                    <div className={styles.progress}>
                                        <CProgress className={`${styles.containerProgressBox} "mb-3"`}>
                                            <CProgressBar className={`${styles.containerProgress}`} animated variant="striped" value={50}/>
                                        </CProgress> 
                                    </div>
                                </li>
                                <li data-anima='bottom' style={{transitionDelay: '0.9s'}}>
                                    <p>Design</p>
                                    <div className={styles.progress}>
                                        <CProgress className={`${styles.containerProgressBox} "mb-3"`}>
                                            <CProgressBar className={`${styles.containerProgress}`} animated variant="striped" value={65}/>
                                        </CProgress> 
                                    </div>
                                </li>
                                <div data-subtitle style={{transitionDelay: '1s'}} className={styles.containerTitleSkills}>
                                    <h1>Habilidades</h1>
                                </div>
                        </div>
                        <div data-subtitle className={styles.containerHobbies}> {/*   //Container Hobbies AbouteMe  */}
                            <div data-subtitle style={{transitionDelay: '1s'}} className={styles.containerTitleHobbies}>
                                <h1>Hobbies</h1>
                            </div>
                            <div className={styles.containerBoxHobbies}>
                                <div data-anima='bottom' className={styles.boxHobbies}>
                                    <img src={travel}  alt='icon-travel' />
                                    <p>VIAJAR</p>
                                </div>
                                <div data-anima='bottom' style={{transitionDelay: '0.5s'}} className={styles.boxHobbies}>
                                    <img src={gym}  alt='icon-gym'/>
                                    <p>TREINAR</p>
                                </div>
                                <div data-anima='bottom' style={{transitionDelay: '1s'}} className={styles.boxHobbies}>
                                    <img src={ler}  alt='icon-ler' />
                                    <p>LER</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}