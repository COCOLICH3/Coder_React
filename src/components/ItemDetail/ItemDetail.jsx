import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id,title,image,category,description,price,stock}) => {
    console.log('ItemDetail props:', { id, title, image, category, description, price, stock });
    return(
        <article>
            <header>
                <h2>
                    {title}
                </h2>
            </header>
            <picture>
                <img src={image} alt={title}/>
            </picture>
            <section>
                <p>
                    Precio: ${price}
                </p>
                <p>
                    Stock disponible: {stock}
                </p>
            </section>
            <footer>
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada', quantity)}/>
            </footer>
        </article>
    )
}

export default ItemDetail;