import React, { useState } from 'react';
import './SalonServices.css';

const images = [
  {
    src: "assets/services/body-polishing.jpg",
    alt: "Body Polishing",
    link: "#body-polishing"
  },
  {
    src: "assets/services/facial.jpg",
    alt: "Facial-Cleanup",
    link: "#facial"
  },
  {
    src: "assets/services/mani-pedi.jpg",
    alt: "Mani-Pedi",
    link: "#mani-pedi"
  },
  {
    src: "assets/services/hair-care.jpg",
    alt: "Hair Care",
    link: "#hair-care"
  },
  {
    src: "assets/services/threading.jpg",
    alt: "Threading/Face wax",
    link: "#threading"
  }
];

const SalonServices = () => {
  const [selectedIndex, setSelectedIndex] = useState(2);

  const moveToSelected = (direction) => {
    if (direction === "next") {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else if (direction === "prev") {
      setSelectedIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  const getClassName = (index) => {
    const relativeIndex = (index - selectedIndex + images.length) % images.length;
    if (relativeIndex === 0) return "selected";
    if (relativeIndex === 1) return "next";
    if (relativeIndex === 2) return "nextRightSecond";
    if (relativeIndex === images.length - 1) return "prev";
    if (relativeIndex === images.length - 2) return "prevLeftSecond";
    return relativeIndex > 2 ? "hideRight" : "hideLeft";
  };

  return (
    <>
      <h2 style={{ textAlign: 'center', color: '#fff', margin: '40px 0 20px' }}>Salon at Home</h2>
      <div id="carousel-area">
        <div id="carousel">
          {images.map((image, index) => (
            <div className={getClassName(index)} key={index}>
              <div className="img-wrap">
                <span className="img-text">{image.alt}</span>
                <img src={image.src} alt={image.alt} />
              </div>
            </div>
          ))}
        </div>
        <div className="buttons">
          <button className="icon-btn" onClick={() => moveToSelected("prev")}>
            <img src="https://i.postimg.cc/jwWs9zZ1/arrow-L.png" alt="prev" className="icon-img" />
          </button>
          <button className="icon-btn" onClick={() => moveToSelected("next")}>
            <img src="https://i.postimg.cc/k6kndBHg/arrow-R.png" alt="next" className="icon-img" />
          </button>
        </div>
      </div>
    </>
  );
};

export default SalonServices;
