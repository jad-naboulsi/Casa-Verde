import React from "react";

function FoodCard({ dish }) {
  return (
    <article className="food-card">
      <img src={dish.image} alt={dish.name} loading="lazy" />
      <div className="food-card-body">
        <span className="eyebrow">{dish.category}</span>
        <div className="food-title">
          <h3>{dish.name}</h3>
          <b>${dish.price}</b>
        </div>
        <p>{dish.description}</p>
      </div>
    </article>
  );
}

export default FoodCard;
