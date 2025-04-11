import { Routes, Route } from "react-router-dom";

import "./App.css";

//Componenets
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Store } from "./pages/Store";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./Context/ShoppingCartContext";
import ItemPage from "./pages/ItemPage";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Navbar />
        <div className=" container mx-auto mb-4">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
            <Route path="/items/:id" element={<ItemPage />} />
          </Routes>
        </div>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
