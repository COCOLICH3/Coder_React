import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({id, title, image, price, stock}) => {


    return (

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
                <Link to={`/item/${id}`}>Ver detalles</Link>
            </footer>

        </article>


    )


}

export default Item;