import styles from '../../styles/Redes.module.css'
import React from 'react'




export default function Redes(props) {
    return (
        <div className={styles.containerRedes}> 
            <div className={styles.containerIcon}>
                <div className={styles.iconBox}>
                    <props.icon />
                </div>
            </div>
            <div className={styles.ContainerRedesText}>
                <p>{props.text}</p>
            </div>
        </div>
    )
}