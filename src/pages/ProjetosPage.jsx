import React from 'react'

import stylesSection from '../styles/Section.module.css'
import styles from '../styles/ProjetosPage.module.css'
import stylesBody from '../styles/Body.module.css'
import img1 from "../images/itemIcons/javascriptIcon.png"
import img2 from "../images/itemIcons/htmlIcon.png"
import img3 from "../images/itemIcons/cssIcon.png"
import img4 from "../images/itemIcons/nextIcon.png"
import img5 from "../images/itemIcons/reactIcon.png"
import img6 from "../images/itemIcons/sassIcon.png"
import img7 from "../images/itemIcons/typescriptIcon.png"


export default function ProjetosPage() {

    const itemsProjetos = [
        {title: 'Calculadora', subtitle: 'webapp' , image: 'Esta é a Calculadora', linguagens: [img1, img2, img3] },
        {title: 'Starbucks', subtitle: 'ecomerce' , image: 'Esta é a Starbucks', linguagens: [img1, img2, img3] },
        {title: 'Quiz', subtitle: 'Jogo' , image: 'Esta é o QUiz', linguagens: [img1, img2, img3] },
        {title: 'Quiz', subtitle: 'Jogo' , image: 'Esta é o QUiz', linguagens: [img1, img2, img3] },
    ]

    function renderizarItems() {
        return itemsProjetos.map((data) => {
            return (
                <div className={styles.containerItem}>
                    <div className={styles.contentItemImage}>
                        <p>{data.image}</p>
                    </div>
                    <div className={styles.contentItemDescription}>
                        <div className={styles.contentItemDescriptionOne}>
                            <h3>{data.title}</h3>
                            <h6>{data.subtitle}</h6>
                        </div>
                        <div className={styles.contentItemDescriptionTwo}>
                            <img src={data.linguagens[0]} />
                            <img src={data.linguagens[1]} />
                            <img src={data.linguagens[2]} />
                            <img src={data.linguagens[3]} />

                        </div>
                    </div>
                </div>
            )
        })

    }

    return (
        <div className={stylesBody.containerBody}>

            <div className={`${styles.projetosContainer} ${stylesSection.containerSection}`}>
                <div className={styles.projetosContent} >
                    <div className={styles.projetosHeader} >
                        <h1>Projetos</h1>
                    </div>
                    <div className={styles.projetosBanner}>
                        <div className={styles.projetosBannerFirst}></div>
                        <div className={styles.projetosBannerSecond}></div>
                    </div>
                    <div className={styles.projetosContainerItem}>
                        <div className={styles.projetosNavItem}>

                        </div>
                        <div className={styles.projetosCatalogoItem}>
                            <div className={styles.projetosOrdenar}>
                                filtro 
                            </div>
                            {renderizarItems()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}