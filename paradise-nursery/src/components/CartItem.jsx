
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  updateQuantity
} from "../redux/CartSlice";
import { Link } from "react-router-dom";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalCost = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const increaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1
      })
    );
  };

  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1
        })
      );
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div>
          <Link to="/">Home</Link>{" "}
          <Link to="/plants">Plants</Link>{" "}
          <Link to="/cart">
            Cart ({totalItems})
          </Link>
        </div>
      </nav>

      <div className="cart-container">
        <h1>Shopping Cart</h1>

        <h2>Total Plants: {totalItems}</h2>

        <h2>
          Total Cost: ${totalCost.toFixed(2)}
        </h2>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="cart-item"
            >
              <img
                src={item.image}
                alt={item.name}
                width="120"
                height="120"
              />

              <div>
                <h3>{item.name}</h3>

                <p>
                  Unit Price: $
                  {item.price}
                </p>

                <p>
                  Quantity:
                  {item.quantity}
                </p>

                <p>
                  Item Total: $
                  {(
                    item.price *
                    item.quantity
                  ).toFixed(2)}
                </p>

                <button
                  onClick={() =>
                    increaseQuantity(item)
                  }
                >
                  +
                </button>

                <button
                  onClick={() =>
                    decreaseQuantity(item)
                  }
                >
                  -
                </button>

                <button
                  onClick={() =>
                    dispatch(
                      removeItem(item.id)
                    )
                  }
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}

        <br />

        <Link to="/plants">
          <button>
            Continue Shopping
          </button>
        </Link>

        <button
          onClick={() =>
            alert(
              "Checkout feature coming soon!"
            )
          }
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartItem;
```
