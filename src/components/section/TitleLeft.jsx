import styles from '../../styles/TitleLeft.module.css'
import React from 'react'



export default function TitleLeft (props) {

    const firstRed = props.firstRed
    const secondRed = props.secondRed
    const size = props.size

    let first = "#fff"
    let second = "#fff"

    if(firstRed === true) {
        first = '#E21616'
        second = "#fff"
    } else if(secondRed === true) {
        first = "#fff"
        second = "#E21616"
    }


    return (
        <div className={styles.containerTitleLeft} style={{height:`calc(${size} - 40px)`}}>
            <div className={styles.contentTitleLeft}>
                <h1 style={{color:`${first}`}}>{props.titleLeftOne}</h1>
                <h1 style={{color:`${second}`}}>{props.titleLeftTwo}</h1>
            </div>
        </div>
    )
}