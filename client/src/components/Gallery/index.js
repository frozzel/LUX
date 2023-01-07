import React from "react";
import { Zoom } from "react-slideshow-image";
import image1 from "../../assets/Belhome.jpg";
import image2 from "../../assets/Large-hourglass.jpg";
import image3 from "../../assets/Gucci-Banner1.jpg";
import image4 from "../../assets/pradabanner.png";
import image5 from "../../assets/Gucci-Banner2.png";
// style was imported in index.css
// import "react-slideshow-image/dist/styles.css";
const images = [image1, image2, image3, image4, image5 ];

const zoomOutProperties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  scale: 0.4,
  arrows: false,
  
};

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Zoom {...zoomOutProperties}>
        {images.map((each, index) => (
          <img key={index} style={{ width: "100%" }} alt="" src={each} />
        ))}
      </Zoom>
    </div>
  );
};

function Gallery() {
  return (
    <div className="Gallery">
      <Slideshow />
    </div>
  );
}

export default Gallery;
