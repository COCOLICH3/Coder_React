import "bulma/css/bulma.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
    return (
    <div>
        <NavBar/>
        <ItemListContainer saludo="Bienvenido a la tienda gamer"/>
    </div>
    )
}

export default App;