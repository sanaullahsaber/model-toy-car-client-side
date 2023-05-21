import React from "react";
import { Link } from "react-router-dom";

const MyRow = ({ booking, handleDelete }) => {
  const { _id, sellerName, name, subCategory, price, quantity } = booking;



  return (
    <tr>
      {/* <th>
        <button className="btn btn-sm btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th> */}
      <td>{sellerName}</td>
      <td>{name}</td>
      <td>{subCategory}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <td>
        <Link to={`/bookings/${_id}`}>
          <span className="btn btn-sm bg-zinc-500 hover:text-black hover:bg-rose-600 text-white">
            Update
          </span>
        </Link>
      </td>
      <td>
        <span
          onClick={() => handleDelete(_id)}
          className="btn btn-sm bg-zinc-500 hover:text-black hover:bg-rose-600 text-white"
        >
          Delete
        </span>
      </td>
      {/* <th>
        <Link
          // to={`/all-toy-details/${_id}`}
          className="btn hover:bg-zinc-500 hover:text-black bg-rose-600 text-white"
        >
          Detail
        </Link>
      </th> */}
    </tr>
  );
};

export default MyRow;
