import "../styles/Cart.css";
import { useEffect, useState } from "react";
import Panier from "../assets/panier.png";

function Cart({ cart, updateCart }) {
  const [isOpen, setIsOpen] = useState(true);
  //   const [totalPlants, setTotalPlants] = useState(0);
  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  );
  //supprimer un element dens le panier
  const deleteItem = (id, name) => {
    const reallyDelete = window.confirm(
      `Supprimer : ${name} dans votre panier!?`
    );
    if (reallyDelete) {
      const updatedCart = cart.filter((item) => item.id !== id);

      return updateCart(updatedCart);
    }
  };

  // augmonter le quantité de l'element
  //   const increaseQuantity = (id) => {
  //     const updatedCart = cart.map((item) => {
  //       if (item.id === id) {
  //         return { ...item, amount: item.amount + 1 };
  //       }
  //       return item;
  //     });
  //     updateCart(updatedCart);
  //   };

  const updateQuantity = (id, newQuantity) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, amount: newQuantity };
      }
      return item;
    });
    updateCart(updatedCart);
    // setTotalPlants(totalPlants + 1);
  };

  // useEffect

  useEffect(() => {
    document.title = `LMJ: ${total}€ d'achats`
}, [total])

  return isOpen ? (
    <div className="lmj-cart">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(false)}
      >
        Fermer
      </button>
      {cart.length > 0 ? (
        <div>
          <h2>Panier</h2>
          <ul>
            {cart.map(({ id, name, price, amount }) => (
              <div key={id}>
                <div>
                  <span>
                    {name} : {price} € x{" "}
                    <label>
                      La quantité:{" "}
                      <input
                        id="quantité"
                        type="number"
                        min="1"
                        value={amount}
                        onChange={(e) =>
                          updateQuantity(id, parseInt(e.target.value))
                        }
                      />
                      <button onClick={() => deleteItem(id, name)}>
                        Delete
                      </button>
                      <hr />
                    </label>
                  </span>
                </div>
              </div>
            ))}
          </ul>
          <h3>Total :{total} €</h3>
          <button onClick={() => updateCart([])}>Vider le panier</button>
        </div>
      ) : (
        <div>Votre panier est vide</div>
      )}
    </div>
  ) : (
    <div className="lmj-cart-closed">
      <img src={Panier} alt="cart" />

      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(true)}
      >
        Ouvrir le Panier
      </button>
    </div>
  );
}

export default Cart;
