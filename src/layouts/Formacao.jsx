import TitleLeft from "../components/section/TitleLeft";
import Title from "../components/section/Title";
import stylesSection from '../styles/Section.module.css'
import styles from '../styles/Formacao.module.css'
import Timeline from "../components/section/Timeline";
import React from 'react'



export default function Formacao() {
    const dataFormacao = [
        {
            titleRed: 'Danki ',
            titleWhite: 'Code',
            description: 'Meu primeiro contato com a programação, iniciando em HTML e CSS'
        },
        {
            titleRed: 'EBAC ',
            titleWhite: '- Desenvolvedor Front-end',
            description: 'Curso completo de desenvolvedor front-end, Aprofundei em HTML, CSS, JavaScript, SASS, BootStrap, Figma, React.js, Git/Github, conceitos de design, Responsividade, atualmente estudando Ajax e SEO'
        },
        {
            titleRed: 'Rocket',
            titleWhite: 'seat',
            description: 'Estudei e adquiri conhecimentos sobre API e JavaScript'
        },{
            titleRed: 'Udemy',
            titleWhite: ' - React.js e Next.js',
            description: 'Aprofundei meus estudos em React.js, atualmente estudando TypeScript e Next.js '
        },{
            titleRed: 'Curso em vídeo',
            titleWhite: ' - Javascript',
            description: 'Canal no youtube onde estudei sobre JavaScript'
        },{
            titleRed: 'Centro Universitário FMU ',
            titleWhite: ' – Análise e desenvolvimento de sistemas',
            description: 'Cursando 2° semestre – previsão de finalizar em 2024'
        },
    ]
    return (
        <>
            <div className={styles.titleSection}>
                <Title title="Formação"/>
            </div>
            <div id="formacao" className={`${stylesSection.containerSection} ${styles.containerSection}`}>
                <TitleLeft titleLeftOne="MINHA" titleLeftTwo="FORMAÇÃO" size='150vh' secondRed />
                <div className={styles.containerTimeline}>
                    <Timeline data={dataFormacao}/>
                </div>
            </div>
        </>
    )
}