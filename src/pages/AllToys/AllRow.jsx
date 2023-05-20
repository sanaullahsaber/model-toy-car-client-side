import React from 'react';
import { Link } from 'react-router-dom';

const AllRow = ({booking}) => {
  const { sellerName, name, subCategory, price, quantity, } = booking;
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
      <th>
        <Link to='/' className="btn hover:bg-zinc-500 hover:text-black bg-rose-600 text-white">View Detail</Link>
      </th>
    </tr>
  );
};

export default AllRow;