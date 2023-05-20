import React from "react";

import image1 from "../../../assets/car-gallery/bentley-gtr-3-white-1-400x267.jpg";
import image2 from "../../../assets/car-gallery/bentley-mulsanne-julep-yellow-1-almost-real-400x267.jpg";
import image3 from "../../../assets/car-gallery/jaguar-c-x75-black-diecast-car-1w-400x267.jpg";
import image4 from "../../../assets/car-gallery/lamborghini-aventador-sv-grigio-grey-autoart-1-400x267.jpg";
import image5 from "../../../assets/car-gallery/lamborghini-huracan-orange-autoart-1-400x267.jpg";
import image6 from "../../../assets/car-gallery/lamborghini-hurucan-evo-green-autoart-3-400x267.jpg";
import image7 from "../../../assets/car-gallery/lamborghini-hurucan-evo-orange-autoart-1.jpg";
import image8 from "../../../assets/car-gallery/lamborghini-hurucan-evo-red-autoart-3-400x267.jpg";
import image9 from "../../../assets/car-gallery/mercedes-maybach-s-class-almost-real-2019-white-1w-400x267.jpg";

const CarGallery = () => {
  const images = [
    { src: image1, name: "Bentley Continental GT3-R White" },
    { src: image2, name: "Bentley Mulsanne Speed 2017 Julep / Yellow" },
    { src: image3, name: "Jaguar C-X75 Satin Black with Gloss Black Stripes" },
    { src: image4, name: "Lamborghini Aventador SV Grigio Titans Matt Grey" },
    { src: image5, name: "Lamborghini Huracan Performante Matt Orange" },
    { src: image6, name: "Lamborghini Huracan EVO Green Verde Selvans" },
    { src: image7, name: "Lamborghini Huracan EVO Orange Arancio Xanto" },
    { src: image8, name: "Lamborghini Huracan EVO Red Rosso Bia" },
    { src: image9, name: "Mercedes – Maybach S-Class 2019 Diamond White" },
  ];
  return (
    <div className="my-10">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Popular Models Right Now:
      </h2>
      <div
        className="grid md:grid-cols-3 gap-4"
        data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        {images.map((image, index) => (
          <div key={index} className="p-2">
            <img
              className="w-full h-auto rounded-lg"
              src={image.src}
              alt={`Image ${index + 1}`}
            />
            <h2 className="text-lg font-bold mt-2 pl-2">{image.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarGallery;
