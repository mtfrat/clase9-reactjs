import { getFetch } from "../../services/getFetch"
import ItemList from "./ItemList"
import { useState, useEffect } from "react"
import { useParams } from "react-router"

const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading,setLoading] = useState(true)
    const {categoria} = useParams()

    useEffect(() =>{
        // Reviso si categoria tiene un valor o si no esta definido
        if(categoria){
            // Llamo a la promesa
            getFetch

            .then(res =>{
                setItems(res.filter(prod => prod.categoria === categoria))
            })
            .catch(err=>console.log(err))
            .finally(()=>setLoading(false))
        }else{
            // Llamo a la promesa
            getFetch

            .then(res =>{
                setItems(res)
            })
            .catch(err=>console.log(err))
            .finally(()=>setLoading(false))
        }
    },[categoria]) //Agrego dependencia que detecte el cambio y dispare el useEffect

    return (
        <div>
            <h1 className="mt-5">{categoria} disponibles</h1>
            <div style={{ display: 'flex',flexDirection:'row'}}>
                <ItemList items = {items}/>
            </div>
        </div>
    )
}

export default ItemListContainer