import React from 'react';

const Car = ({car}) => {
  const { toyName, price, rating, status, pictureURL } = car || {};
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img 
          className=''
          src={pictureURL}
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{toyName}</h2>
        <p>Price: {price}</p>
        <p>Ratings: {rating}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-ghost bg-rose-600 text-gray-900">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Car;