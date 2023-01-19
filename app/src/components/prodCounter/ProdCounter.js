import { useContext } from "react";
import { dataContext } from "../context/DataContext.js";

import "./ProdCounter.css"

const ProdCounter = () => {
    const { cart } = useContext(dataContext);

    const totalProducts = cart.reduce((acc, el) => acc + el.quanty, 0);
  return <span className="cart-counter">{totalProducts}</span>
}

export default ProdCounter;