import { useEffect, useState } from "react"
import { getProductsById } from "../../data"
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {

    const[product, setProduct] = useState(null)

    const {itemId} = useParams()

    useEffect(() => {
        getProductsById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error =>{
                console.error(error)
            })
    }, [itemId])


    return(
        <div>
            <ItemDetail {...product}/>
        </div>
    )

}

export default ItemDetailContainer;