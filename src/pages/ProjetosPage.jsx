import React from 'react'

import stylesSection from '../styles/Section.module.css'
import styles from '../styles/ProjetosPage.module.css'
import stylesBody from '../styles/Body.module.css'
import img1 from "../images/projetosData/itemIcons/javascriptIcon.png"
import img2 from "../images/projetosData/itemIcons/htmlIcon.png"
import img3 from "../images/projetosData/itemIcons/cssIcon.png"
// import img4 from "../images/projetosData/itemIcons/nextIcon.png"
import img5 from "../images/projetosData/itemIcons/reactIcon.png"
// import img6 from "../images/projetosData/itemIcons/sassIcon.png"
// import img7 from "../images/projetosData/itemIcons/typescriptIcon.png"
import banner1 from "../images/banners/calculadoraBanner.png"
import iconSpotify from "../images/banners/spotify_icon.png"

// import imgCalculadora from "../images/projetosData/imageProjeto/calculadoraLogo.png"
import imgSpotify from "../images/banners/spotify_banner.png" 


import ButtonNav from '../components/projetos-page/button-nav'


export default function ProjetosPage() {

    const itemsProjetos = [
        {
            title: 'Calculadora', 
            subtitle: 'webapp', 
            href: 'https://gtcalculadora.netlify.app/', 
            image: "https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/6300269b332d280008391077/screenshot_2022-08-20-00-11-31-0000.png", 
            linguagens: [img1, img2, img3] ,

            responsivo: ['mobile', 'desketop', 'tablet'],
            descrição: "Web Aplicativo Calculadora, ...",
            duracaoDesenvolvimento: '3 Semanas',
            palhetasCores: 'preto' ,


        },
        {
            title: 'Aceita um café?', 
            subtitle: 'Homepage', 
            href: 'https://coffee-convite.netlify.app/', 
            image: "https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/6475f9bc2e5f030008f38482/screenshot_2023-05-30-13-27-39-0000.png", 
            linguagens: [img2, img3] ,

            responsivo: ['mobile', 'desketop', 'tablet'],
            descrição: "Primeira Homepage desenvolvida por mim, com intuito de trabalhar visando colocar em pratica o que foi estudado sobre HTML e CSS, com desafio final de convidar o usuário para tomar um café",
            duracaoDesenvolvimento: '2 Semanas',
            palhetasCores: 'preto' ,


        },

        {
            title: 'Spotify 10Top', 
            subtitle: 'webapp', 
            href: 'https://spottify-api.netlify.app/', 
            image: imgSpotify,
            linguagens: [img2, img3] ,

            responsivo: ['mobile', 'desketop', 'tablet'],
            descrição: "Primeira Homepage desenvolvida por mim, com intuito de trabalhar visando colocar em pratica o que foi estudado sobre HTML e CSS, com desafio final de convidar o usuário para tomar um café",
            duracaoDesenvolvimento: '2 Semanas',
            palhetasCores: 'preto' ,


        },
        

    ]

    function renderizarItems() {
        console.log()
        return itemsProjetos.map((data) => {
            return (
                <a href={data.href} target='_blank' rel="noopener noreferrer" className={styles.containerItem}>
                    <div className={styles.contentItemImage} >
                        <img src={data.image} alt='imagem 1'/> 
                    </div>
                    <div className={styles.contentItemDescription}>
                        <div className={styles.contentItemDescriptionOne}>
                            <h3>{data.title}</h3>
                            <h6>{data.subtitle}</h6>
                        </div>
                        <div className={styles.contentItemDescriptionTwo}>
                            <img src={data.linguagens[2]} alt='imagem 1' />
                            <img src={data.linguagens[1]} alt='imagem 2' />
                            <img src={data.linguagens[0]} alt='imagem 3' />

                        </div>
                    </div>
                </a>
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
                        <div className={styles.projetosBannerFirst}>
                            <div className={styles.bannerTextOne}>
                            <div className={styles.title}>
                                    <h1>O perfeito para você</h1>
                                </div>
                                <div className={styles.subtitle}>
                                    <p>Projetos desenvolvidos para qualquer lógica ou área, objetivo <b>resolver seu problema.</b></p>
                                </div>
                            </div>
                            <div className={styles.bannerImageOne}>
                                <img src={iconSpotify} alt="" />
                            </div>
                        </div>
                        <div className={styles.projetosBannerSecond}>
                            <div className={styles.bannerTextTwo}>
                                
                                <div className={styles.title}>
                                    <h1>Aplicativos Responsivos</h1>
                                </div>
                                <div className={styles.subtitle}>
                                    <p>Projetos feitos em diversas tecnologias totalmente responsivo</p>
                                </div>
                            </div>
                            <div className={styles.bannerImageTwo}>
                                <img src={banner1} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.projetosContainerItem}>
                        <div className={styles.projetosNavItem}>
                            <ul>
                                <ButtonNav text="HTML" img={img2}/>
                                <ButtonNav text="CSS" img={img3}/>
                                <ButtonNav text="JavaScript" img={img1}/>
                                <ButtonNav text="React.js" img={img5}/>
                            </ul>
                        </div>
                        <div className={styles.projetosCatalogoItem}>
                            <div className={styles.projetosOrdenar}>
                                 
                            </div>
                            {renderizarItems()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}