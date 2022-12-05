import Title from "../components/section/Title";
import Subtitle from "../components/section/Subtitle";
// import { v4 as uuidv4 } from 'uuid';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

// import stylesSection from '../styles/Section.module.css';
import styles from '../../src/styles/Projetos.module.css';

import React from 'react'
import { useEffect } from "react";


import imageProducaoDesktop from '../../src/images/slide/slide-producao-desktop.gif';
import imageProducaoTablet from '../../src/images/slide/slide-producao-tablet.gif';
import imageProducaoMobile from '../../src/images/slide/slide-producao-mobile.gif';

import imageCalculadoraDesktop from '../../src/images/slide/slide-calculadora-desktop.png';
import imageCalculadoraTablet from '../../src/images/slide/slide-calculadora-tablet.png';
import imageCalculadoraMobile from '../../src/images/slide/slide-calculadora-mobile.png';

// import image3 from '../../src/images/slide/.png';
// import image4 from '../../src/images/slide/.png';
// import image5 from '../../src/images/slide/.png';
// import image6 from '../../src/images/slide/.png';



export default function Projetos() {
     

useEffect(() => {
    const target = document.querySelectorAll("[data-subtitle]")
    
    function animaScroll() {
        const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
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
            <Title title='Projetos'/>
            <Subtitle subtitle="Projetos do meu portfólio como desenvolvedor de sistemas."/>
        <div id="projetos" className={styles.containerCarousel}>
                <Carousel className={styles.contentCarousel}
                    showArrows={true} 
                    showStatus={false}
                    showIndicators={false}
                    infiniteLoop={true}
                    showThumbs={true}
                    useKeyboardArrows={true}
                    autoPlay={false}
                    stopOnHover={true}
                    swipeable={true}
                    dynamicHeight={true}
                    emulateTouch={true}
                    autoFocus={false}
                    
                    centerMode={true}
                    centerSlidePercentage={80}
                    
                    thumbWidth={161}
                    selectedItem={1}
                    interval={4000}
                    transitionTime={1000}
                    swipeScrollTolerance={5}
                    
                    >
                    <div className={styles.containerImage}>
                        <img src={imageProducaoDesktop} alt="slide"  className={styles.imageDesktop}/>
                        <img src={imageProducaoTablet}  alt="slide" className={styles.imageTablet}/>
                        <img src={imageProducaoMobile}  alt="slide" className={styles.imageMobile}/>
                        <div className={styles.containerText}>
                            <h1>Em Breve</h1>
                            <p>Projetos em produção. Fique ligado em breve novos projetos</p>
                        </div>                     
                    </div>
                    <div className={styles.containerImage}>
                        
                        <img src={imageCalculadoraDesktop}  alt="slide" className={styles.imageDesktop}/>
                        <img src={imageCalculadoraTablet} alt="slide" className={styles.imageTablet}/>
                        <img src={imageCalculadoraMobile} alt="slide"  className={styles.imageMobile}/>

                        
                        <div className={styles.emProducao}>
                            <p>EM PRODUÇÃO</p>
                        </div>
                        <div className={styles.containerText}>
                            <h1>Calculadora</h1>
                            <p>Em produção, projeto Calculadora</p>
                        </div>
                    </div>
                    <div className={styles.containerImage}>
                        
                        <img src={imageProducaoDesktop} alt="slide"  className={styles.imageDesktop}/>
                        <img src={imageProducaoTablet}  alt="slide" className={styles.imageTablet}/>
                        <img src={imageProducaoMobile}  alt="slide" className={styles.imageMobile}/>
                        
                        <div className={styles.containerText}>
                            <h1>Em Breve</h1>
                            <p>Projetos em produção. Fique ligado em breve novos projetos</p>
                        </div>                    
                    </div>
                    <div className={styles.containerImage}>
                        
                        <img src={imageProducaoDesktop} alt="slide"  className={styles.imageDesktop}/>
                        <img src={imageProducaoTablet}  alt="slide" className={styles.imageTablet}/>
                        <img src={imageProducaoMobile}  alt="slide" className={styles.imageMobile}/>
                        
                        <div className={styles.containerText}>
                            <h1>Em Breve</h1>
                            <p>Projetos em produção. Fique ligado em breve novos projetos</p>
                        </div>                    
                    </div>
                    
                </Carousel>
            </div>
            <button href="/projetos">
                <p>Ver mais</p>
            </button>
        </>
    )
}