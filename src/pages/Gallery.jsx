import React from "react";

const photos = [
  ["https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&auto=format&fit=crop", "Elegant dining room"],
  ["https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=1200&auto=format&fit=crop", "Margherita pizza"],
  ["https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&auto=format&fit=crop", "Restaurant atmosphere"],
  ["https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=1200&auto=format&fit=crop", "Italian pasta"],
  ["https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&auto=format&fit=crop", "Restaurant interior"],
  ["https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=1200&auto=format&fit=crop", "Tiramisu dessert"]
];

function Gallery() {
  return (
    <div>
      <section className="page-banner">
        <div className="container">
          <span className="eyebrow gold">MOMENTS AT CASA VERDE</span>
          <h1>Our Gallery</h1>
          <p>A visual taste of our Italian-inspired world.</p>
        </div>
      </section>

      <section className="section container">
        <div className="gallery-grid">
          {photos.map(([src, alt]) => (
            <img src={src} alt={alt} loading="lazy" key={src} />
          ))}
        </div>
        <p className="menu-note">
          Reference photography for the student prototype;
          replace with your own or properly licensed assets.
        </p>
      </section>
    </div>
  );
}

export default Gallery;
