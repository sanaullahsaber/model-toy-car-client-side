import React, { useContext, useEffect, useState } from 'react';
import AllRow from './AllRow';


const AllToys = () => {
  
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings`;
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
    .then(data => setBookings(data))
  },[])

  return (
    <div className="max-w-7xl mx-auto my-10">
      <h2 className="text-2xl">Your Bookings:{bookings.length}</h2>
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
            {/* row 1 */}
            {bookings.map((booking) => (
              <AllRow key={booking._id} booking={booking}></AllRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;