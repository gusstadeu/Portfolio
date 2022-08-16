import BoxData from "../components/BoxData"
import Form from "../components/Form";
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign } from 'react-icons/fa';
import { useState , useEffect } from "react";



export default function Section() {


    const [entrada, setEntrada] = useState(0)
    const [saida, setSaida] = useState(0)
    const [total, setTotal] = useState(0)

    const [data, setData] = useState([])


    useEffect(() => {

        async function calcul() {

            const response = await fetch("http://localhost:5500/financas")
            const data = await response.json()
            setData(data)

            let numbersEntrada = []
            numbersEntrada.push(data.map(dados => {    
                if(dados.tipo === "Entrada") {
                    return Number(dados.price)
                    
                } else if (dados.tipo === "Saida") {
                    return Number(0)
                } else {
                    return Number(0)
                }
            }))  
            const reducerOne = (caixa, novo) => caixa + novo
            let totalEntrada = numbersEntrada[0].reduce(reducerOne)
    
            let numbersSaida = []
            numbersSaida.push(data.map(dados => {
                if (dados.tipo === "Saida") {
                    return Number(dados.price)
                } else if (dados.tipo === "Entrada") {
                    return Number(0)
                } else {
                    return Number(0)
                }
            }))
            const reducerTwo = (caixa, novo) => caixa + novo
            let totalSaida = numbersSaida[0].reduce(reducerTwo)
    
            setEntrada(entrada + totalEntrada)
            setSaida(saida + totalSaida)    
            setTotal(totalEntrada - totalSaida)     
        }
        calcul()
    }, [])



    return (
        <>
            <section>
                <BoxData title="Entrada" Icon={FaRegArrowAltCircleUp} color="#25db4a" value={entrada}/>
                <BoxData title="Saida" Icon={FaRegArrowAltCircleDown} color="#ed0e0e" value={saida}/>
                <BoxData title="Total" Icon={FaDollarSign} color="#0e6bed" value={total}/>
            </section>
                <Form />
        </>
    )
}  