import { useEffect } from "react";
import React from 'react'

import Subtitle from "../components/section/Subtitle";
import Title from "../components/section/Title";
import styles from '../styles/Experience.module.css'
import stylesSection from '../styles/Section.module.css'

import designImage from '../images/new/icons8-design-96.png'
import devImage from '../images/new/icons8-google-code-96.png'
import responsivoImage from '../images/new/icons8-responsive-96.png'





export default function SectionCentral(props) {

    

    useEffect(() => {
        const target = document.querySelectorAll("[data-container]")
        
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

        const targetOne = document.querySelectorAll("[data-animaTitle]")
        const targetTwo = document.querySelectorAll("[data-animaDescrip]")

        function animaScrolltWO() {
            const windowTop = window.pageYOffset + ((window.innerHeight * 2) / 4);
            targetOne.forEach(function(element) {  
                if (windowTop > element.offsetTop) {
                    element.classList.add("textRevealOne")
  
                } else {
                    element.classList.remove("textRevealOne")


                }
            })
            targetTwo.forEach(function(element) {  
                if (windowTop > element.offsetTop) {
                    element.classList.add("textRevealTwo")
  
                } else {
                    element.classList.remove("textRevealTwo")


                }
            })
        }     
        window.addEventListener('scroll', function() { 
            animaScroll()   
            animaScrolltWO()
        })  
        
    }, [])
    
    return (
        <>
        <div id="experiencia"  className={`${styles.containerTitleExpe}`} > 
            <div className={styles.boxTitleExpe}>
                <Title  title="Experiência"/>
                <Subtitle subtitle="Com tais experiências busco oportunidades para entrar no mercado de trabalho, com o intuito de desenvolver meu conhecimento e aprender ainda mais. "/>
            </div>
        </div>
        <div className={` ${stylesSection.containerSection} ${styles.containerSection}`}>
            <div className={styles.containerContentExpe}> 
                <div className={styles.spaceOne}>
                    <div data-container className={styles.containerBox} >
                        <div className={styles.containerImage}>
                            <img src={designImage} alt="design icon"/>
                        </div>
                        <div data-animaTitle >
                            <h3>Web Design</h3>
                        </div>
                        <div data-animaDescrip >
                            <p>Experiecia intermediaria de design ux/ui</p>
                        </div>    
                    </div>
                    <div data-container className={styles.containerBox}>
                        <div className={styles.containerImage}>
                            <img src={devImage} alt="code icon"/>
                        </div>
                        <div data-animaTitle >
                            <h3>Dev Frontend</h3>
                        </div>
                        <div data-animaDescrip >
                            <p>Desenvolvedor de programas para inumeras areas</p>
                        </div>   
                    </div>
                    <div data-container className={styles.containerBox}>
                        <div className={styles.containerImage}>
                            <img src={responsivoImage} alt="responsive icon" />
                        </div>
                        <div data-animaTitle >
                            <h3>Responsividade</h3>
                        </div>
                        <div data-animaDescrip >
                            <p>Projetos desenvolvidos para a dimensão de qualquer aparelho</p>
                        </div>   
                    </div>
                </div>
                <div data-container className={styles.spaceTwo}>
                    <div>Primeira Oportunidade</div>
                    <div>+10 Projetos pessoais Desenvolvidos</div>
                    <div>Inglês intermediário</div>
                </div>
            </div>
            
        </div>
        </>
    )
}