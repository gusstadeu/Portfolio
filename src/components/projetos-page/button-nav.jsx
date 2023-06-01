import React from 'react'
import styles from "../../styles/projetosPage/buttonNav.module.css"




export default function ButtonNav(props) {
    return (

        <div className={styles.ButtonNav}>
            <div>
                <img src={props.img} alt="" />
            </div>
            <div>{props.text}</div>
            
        </div>
    )
}

