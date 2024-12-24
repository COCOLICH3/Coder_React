import { getProductos, getProductsByCategory } from "../../data";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ saludo }) => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProductos;

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response);
            })
            .catch(error => {
                console.error(error, error);
            });
    }, [categoryId]);

    return (
        <div>
            <h1 className="title is-3">{saludo}</h1>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;
