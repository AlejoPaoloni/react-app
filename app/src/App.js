import Home from "./components/Home.js";
import CartWidget from "./components/cartWidget/CartWidget.js"
import DataProvider from "./components/context/DataContext.js";
import { BrowserRouter , Routes , Route } from "react-router-dom";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/cart" element={<CartWidget />}/>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
