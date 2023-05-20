import React from 'react';

const CarViewDetails = () => {
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          {/* <img className="" src={pictureURL} alt="Album" /> */}
        </figure>
        <div className="card-body">
          {/* <h2 className="card-title">{toyName}</h2> */}
          <p>Price: </p>
          <p>Ratings: </p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-ghost bg-rose-600 text-gray-900"
              // onClick={handleViewDetails}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarViewDetails;