import { useEffect, useState } from "react"
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown } from 'react-icons/fa';
import numeral from 'numeral'


export default function Form() {

    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [tipo, setTipo] = useState("")

    const [data, setData] = useState([])


    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://localhost:5500/financas")
            const data = await response.json()
            setData(data)
        
        }
        fetchData()
        
    }, [])
    

    async function adicionar() {
        if (description === "" || price === "" || tipo === "" ){
            return window.alert("Preencher todos os dados")
        }
                
        await fetch("http://localhost:5500/financas/add", {
            method: "POST",
            body: JSON.stringify({description, price, tipo}),
            headers: {'Content-Type': 'application/json'}
        })
        
        setDescription("") //Para limpar o campo de texto apos salvar Usuario
        setPrice("")
        setTipo("")
        
        const response =  await fetch("http://localhost:5500/financas")
        const data = await response.json()
        setData(data)
        
        window.location.reload()

    }    
        
        function simbolo(type) {
            if(type === "Entrada") {
                return <FaRegArrowAltCircleUp color="#25db4a" />
                
            } else if (type === "Saida") {
                return <FaRegArrowAltCircleDown color="#ed0e0e" />
            }
        }


        function renderizar() {
            
            return data.map((dados, id) => {
                return (
                    <tr key={id}>
                    <td>{dados.description}</td>
                    <td>R$ {numeral(dados.price).format('R$ 0,0.00')}</td>
                    <td>{simbolo(dados.tipo)}</td>
                </tr>
                )
            })   
    }


    return (
        <>
        <article>
            <div className="container-form">
                <div className="container-title">
                    <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Descrição"/>
                </div>
                <div className="container-valor">
                    <spam>R$</spam><input type="Number" value={price} onChange={e => setPrice(+e.target.value)} placeholder="2999,99"/>
                </div> 
                <div className="container-radios">
                    <input type="radio" value="Entrada" onClick={e => setTipo(e.target.value)} name="entrada-saida"/>
                    <label for="entrada" >Entrada</label>
                    <input type="radio" value="Saida" onClick={e => setTipo(e.target.value)} name="entrada-saida"/>
                    <label for="saida" >Saida</label>
                </div>

                <input type="button" onClick={adicionar} value="ADICIONAR" />

            </div>
        </article>
        <article>

            <table>
                <tr>
                    <th>Descrição</th>
                    <th>preço</th>
                    <th>Tipos</th>
                </tr>
                {renderizar()}
            </table>
        </article>
        </>
    )
}