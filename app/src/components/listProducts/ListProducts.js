import { useContext } from "react";
import { dataContext } from "../context/DataContext.js";

import "./ListProducts.css";

const ListProducts = () => {

    const { data, addProduct } = useContext(dataContext);

    return data.map((product)=> {
    return (
            <div className="card-products" key={product.id}>
                <img src={product.img} alt="img-product-card" />
                <h3 className="brand">{product.name} - {product.brand}</h3>
                <h4 className="price">ARS ${product.price}</h4>
                <button className="buy" onClick={()=> addProduct (product)}>Agregar al carrito</button>
            </div>
        );
    });
};

export default ListProducts;
