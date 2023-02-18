import { BrowserRouter , Routes , Route } from "react-router-dom";

import AboutUs from "./components/aboutUs/AboutUs.js";
import CartWidget from "./components/cartWidget/CartWidget.js"
import DataProvider from "./components/context/DataContext.js";
import Products from "./components/products/Products.js";
import NavBar from "./components/navbar/NavBar.js";
import ItemListContainer from "./components/itemListContainer/ItemListContainer.js";
import Footer from "./components/footer/Footer.js";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
      <NavBar />
        <Routes>
            <Route path="/home" element={<ItemListContainer />} />
            <Route path="/productos" element={<Products greeting="Productos" />} />
            <Route path="/nosotros" element={<AboutUs />} />
            <Route path="/cart" element={<CartWidget />} />
            <Route path="*" element={<ItemListContainer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
