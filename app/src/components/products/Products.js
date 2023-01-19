import { useContext } from "react";
import { dataContext } from "../context/DataContext.js";

import "./Products.css";

const Products = () => {
  const { data, addProduct } = useContext(dataContext);

  return data.map((product)=> {
    return (
      <div className="card" key={product.id}>
        <img src={product.img} alt="img-product-card" />
        <h3>{product.name} - {product.brand}</h3>
        <br/>
        <h4>ARS ${product.price}</h4>
        <button className="buy" onClick={()=> addProduct (product)}>Comprar</button>
      </div>
    );
  });
};

export default Products;