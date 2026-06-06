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
    (state) => state.cart.items
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

  const handleIncrease = (id, quantity) => {
    dispatch(
      updateQuantity({
        id,
        quantity: quantity + 1
      })
    );
  };

  const handleDecrease = (id, quantity) => {
    if (quantity > 1) {
      dispatch(
        updateQuantity({
          id,
          quantity: quantity - 1
        })
      );
    }
  };

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>

      <h2>Total Plants: {totalItems}</h2>

      <h2>
        Total Cost: $
        {totalCost.toFixed(2)}
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
              width="150"
            />

            <h3>{item.name}</h3>

            <p>
              Unit Price:
              ${item.price}
            </p>

            <p>
              Quantity:
              {item.quantity}
            </p>

            <p>
              Total Cost:
              $
              {(
                item.price *
                item.quantity
              ).toFixed(2)}
            </p>

            <button
              onClick={() =>
                handleIncrease(
                  item.id,
                  item.quantity
                )
              }
            >
              +
            </button>

            <button
              onClick={() =>
                handleDecrease(
                  item.id,
                  item.quantity
                )
              }
            >
              -
            </button>

            <button
              onClick={() =>
                handleDelete(item.id)
              }
            >
              Delete
            </button>

            <hr />
          </div>
        ))
      )}

      <Link to="/products">
        <button>
          Continue Shopping
        </button>
      </Link>

      <button
        onClick={() =>
          alert("Coming Soon")
        }
      >
        Checkout
      </button>
    </div>
  );
}

export default CartItem;
