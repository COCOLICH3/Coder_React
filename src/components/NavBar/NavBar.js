import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar-menu">
      <div className="navbar-start">
        <a className="navbar-item">Placas de video</a>
        <a className="navbar-item">Memoria Ram</a>
        <a className="navbar-item">Monitores</a>
      </div>
      <div className="navbar-end">
      <div className="navbar-item">
        <CartWidget/>
      </div>
      </div>
    </nav>
  );
};

export default NavBar;
