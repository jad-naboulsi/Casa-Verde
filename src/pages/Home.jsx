import React from "react";
import { Link } from "react-router-dom";
import FoodCard from "../components/FoodCard";
import { dishes } from "../data/dishes";

function Home() {
  return (
    <div>
      <section className="hero">
        <div className="container hero-content">
          <span className="eyebrow gold">WELCOME TO CASA VERDE</span>
          <h1>
            The Art of<br />
            <em>Italian Dining.</em>
          </h1>
          <p>Fresh ingredients. Timeless recipes. A dining experience inspired by Italy.</p>
          <Link className="btn-gold" to="/menu">Explore Our Menu ↗</Link>
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <span className="eyebrow">MADE WITH PASSION</span>
          <h2>Signature Favorites</h2>
          <p>A few dishes that tell our story.</p>
        </div>

        <div className="cards-grid">
          {[dishes[0], dishes[3], dishes[8]].map((dish) => (
            <FoodCard key={dish.id} dish={dish} />
          ))}
        </div>

        <div className="center-action">
          <Link className="outline-button" to="/menu">View Full Menu</Link>
        </div>
      </section>

      <section className="statement">
        <div className="container">
          <span className="eyebrow gold">OUR PHILOSOPHY</span>
          <h2>Good food. Good company.<br />Beautiful moments.</h2>
          <Link to="/about" className="text-link">Discover our story →</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
