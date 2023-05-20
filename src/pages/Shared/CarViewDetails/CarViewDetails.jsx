import React from "react";
import { useLoaderData } from "react-router-dom";

const CarViewDetails = () => {
  const carDetails = useLoaderData();
  const {
    toyName,
    sellerName,
    sellerEmail,
    subcategory,
    price,
    rating,
    availableQuantity,
    pictureURL,
    detailDescription,
  } = carDetails;
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-8">
            <div className="flex justify-center mb-4">
              <img className="w-64 h-auto" src={pictureURL} alt="Toy Car" />
            </div>
            <h2 className="text-2xl font-bold mb-4">{toyName}</h2>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="font-bold">Seller:</p>
                <p>{sellerName}</p>
              </div>
              <div>
                <p className="font-bold">Email:</p>
                <p>{sellerEmail}</p>
              </div>
              <div>
                <p className="font-bold">Category:</p>
                <p>{subcategory}</p>
              </div>
              <div>
                <p className="font-bold">Price:</p>
                <p>{price}</p>
              </div>
              <div>
                <p className="font-bold">Rating:</p>
                <p>{rating}</p>
              </div>
              <div>
                <p className="font-bold">Quantity:</p>
                <p>{availableQuantity}</p>
              </div>
            </div>
            <div>
              <p className="font-bold">Description:</p>
              <p>{detailDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarViewDetails;
