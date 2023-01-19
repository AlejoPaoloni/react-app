import { Link } from "react-router-dom";

import { useContext } from "react";
import { dataContext } from "../context/DataContext.js";

import ProdCounter from "../prodCounter/ProdCounter";

import "./NavBar.css";

const NavBar = () => {
  const { cart } = useContext(dataContext);
  return (
    <div className='nav-container'>
        <nav className='navbar'>
          <h1 className='navbar-logo'>Mauri Sport</h1>
          <div className="navbar-pages">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Productos</a>
              </li>
              <li>
                <a href="/">Categorias</a>
              </li>
              <li>
                <a href="/">Nosotros</a>
              </li>
            </ul>
          </div>
          <Link className="carrito" to={"/cart"}>🛒
            {cart.length > 0 ? <ProdCounter /> : null}
          </Link>
        </nav>
    </div>
  )
}

export default NavBar
