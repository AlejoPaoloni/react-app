import { useContext } from "react";
import { dataContext } from "../context/DataContext.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import Hooks from "../hooks/Hooks.js";

const CartElements = () => {
    const { cart, setCart, setQuantity } = useContext(dataContext)

    const deleteProduct = (id) => {
        const foundId = cart.find((element) => element.id === id);

        const newCart = cart.filter((element) => {
            setQuantity((foundId.quanty = 1))
            return element !== foundId;
        });
        setCart(newCart);
    };
    return cart.map((product)=>{
        return (
            <div className="cart-content" key={product.id}>
                <img src={product.img} alt="product-card"/>
                <h3 className="name-brand">{product.name} - {product.brand}</h3>
                <Hooks product={product}/>
                <h4 className="price-cart">ARS ${product.price * product.quanty}</h4>
                <button className="cart-delete-button" onClick={() => deleteProduct(product.id)}><FontAwesomeIcon icon={faXmark} /></button>
            </div>
        )
    })
}

export default CartElements;