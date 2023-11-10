import { useState } from "react";
import { plantList } from "../datas/PlantList.js";
import "../styles/ShoppingList.css";
import PlantItem from "./PlantItem.js";
import Categories from "./Categories.js";

function ShoppingList({ cart, updateCart }) {

  // const categories = plantList.reduce(
  //   (acc, plant) =>
  //     acc.includes(plant.category) ? acc : acc.concat(plant.category),
  //   []
  // );



  const [activeCategory, setActiveCategory] = useState("");
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );




  function addToCart(id, name, price) {
    const currentPlantSaved = cart.find((plant) => plant.name === name);
    
    if (currentPlantSaved) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      );
      updateCart([
        ...cartFilteredCurrentPlant,
        { id, name, price, amount: currentPlantSaved.amount + 1 },

      ]);
    } else {
      updateCart([...cart, { id, name, price, amount: 1 },

      ]);
    }
  }

  return (
    <div className="lmj-shopping-list">

   
      {/* <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul> */}
{/* la derniere affichage de categorie */}
      <Categories categories= {categories} setActiveCategory= {setActiveCategory}
        activeCategory= {activeCategory}
      />
    <ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price, category }) =>
					!activeCategory || activeCategory === category ? (
						<div key={id}>
							<PlantItem
								cover={cover}
								name={name}
								water={water}
								light={light}
								price={price}
							/>
							<button onClick={() => addToCart(id,name, price)}>Ajouter</button>
						</div>
					) : null
				)}
			</ul>
    </div>
  );
}

export default ShoppingList;
