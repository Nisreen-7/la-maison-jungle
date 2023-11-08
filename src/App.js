import Logo from "./assets/logo.png";
// import Cart from './Cart'
import ShoppingList from "./components/ShoppingList.js";
import Banner from "./components/Banner.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div>
      <Banner>
        <img src={Logo} alt="La maison jungle" className="lmj-logo" />
        <h1 className="lmj-title">La maison jungle</h1>
      </Banner>
      {/* <Cart /> */}
      <ShoppingList />
      <Footer />
    </div>
  );
}

export default App;
