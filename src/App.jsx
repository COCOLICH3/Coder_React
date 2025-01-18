import "bulma/css/bulma.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { db } from "./config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";

function App() {

    const itemsCollectionRef = collection( db, "items");
    useEffect(()=>{
        const getItemList = async ()=>{
          const data = await getDocs(itemsCollectionRef);
          const filterData = data.docs.map( (doc)=>({
            ...doc.data(),
            id:doc.id
          }));
          console.log(filterData);
        }
        getItemList();
    }, [])

    return (
        <BrowserRouter>
        <CartProvider>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer saludo="Bienvenido al ecommerce" />} />
                <Route path="/category/:categoryId" element={<ItemListContainer saludo="Categoría seleccionada" />} />
                <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                <Route path='/cart' element={<Cart/>} />
                <Route path='/checkout' element={<Checkout/>} />
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
            </CartProvider>
        </BrowserRouter>
    );
}

export default App;
