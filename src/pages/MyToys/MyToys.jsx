import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyRow from "./MyRow";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [sortingOrder, setSortingOrder] = useState("desc");

  const handleSortingChange = (event) => {
    setSortingOrder(event.target.value);
  };

  const url = `http://localhost:5000/bookings?sellerEmail=${user?.email}&sort=${sortingOrder}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [user?.email, sortingOrder]);

  const handleDelete = (id) => {
    const proceed = confirm("Are You Sure you want to delete");
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted Successful");
            const remaining = bookings.filter(booking => booking._id !== id);
            setBookings(remaining)
          }
        });
    }
  };

  
  
  // star update here if we get back then just click crtl+z and  go back
  return (
    <div className="max-w-7xl mx-auto mb-52">
      <h2 className="text-2xl">My Toys:{bookings.length}</h2>
      <div className="sorting-dropdown my-3">
        <label htmlFor="sorting-order">Sort by:</label>
        <select
          id="sorting-order"
          value={sortingOrder}
          onChange={handleSortingChange}
        >
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
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
              <th>Update</th>
              <th>delete</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {bookings.map((booking) => (
              <MyRow
                key={`${booking._id}-${sortingOrder}`}
                booking={booking}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
