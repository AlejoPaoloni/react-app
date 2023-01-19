import { useContext } from "react";
import { dataContext } from "../context/DataContext.js";

import CartElements from "./CartElements";
import CartTotal from "./CartTotal";

import "./CartWidget.css";

const CartWidget = () => {
    const { cart } = useContext(dataContext);

  return cart.length > 0 ? (
  <>
    <CartElements />
    <CartTotal/>
  </>
  ): (
    <h2 className="cart-msj">Su carrito está vacío.</h2>
  );
}

export default CartWidget;