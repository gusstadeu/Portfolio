import styles from '../../styles/TitleLinguagens.module.css'
import React from 'react'



export default function TitleLinguagens(props) {

    return (
        <div >
            <p className={styles.titleRed}>{props.titleRed}</p>
            <p className={styles.titleWhite}> {props.titleWhite}</p>
        </div>
    )
}