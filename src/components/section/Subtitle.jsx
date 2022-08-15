import styles from '../../styles/Section.module.css'
import { useEffect } from "react";
import React from 'react'



export default function Subtitle(props) {

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
        <div data-subtitle className={`${styles.containerSubtitle} ${styles.animaSubtitle}`}>
            <p>{props.subtitle}</p>
        </div>
    )
}