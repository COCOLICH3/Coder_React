import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar-menu">
      <Link to="/">
        <h3>Ecommerce</h3>
      </Link>
      <div className="navbar-start">
        <NavLink
          to={`/category/men's clothing`}
          className={({ isActive }) => (isActive ? 'ActiveOption' : 'Option')}
        >
          Ropa de Hombres
        </NavLink>
        <NavLink
          to={`/category/jewelery`}
          className={({ isActive }) => (isActive ? 'ActiveOption' : 'Option')}
        >
          Joyería
        </NavLink>
        <NavLink
          to={`/category/electronics`}
          className={({ isActive }) => (isActive ? 'ActiveOption' : 'Option')}
        >
          Electrónica
        </NavLink>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
