import React, { useContext, useEffect, useState } from 'react';
import AllRow from './AllRow';


const AllToys = () => {
  
  const [bookings, setBookings] = useState([]);

  const [showAll, setShowAll] = useState(false);

  const url = `http://localhost:5000/bookings`;
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
    .then(data => setBookings(data))
  },[])
// now star to update if you feel any bad then just go back with ctrl+z
  
   const handleShowAll = () => {
     setShowAll(true);
   };

   const handleShowLess = () => {
     setShowAll(false);
   };

  
  return (
    <div className="max-w-7xl mx-auto my-10">
      <h2 className="text-2xl">All Toys:{bookings.length}</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              {/* <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th> */}
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1
            {bookings.map((booking) => (
              <AllRow key={booking._id} booking={booking}></AllRow>
            ))} */}

            {/* Rows */}
            {bookings
              .slice(0, showAll ? bookings.length : 20)
              .map((booking) => (
                <AllRow key={booking._id} booking={booking}></AllRow>
              ))}
          </tbody>
        </table>
      </div>
      <div className="text-center">
        {!showAll && bookings.length > 20 && (
          <button
            onClick={handleShowAll}
            className="my-4 px-4 py-2  hover:bg-zinc-500 hover:text-black bg-rose-600 text-white rounded"
          >
            Show All
          </button>
        )}

        {showAll && (
          <button
            onClick={handleShowLess}
            className="my-4 px-4 py-2  hover:bg-zinc-500 hover:text-black bg-rose-600 text-white rounded"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default AllToys;