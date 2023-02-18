import { useContext } from "react";
import { dataContext } from "../context/DataContext.js";

const CartTotal = () => {
    const { cart } = useContext(dataContext);

    const total = cart.reduce((acc,el)=> acc + el.price * el.quanty, 0);
  return (
    <>
    <title>Mauri Sport | Cart</title>
    <div className="cart-total">
        <h3 className="cart-total-item">Total a pagar: ARS ${total}</h3>
        <button className="cart-total-buy">Comprar</button>
    </div>
    </>
  );
};

export default CartTotal;