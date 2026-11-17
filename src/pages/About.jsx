import React from "react";

const locations = [
  "Beirut, Lebanon",
  "Dubai, UAE",
  "Paris, France",
  "London, UK",
  "New York, USA"
];

function About() {
  return (
    <div>
      <section className="page-banner">
        <div className="container">
          <span className="eyebrow gold">OUR STORY</span>
          <h1>A Little Piece of Italy</h1>
          <p>Inspired by tradition. Made for memorable gatherings.</p>
        </div>
      </section>

      <section className="section container split">
        <div>
          <span className="eyebrow">WHO WE ARE</span>
          <h2>Welcome to Casa Verde</h2>
          <p>
            Casa Verde is a fictional Italian restaurant concept created for a
            student web project. Our story celebrates fresh ingredients,
            welcoming spaces and classic recipes.
          </p>
          <p>
            Every meal is an invitation to slow down, connect and enjoy
            the simple pleasures of Italian dining.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&auto=format&fit=crop"
          alt="Elegant restaurant interior"
        />
      </section>

      <section className="section tinted">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">OUR WORLD</span>
            <h2>Imagined Locations</h2>
            <p>Concept branches for demonstration only — not real restaurants.</p>
          </div>
          <div className="location-grid">
            {locations.map((city) => (
              <div className="location-card" key={city}>
                ✦
                <h3>{city}</h3>
                <span>Concept location</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
