import React, { useContext, useEffect, useState } from 'react';
import AllRow from './AllRow';


const AllToys = () => {
  
  const [bookings, setBookings] = useState([]);

  const [showAll, setShowAll] = useState(false);

  const [searchText, setSearchText] = useState("");

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
  
  const handleSearch = () => {
    fetch(`http://localhost:5000/bookings/search /${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }

  
  return (
    <div className="max-w-7xl mx-auto my-10">
      <h2 className="text-2xl">My Toys:{bookings.length}</h2>
      <div className="mt-4 mb-8 flex justify-center">
        <div className="form-control">
          <div className="input-group">
            <input
              onChange={(e)=> setSearchText(e.target.value)}
              type="text"
              placeholder="Search…"
              className="input input-bordered"
            />
            <button onClick={handleSearch} className="btn hover:bg-zinc-500 hover:text-black bg-rose-600 text-white btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
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