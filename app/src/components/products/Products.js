import ButtonCategories from "../buttonCategories/ButtonCategories.js";
import ListProducts from "../listProducts/ListProducts.js";

import "./Products.css";


const Products = (props) => {

    return (
      <>
      <title>Mauri Sport | Productos</title>
      <h2 className="subtitle">{props.greeting}</h2>
        <ButtonCategories />
        <section className="card-products-container">
          <ListProducts />
        </section>
      </>
    );
};

export default Products;