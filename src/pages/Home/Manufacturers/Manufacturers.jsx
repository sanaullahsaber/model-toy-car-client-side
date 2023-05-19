import React from 'react';
import img1 from '../../../assets/Manufacturers-img/VENDOR_Acme.jpg'
import img2 from '../../../assets/Manufacturers-img/VENDOR_AMM.jpg'
import img3 from '../../../assets/Manufacturers-img/VENDOR_AutoWorld.jpg'
import img4 from '../../../assets/Manufacturers-img/VENDOR_Greenlight.jpg'
import img5 from '../../../assets/Manufacturers-img/VENDOR_Jada.jpg'
import img6 from '../../../assets/Manufacturers-img/VENDOR_Maisto.jpg'
import img7 from '../../../assets/Manufacturers-img/VENDOR_Motormax.jpg'
import img8 from '../../../assets/Manufacturers-img/VENDOR_RoadSig.jpg'

const Manufacturers = () => {
  const images = [
    { src: img1 },
    { src: img2 },
    { src: img3 },
    { src: img4 },
    { src: img5 },
    { src: img6 },
    { src: img7 },
    { src: img8 }
  ];
  return (
    <div className="my-10">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Shop Our Top Diecast Manufacturers
      </h2>
      <div className="grid md:grid-cols-8 gap-4">
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

export default Manufacturers;