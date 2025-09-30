import React, { useState } from "react";
import "./BanquetHall.css";
import SEO from './SEO';

// Import images
import mainBanquetImage from "../assets/7xm957170-scaled.jpg";
import gallery1 from "../assets/IMG_0253-copy-1.jpg";
import gallery2 from "../assets/IMG_0254-copy.jpg";
import gallery3 from "../assets/IMG_0256-copy.jpg";
import gallery4 from "../assets/IMG_0326-copy.jpg";
import gallery5 from "../assets/IMG_0328-copy.jpg";
import gallery6 from "../assets/IMG_1389-copy.jpg";
import gallery7 from "../assets/IMG_1393-copy.jpg";
import gallery8 from "../assets/IMG_3691-copy.jpg";
import gallery9 from "../assets/IMG_3693-copy.jpg";
import gallery10 from "../assets/IMG_3701-copy.jpg";

const BanquetHall = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
    gallery9,
    gallery10
  ];

  return (
    <div className="main">
      <SEO 
        title="ICSGV | Banquet Hall"
        description="Our banquet hall accommodates up to 235 people, perfect for weddings, ceremonies, and special events."
        preloadImage={mainBanquetImage}
        priority="high"
      />
     
      <h5 class="assalamualaikum">Assalamualaikum</h5>
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
              src={mainBanquetImage}
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
