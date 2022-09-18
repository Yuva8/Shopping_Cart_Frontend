import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/Homescreen";
import ProductScreen from "./screens/Productscreen";
import CartScreen from "./screens/Cartscreen";
import Navbar from "./components/Navbar";
import Backdrop from "./components/Backdrop";
import Sidedrawer from "./components/Sidedrawer";
function App() {
  const [sidetoggle, setSidetoggle] = useState(false);
  return (
    <BrowserRouter>
      <Navbar click={() => setSidetoggle(true)} />
      <Backdrop show={sidetoggle} click={() => setSidetoggle(false)} />
      <Sidedrawer show={sidetoggle} click={() => setSidetoggle(false)} />
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path="/cart" element={<CartScreen />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
