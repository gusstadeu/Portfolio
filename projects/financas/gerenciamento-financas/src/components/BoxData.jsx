
import numeral from 'numeral'

export default function BoxData(props) {
    
    return (
        <div className="BoxData">
            <h1>{props.title}</h1>
            <div className="icon"><props.Icon color={props.color} /></div>
            <p>R$ {numeral(props.value).format('R$ 0,0.00')}</p>
        </div>
        
    )

}