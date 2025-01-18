import { useEffect, useState } from "react"
import { getProductsById } from "../../data"
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom"

import { getDoc, doc } from "firebase/firestore"
import {db} from '../../config/firebase'


const ItemDetailContainer = () => {

    const[product, setProduct] = useState(null)
    const [loading, setLoading] = useState(false);

    const {itemId} = useParams()

    /*useEffect(() => {
        getProductsById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error =>{
                console.error(error)
            })
    }, [itemId])*/

    useEffect(() =>{
        setLoading(true)
        
        const docRef = doc(db,'products', itemId)

        getDoc(docRef).then(response => {
            const data = response.data()
            const productAdapted = {id: response.id, ...data}
            setProduct(productAdapted)
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() =>{
            setLoading(false)
        })

    }, [itemId])


    return(
        <div>
            <ItemDetail {...product}/>
        </div>
    )

}

export default ItemDetailContainer;