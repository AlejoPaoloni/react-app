import { useContext } from "react";
import { dataContext } from "../context/DataContext.js";

const CartTotal = () => {
    const { cart } = useContext(dataContext);

    const total = cart.reduce((acc,el)=> acc + el.price * el.quanty, 0);
  return (
    <div className="cart-total">
        <h3>Total a pagar: ARS ${total}</h3>
    </div>
  );
};

export default CartTotal;