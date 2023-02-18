import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { dataContext } from "../context/DataContext.js";

import CartElements from "./CartElements";
import CartTotal from "./CartTotal";

import "./CartWidget.css";

const CartWidget = () => {
    const { cart } = useContext(dataContext);

  return cart.length > 0 ? (
  <>
    <NavLink className="add-products" to={"/productos"}>Agregar más productos</NavLink>
    <CartElements />
    <CartTotal/>
  </>
  ): (
    <>
    <title>Mauri Sport | Cart</title>
    <NavLink className="add-products" to={"/productos"}>Agregar productos</NavLink>
    <h2 className="cart-msj">Su carrito está vacío.</h2>
    </>
  );
}

export default CartWidget;