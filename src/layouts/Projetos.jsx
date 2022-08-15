import Title from "../components/section/Title";
import Subtitle from "../components/section/Subtitle";
// import { v4 as uuidv4 } from 'uuid';

// import stylesSection from '../styles/Section.module.css';
// import styles from '../../src/styles/Projetos.module.css';

import React from 'react'
import { useEffect } from "react";

// import image1 from '../../src/images/pexels1.jpg';
// import image2 from '../../src/images/pexels2.jpg';
// import image3 from '../../src/images/pexels3.jpg';
// import image4 from '../../src/images/pexels4.jpg';
// import image5 from '../../src/images/pexels5.jpg';
// import image6 from '../../src/images/pexels6.jpg';



export default function Projetos() {
     
    
//     let slides = [
//             {
//                 key: uuidv4(),
//                 content: <img src={image1} width='400px' alt="1" />
//             },
//             {
//                 key: uuidv4(),
//                 content: <img src={image2} width='400px' alt="2" />
//             },
//             {
//                 key: uuidv4(),
//                 content: <img src={image3} width='400px' alt="3" />
//             },
//             {
//                 key: uuidv4(),
//                 content: <img src={image4} width='400px' alt="4" />
//             },
//             {
//                 key: uuidv4(),
//                 content: <img src={image5} width='400px' alt="5" />
//             },
//             {
//                 key: uuidv4(),
//                 content: <img src={image6} width='400px' alt="6" />
//             },
//             {
//                 key: uuidv4(),
//                 content: <img src={image1} width='400px' alt="1" />
//             },
//             {
//                 key: uuidv4(),
//                 content: <img src={image2} width='400px' alt="2" />
//             },
//             {
//                 key: uuidv4(),
//                 content: <img src={image3} width='400px' alt="3" />
//             },
//             {
//                 key: uuidv4(),
//                 content: <img src={image4} width='400px' alt="4" />
//             },
//             {
//                 key: uuidv4(),
//                 content: <img src={image5} width='400px' alt="5" />
//             },
//             {
//                 key: uuidv4(),
//                 content: <img src={image6} width='400px' alt="6" />
//             }
           
// ];

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
            <div style={{ width: "70%", height: "auto", }}>

                {/* <div id="projetos" data-subtitle className={`${stylesSection.containerSection} ${styles.containerCarousel}`} style={{ width: "90%", height: "300px", margin: "0 auto", transitionDelay: '2s'}}>
                    <p>EM BREVE</p>
                    <Carousel slides={slides} 
                    goToSlide={0}
                    offsetRadius={2}
                    showNavigation={true}
                    />
                </div> */}
            </div>
            <button>
                <p>Em Breve</p>
            </button>
        </>
    )
}