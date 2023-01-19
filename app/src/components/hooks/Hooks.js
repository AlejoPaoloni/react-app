import { useContext } from "react";
import { dataContext } from "../context/DataContext.js";

import "./Hooks.css"

const Hooks = ({ product }) => {
  const { cart, setCart, quantity, setQuantity, addProduct } = useContext(dataContext);

  const decrese = () => {
    const newProductQuanty = [product];
    newProductQuanty.map((element) => {
      element.quanty !== 1 && setQuantity((element.quanty -= 1));
      return setCart(cart, { ...product, quanty: quantity });
    });
  };
  return (
    <>
      <button className="button-counter" onClick={decrese}>-</button>
      <span className="counter-value">{product.quanty}</span>
      <button className="button-counter" onClick={()=> addProduct (product)}>+</button>
    </>
  )
}

export default Hooks;