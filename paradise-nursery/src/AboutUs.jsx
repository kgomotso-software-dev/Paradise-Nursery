
import React from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="about-us-container">
      <h1>e-plantShopping</h1>

      <p>
        Welcome toe-plantShopping  Paradise Nursery, your trusted destination for beautiful
        and healthy houseplants. We are passionate about bringing nature
        indoors and helping customers create greener, healthier living
        spaces through a wide variety of indoor plants.
      </p>

      <p>
        Our mission is to provide high-quality houseplants that enhance
        homes and offices while improving air quality and overall
        well-being. We carefully select and nurture our plants to ensure
        customers receive healthy and long-lasting products.
      </p>

      <p>
        e-plantShopping offers a diverse collection of plants, including
        air-purifying plants, easy-care plants, and decorative indoor
        plants suitable for both beginners and experienced plant lovers.
      </p>

      <Link to="/plants">
        <button className="get-started-btn">
          Get Started
        </button>
      </Link>
    </div>
  );
}

export default AboutUs;
```
