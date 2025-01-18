import { getProductos, getProductsByCategory } from "../../data";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

import { getDocs, collection, query, where } from "firebase/firestore";
import {db} from '../../config/firebase'

const ItemListContainer = ({ saludo }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const { categoryId } = useParams();

  /*  useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProductos;

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response);
            })
            .catch(error => {
                console.error(error, error);
            });
    }, [categoryId]);*/

    useEffect(() =>{
        setLoading(true)

        const collectionRef = categoryId ? query(collection(db,'products'), where('category', '==', categoryId)) : collection(db,'products')

        getDocs(collectionRef).then(respose => {
            const productsAdapted = respose.docs.map(doc => {
                const data = doc.data()
                return {id: doc.id, ...data}
            })
            setProducts(productsAdapted)
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() =>{
            setLoading(false)
        })
    })

    return (
        <div>
            <h1 className="title is-3">{saludo}</h1>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;
