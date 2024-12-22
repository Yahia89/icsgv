import React, { useState } from "react";
import "./BanquetHall.css";

const BanquetHall = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    "https://icsgv.com/wp-content/uploads/2023/08/IMG_0256-copy.jpg",
    "https://icsgv.com/wp-content/uploads/2023/08/IMG_0254-copy.jpg",
    "https://icsgv.com/wp-content/uploads/2023/08/IMG_0326-copy.jpg",
    "https://icsgv.com/wp-content/uploads/2023/08/IMG_3693-copy.jpg",
    "https://icsgv.com/wp-content/uploads/2023/08/IMG_1393-copy.jpg",
    "https://icsgv.com/wp-content/uploads/2023/08/IMG_1389-copy.jpg",
    "https://icsgv.com/wp-content/uploads/2023/08/IMG_0328-copy.jpg",
    "https://icsgv.com/wp-content/uploads/2023/08/IMG_3691-copy.jpg",
    "https://icsgv.com/wp-content/uploads/2023/08/IMG_0253-copy-1.jpg",
    "https://icsgv.com/wp-content/uploads/2023/08/IMG_3701-copy.jpg",
  ];

  return (
    <div class="main">
      <div class="wrapper">
        <svg>
          <text x="50%" y="50%" dy=".35em" text-anchor="middle">
            مسجد قباء
          </text>
        </svg>
      </div>
      <h5 class="Assalamualaikum">Assalamualaikum</h5>
      <h1 class="welcome">
        Welcome to the Islamic Center of San Gabriel Valley (ICSGV)
      </h1>
      <div class="main">
        {/* Top Section */}
        <div className="banquet-header">
          <div className="banquet-text">
            <h1 style={{ color: "black" }}>Banquet Hall</h1>
            <p>
              Utilize your center and save on your special event cost: Wedding
              reception, Nikkah ceremony, Birthdate celebration, 'Ameen' or
              'Bismillah' ceremonies.
            </p>
            <p>
              Wedding ceremony held in the ICSGV parking lot, with tent setup
              and roundtables, up to 500 people.
            </p>
            <p>
              <strong>ICSGV Banquet Hall</strong>
              <br />
              Capacity with Round Tables: 235 people (Banquet hall/Foyer areas
              combined)
            </p>
          </div>
          <div className="banquet-image">
            <img
              src="https://icsgv.com/wp-content/uploads/2023/08/7xm957170-scaled.jpg"
              alt="Banquet Hall"
            />
          </div>
        </div>

        {/* Gallery Section */}
        <div className="banquet-gallery">
          <h2 style={{ color: "black" }}>Banquet Gallery</h2>
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Gallery ${index + 1}`}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>

        {/* Modal for Selected Image */}
        {selectedImage && (
          <div className="image-modal" onClick={() => setSelectedImage(null)}>
            <div className="modal-content">
              <img src={selectedImage} alt="Selected" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BanquetHall;
