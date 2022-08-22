import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FaAngleUp } from 'react-icons/fa' ;   
import styles from "../../styles/ButtonTop.module.css"
import { useEffect } from "react"


export default function ButtonTop() {

    useEffect(() => {
        const target = document.querySelectorAll("[data-button]")
        
        function animaScroll() {
            // const windowTop = window.pageYOffset + ((window.innerHeight * 9) / 10);
            target.forEach(function(element) {
                console.log(window.pageYOffset)  
                if (window.pageYOffset > 200) {
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
        <div className={styles.ButtonTop}>
            <AnchorLink data-button  offset={100} href="#main">
                <li><FaAngleUp /></li>
            </AnchorLink>
        </div>
    )
}