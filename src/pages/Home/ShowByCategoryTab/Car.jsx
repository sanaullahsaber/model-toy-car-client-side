import React from 'react';
import { Link } from 'react-router-dom';

const Car = ({car}) => {
  const { _id,toyName, price, rating, status, pictureURL } = car || {};
  
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img
          className=""
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          src={pictureURL}
          alt="Album"
        />
      </figure>
      <div
        className="card-body"
        data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <h2 className="card-title">{toyName}</h2>
        <p>Price: {price}</p>
        <p>Ratings: {rating}</p>
        <div className="card-actions justify-end">
          <Link to={`/view-details/${_id}`}>
            <button className="btn btn-ghost bg-rose-600 text-gray-900">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Car;