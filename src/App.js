import Logo from "./assets/logo.png";
import Cart from "./components/Cart.js";
import ShoppingList from "./components/ShoppingList.js";
import Banner from "./components/Banner.js";
import Footer from "./components/Footer.js";
import "./styles/Layout.css";

function App() {
  return (
    <div>
      <Banner>
        <img src={Logo} alt="La maison jungle" className="lmj-logo" />
        <h1 className="lmj-title">La maison jungle</h1>
      </Banner>
      <div className="lmj-layout-inner">
        <Cart />
        <ShoppingList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
