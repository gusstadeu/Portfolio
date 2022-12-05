import React from 'react'

import stylesSection from '../styles/Section.module.css'
import styles from '../styles/ProjetosPage.module.css'
import stylesBody from '../styles/Body.module.css'


export default function ProjetosPage() {
    return (
        <div className={stylesBody.containerBody}>

            <div className={`${styles.projetosContainer} ${stylesSection.containerSection}`}>
                <div className={styles.projetosContent} >
                    <div className={styles.projetosHeader} >
                        
                    </div>
                </div>
            </div>
        </div>
    )
}