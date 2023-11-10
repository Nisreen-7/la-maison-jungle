import Logo from "./assets/logo.png";
import Cart from "./components/Cart.js";
import ShoppingList from "./components/ShoppingList.js";
import Banner from "./components/Banner.js";
import Footer from "./components/Footer.js";
import "./styles/Layout.css";
import { useEffect, useState } from "react";

function App() {
  // const [cart, updateCart] = useState([]);

  const savedCart = localStorage.getItem("cart");
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <Banner>
        <img src={Logo} alt="La maison jungle" className="lmj-logo" />
        <h1 className="lmj-title">La maison jungle</h1>
      </Banner>
      <div className="lmj-layout-inner">
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
