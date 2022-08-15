import Title from '../components/section/Title'
import stylesSection from '../styles/Section.module.css'
import styles from '../styles/Resume.module.css'
import { useEffect } from "react";
import React from 'react'

import resumeImage from "../images/new/resume.svg"


export default function Resume() {
    
    useEffect(() => {
        const target = document.querySelectorAll("[data-anima]")
        
        function animaScroll() {
            const windowTop = window.pageYOffset + ((window.innerHeight * 3.5) / 4);
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



    return(
        <>
        <Title  title="Resumo"/>
        <div className={` ${styles.containerSection} ${stylesSection.containerSection} `}>
            <div className={`${styles.containerOne} ${stylesSection.containerOne}`}>
                <div data-anima="left" className={`${styles.boxImage}`}>
                    <img src={resumeImage} alt="code simbolo" />
                </div>
            </div>
            <div className={`${styles.containerTwo} ${stylesSection.containerTwo}`}>
                <div data-anima="right" className={`${styles.ContentResumeOne}`}>
                    <div className={styles.BoxResumeOne} >
                        <h6>{'// Quem é o Gustavo?'}</h6>
                        <h6><span>infos</span>{' {'}</h6>
                        <p>    <span>Nome</span>: Gustavo Tadeu ;</p>
                        <p>    <span>Idade</span>: 18 anos ;</p>
                        <p>    <span>Função</span>: Desenvolvedor front-end ;</p>
                        <p>    <span>Curso</span>: Tecnólogo análise e desenvolvimento de sistemas ;</p>
                        <h6>{'}'}</h6>
                    </div>
                </div>

                <div data-anima="right" className={`${styles.ContentResumeTwo}`} >
                    <div className={styles.BoxResumeTwo} >
                        <h6>{'// Sobre mim'}</h6>
                        <h6>{'<'}<span>div</span>{'>'}</h6>
                        <p>{'<'}<span>p</span>{'>'} Sou entusiasta da tecnologia, constantemente antenado à novas tendências tecnológicas, Desenvolvo interfaces modernas e de alta qualidade, focando na performance, estilização, animação, responsividade {'</'}<span>p</span>{'>'}</p>
                        <h6>{'</'}<span>div</span>{'>'}</h6> 
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}