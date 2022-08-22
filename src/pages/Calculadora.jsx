import React from 'react'
import styles from '../styles/calculadora/Calculadora.module.css'

export default function calculadora (){

    let res = document.getElementById('result')

    function tec(num){
        res.innerHTML += num
    }

    function tecLimp(){
        res.innerHTML = ''
    }

    function calcular(){
        var result = document.getElementById('result').innerHTML
        console.log(result)

        if (result == '' || result == undefined) {
            return window.alert('Por favor inserir algo válido')
        } else {
            document.getElementById('result').innerHTML = eval(result)

        }
    }


    return (
        <div className={styles.container} >
            <div className={styles.row}>
                <header>
                    <figure className={styles.textCenter}>
                        <blockquote className={styles.blockquote}>
                        <p>Calculadora</p>
                        </blockquote>
                        <figcaption className={styles.blockquoteFooter}>
                        <cite title="Source Title">Insira abaixo as teclas e descubra o resultado</cite>
                        </figcaption>
                    </figure>
                    <div className={`${styles.contentResult} ${styles.row}`} >
                        <div className={styles.col} id="result">  
                        </div>
                    </div>
                </header>
                <div class="teclado">

                    <div className={styles.tecladoRow}>
                        <div className={styles.containerButton}> <button className={styles.botao} type="button" id="tecla" onclick={tecLimp()}>CE</button></div>
                        <div className={styles.containerButton}> <button className={styles.botao} type="button" id="tecla" onclick={tec('(')}>(</button></div>
                        <div className={styles.containerButton}> <button className={styles.botao} type="button" id="tecla" onclick={tec(')')}>)</button></div>
                        <div className={styles.containerButton}> <button className={`${styles.botao} ${styles.operador}`} type="button" id="tecla" onclick={tec('/')}>/</button></div>
                    </div>
                        
                    <div className={styles.tecladoRow}>
                        <div className={styles.containerButton}> <button className={styles.botao} type="button" id="tecla" onclick={tec('7')}>7</button></div>
                        <div className={styles.containerButton}> <button className={styles.botao} type="button" id="tecla" onclick={tec('8')}>8</button></div>
                        <div className={styles.containerButton}> <button className={styles.botao} type="button" id="tecla" onclick={tec('9')}>9</button></div>
                        <div className={styles.containerButton}> <button className={`${styles.botao} ${styles.operador}`} type="button" id="tecla" onclick={tec(' * ')}>*</button></div>
                    </div>

                    <div className={styles.tecladoRow}>
                        <div className={styles.containerButton}> <button className={styles.botao} type="button" id="tecla" onclick={tec('4')}>4</button></div>
                        <div className={styles.containerButton}> <button className={styles.botao} type="button" id="tecla" onclick={tec('5')}>5</button></div>
                        <div className={styles.containerButton}> <button className={styles.botao} type="button" id="tecla" onclick={tec('6')}>6</button></div>
                        <div className={styles.containerButton}> <button className={`${styles.botao} ${styles.operador}`} type="button" id="teclaMulti" onclick={tec(' - ')}>-</button></div>
                    </div>

                    <div className={styles.tecladoRow}>
                        <div className={styles.containerButton}> <button className={styles.botao} type="button" id="tecla7" onclick={tec('1')}>1</button></div>
                        <div className={styles.containerButton}> <button className={styles.botao} type="button" id="tecla8" onclick={tec('2')}>2</button></div>
                        <div className={styles.containerButton}> <button className={styles.botao} type="button" id="tecla9" onclick={tec('3')}>3</button></div>
                        <div className={styles.containerButton}> <button className={`${styles.botao} ${styles.operador}`} type="button" id="teclaMulti" onclick={tec(' + ')}>+</button></div>
                    </div>

                    <div className={styles.tecladoRow}>
                        <div className={styles.containerButton}> <button className={styles.btn} type="button" id="tecla0" onclick={tec('0')}>0</button></div>
                        <div className={styles.containerButton}> <button className={styles.btn} type="button" id="teclaTriplo0" onclick={tec('000')}>000</button></div>
                        <div className={styles.containerButton}> <button className={styles.btn} type="button" id="teclaVirg" onclick={tec(',')}>,</button></div>
                        <div className={styles.containerButton}> <button className={styles.btn} type="button" id="teclaResult" onclick={calcular()}><p>=</p></button></div>
                    </div>
                </div>

            </div>
        </div>
    )

}