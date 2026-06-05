import React from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="landing-page">
      <div className="overlay">
        <h1>Paradise Nursery</h1>

        <p>
          Welcome to Paradise Nursery, your trusted destination for beautiful
          and healthy houseplants. We specialize in providing high-quality
          indoor plants that enhance the beauty of homes and offices while
          improving air quality and creating a refreshing environment.
        </p>

        <p>
          Our mission is to bring nature closer to people by offering a wide
          selection of carefully nurtured plants that are easy to maintain and
          suitable for both beginners and experienced plant enthusiasts. At
          Paradise Nursery, we believe every space deserves the calming touch
          of greenery.
        </p>

        <Link to="/plants">
          <button className="get-started-btn">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AboutUs;
