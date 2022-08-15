import React from 'react'


import styles from '../../styles/Formacao.module.css'


export default function Timeline(props) {

    const data = props.data
    function renderizar() {

        return data.map((dado) => {
            return(
                <div className={styles.containerBoxes}>
                <div className={styles.containerlinhagem}>
                    <div className={styles.linhagem}>
                        <div className={styles.contentCircle}>
                            <div className={styles.circle}></div>
                        </div>
                        <div className={styles.line}></div>
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.title}><span>{dado.titleRed}</span><span>{dado.titleWhite}</span></div>
                    <div className={styles.description}>{dado.description}</div>
                </div>
            </div>
            )
        })
    }
        
    return (
        <>
            {renderizar()}
        </>
    )
}