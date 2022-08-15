import styles from '../../styles/Section.module.css'
import stylesTwo from '../../styles/Resume.module.css'
import { useEffect } from "react";
import React from 'react'



export default function Title(props) {

    useEffect(() => {
        const target = document.querySelectorAll("[data-anima]")
        
        function animaScroll() {
            const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
            target.forEach(function(element) {  
                if (windowTop > element.offsetTop) {
                    element.classList.add("Resume_resumeAnimate__zZSaM")
                } else {
                    element.classList.remove("Resume_resumeAnimate__zZSaM")

                }
            })
        }         
        window.addEventListener('scroll', function() { 
            animaScroll()   
        })  
        
    }, [])

    return (
        <div data-anima="bottom" className={`${styles.containerTitle} ${stylesTwo.resumeAnimate}`}>
            <p><span>{"<"}</span>{props.title}<span>{" />"}</span></p>
        </div>
    )
}