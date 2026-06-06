
import React, { useState } from "react";
import AboutUs from "./AboutUs";
import ProductList from "./ProductList";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <div>
      {!showProductList ? (
        <div className="landing-page">
          <h1>Paradise Nursery</h1>

          <p>
            Welcome to Paradise Nursery, your trusted destination for
            beautiful houseplants. We provide a wide variety of indoor
            plants that help create healthier and greener living spaces.
          </p>

          <button
            onClick={() => setShowProductList(true)}
          >
            Get Started
          </button>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;
```
