
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const [addedItems, setAddedItems] = useState([]);

  const plants = [
    {
      id: 1,
      name: "Monstera Deliciosa",
      price: 25,
      category: "Indoor Plants",
      image: "/images/monstera.jpg"
    },
    {
      id: 2,
      name: "Snake Plant",
      price: 20,
      category: "Indoor Plants",
      image: "/images/snakeplant.jpg"
    },
    {
      id: 3,
      name: "Peace Lily",
      price: 18,
      category: "Indoor Plants",
      image: "/images/peacelily.jpg"
    },
    {
      id: 4,
      name: "Spider Plant",
      price: 15,
      category: "Air Purifying Plants",
      image: "/images/spiderplant.jpg"
    },
    {
      id: 5,
      name: "Aloe Vera",
      price: 12,
      category: "Air Purifying Plants",
      image: "/images/aloevera.jpg"
    },
    {
      id: 6,
      name: "Bamboo Palm",
      price: 28,
      category: "Air Purifying Plants",
      image: "/images/bamboopalm.jpg"
    },
    {
      id: 7,
      name: "Golden Pothos",
      price: 16,
      category: "Easy Care Plants",
      image: "/images/pothos.jpg"
    },
    {
      id: 8,
      name: "ZZ Plant",
      price: 22,
      category: "Easy Care Plants",
      image: "/images/zzplant.jpg"
    },
    {
      id: 9,
      name: "Jade Plant",
      price: 19,
      category: "Easy Care Plants",
      image: "/images/jadeplant.jpg"
    }
  ];

  const totalCartItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems([...addedItems, plant.id]);
  };

  const categories = [
    "Indoor Plants",
    "Air Purifying Plants",
    "Easy Care Plants"
  ];

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div>
          <Link to="/">Home</Link>{" "}
          <Link to="/plants">Plants</Link>{" "}
          <Link to="/cart">
            Cart ({totalCartItems})
          </Link>
        </div>
      </nav>

      <h1>Our Plants</h1>

      {categories.map((category) => (
        <div key={category}>
          <h2>{category}</h2>

          <div className="product-grid">
            {plants
              .filter(
                (plant) => plant.category === category
              )
              .map((plant) => (
                <div
                  key={plant.id}
                  className="product-card"
                >
                  <img
                    src={plant.image}
                    alt={plant.name}
                    width="200"
                  />

                  <h3>{plant.name}</h3>

                  <p>${plant.price}</p>

                  <button
                    disabled={addedItems.includes(
                      plant.id
                    )}
                    onClick={() =>
                      handleAddToCart(plant)
                    }
                  >
                    {addedItems.includes(plant.id)
                      ? "Added"
                      : "Add To Cart"}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
```
