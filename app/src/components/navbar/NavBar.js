import { NavLink } from "react-router-dom";

import { useContext } from "react";
import { dataContext } from "../context/DataContext.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
// import { faList } from "@fortawesome/free-solid-svg-icons"
// import { faXmark } from "@fortawesome/free-solid-svg-icons"

import ProdCounter from "../prodCounter/ProdCounter";

import "./NavBar.css";

const NavBar = () => {
  const { cart } = useContext(dataContext);
  
// const nav = document.querySelector("#nav");
// const open = document.querySelector("#open");
// const close = document.querySelector("#close");

// open.addEventListener("click", () => {
//   nav.classList.add("visible");
// });

// close.addEventListener("click", () => {
//   nav.classList.remove("visible");
// });

  return (
    <div className='nav-container'>
      {/* {<button className="open-menu" id="open"><FontAwesomeIcon icon={faList} /></button>} */}
      <nav className='navbar' id="nav">
        <h1 className='navbar-logo'>Mauri Sport</h1>
        <div className="navbar-pages">
        {/* {<button className="close-menu" id="close"><FontAwesomeIcon icon={faXmark} /></button>} */}
          <ul className="nav-list">
            <li>
            <NavLink className="nav-link" to="/home">Home</NavLink>
            </li>
            <li>
            <NavLink className="nav-link" to="/productos">Productos</NavLink>
            </li>
            <li>
            <NavLink className="nav-link" to="/nosotros">Nosotros</NavLink>
            </li>
            <NavLink className="nav-link carrito" to={"/cart"}><FontAwesomeIcon icon={faCartShopping} />
            {cart.length > 0 ? <ProdCounter /> : null}
            </NavLink>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
