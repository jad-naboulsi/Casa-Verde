import React, { useState } from "react";
import FoodCard from "../components/FoodCard";
import { dishes } from "../data/dishes";

const categories = ["All", "Pizza", "Pasta", "Starters", "Desserts"];

function Menu() {
  const [category, setCategory] = useState("All");
  const visibleDishes = dishes.filter(
    (dish) => category === "All" || dish.category === category
  );

  return (
    <div>
      <section className="page-banner">
        <div className="container">
          <span className="eyebrow gold">THE CASA VERDE KITCHEN</span>
          <h1>Explore Our Menu</h1>
          <p>Italian classics, prepared with care.</p>
        </div>
      </section>

      <section className="section container">
        <div className="category-tabs">
          {categories.map((name) => (
            <button
              key={name}
              type="button"
              className={category === name ? "selected" : ""}
              onClick={() => setCategory(name)}
            >
              {name}
            </button>
          ))}
        </div>

        <div className="cards-grid">
          {visibleDishes.map((dish) => (
            <FoodCard key={dish.id} dish={dish} />
          ))}
        </div>

        <p className="menu-note">
          Sample menu and prices for an educational demonstration.
          No online orders are accepted.
        </p>
      </section>
    </div>
  );
}

export default Menu;
