import NavBar from "./navbar/NavBar.js";
import ItemListContainer from "./itemListContainer/ItemListContainer.js";
import Products from "./products/Products.js";
import Footer from "./footer/Footer.js";

const Home = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer 
      title="Bienvenidos a la tienda online de Mauri Sport"
      description="Donde vive el deporte y brilla la moda"
      subtitle="Lo más buscado de la selección 🔥"/>
      <div className="product-card-container">
        <Products />
      </div>
      <Footer />
    </>
  )
}

export default Home;