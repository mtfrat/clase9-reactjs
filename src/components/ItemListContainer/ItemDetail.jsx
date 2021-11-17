// Editar este
import { Card } from "react-bootstrap"
import { useState} from "react"
import { Link } from "react-router-dom"

const ItemCount = ({stock, initial}) => {

    // Inicializo cuenta
    const [count, setCount] = useState(initial)

    const suma = () =>{
        count < stock ? setCount(count+1) : setCount(count)
    }

    const resta = () =>{
        count > 1 ? setCount(count-1) : setCount(count)
    }

    // Verifico con un booleano si es suma o resta
    const handleBotones = (verificador) => {
        verificador ? suma() : resta()
    }

    return (
        <div>
            <div style={{display:"flex",justifyContent:"space-around"}}>
                <button className="btn btn-dark" variant="primary" onClick={()=>handleBotones(false)}>
                    -
                </button>
                <p>{count}</p>
                <button className="btn btn-dark" variant="primary" onClick={()=>handleBotones(true)}>
                    +
                </button>
            </div>
            <Link to='/carrito'>
                <button className="btn btn-dark" variant="primary">
                    Agregar al carrito
                </button>
            </Link>
        </div>
    )
}

//Muestro el item
const ItemDetail = ({item}) => {

    let stock = 10
    let inicial = 1

    console.log(item)

    return (
        <>
        {item !== undefined &&
            item.length > 0 &&
                <Card key={item[0].id} style={{
                    width: '30rem',
                    display:'block',
                    marginTop:'100px',
                    marginRight:'auto',
                    marginBottom:'0px',
                    marginLeft:'auto'}}>
                    <Card.Img variant="top" src={item[0].imagen} />
                    <Card.Body>
                        <Card.Title>{item[0].marca} {item[0].modelo}</Card.Title>
                        <Card.Text>
                        {item[0].año}
                        </Card.Text>
                        <Card.Text>
                        {item[0].precio}
                        </Card.Text>
                        <ItemCount stock = {stock} initial = {inicial}/>
                    </Card.Body>
                </Card>
            
        }
        </>
    )
}

export default ItemDetail