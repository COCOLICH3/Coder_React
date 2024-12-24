import { useState } from "react"

const ItemCount = ({stock, initial, onAdd}) => {

    const [cantidad, setCantidad] = useState(initial)

    const increment = () => {
        if(cantidad < stock){
            setCantidad(cantidad+1)
        }
    }

    const decrement = () => {
        if(cantidad > initial){
            setCantidad(cantidad-1)
        }
    }

    return(
        <div className="Counter">
            <div className="Controls">
                <button className="Button" onClick={decrement}>-</button>
                <h4 className="Number">{cantidad}</h4>
                <button className="Button" onClick={increment}>+</button>
            </div>
            <div>
                <button className="Button" onClick={() => onAdd(cantidad)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )


}

export default ItemCount;