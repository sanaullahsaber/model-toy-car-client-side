import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateMyToy = () => {
  const updateToy = useLoaderData();
  const {_id} = updateToy
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const update = {
      price: price,
      quantity: quantity,
      description: description
    }

    // console.log(update);

    fetch(`http://localhost:5000/bookings/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Update Successfully");
      });
  };


  return (
    <div className="max-w-7xl mx-auto ">
      <h2 className="text-center">UpdatedMyToy</h2>
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl mb-4">Updated Here Toy</h2>
        <form onSubmit={handleSubmit} className='px-5'>
          <div className="mb-4">
            <label htmlFor="price" className="block mb-2 font-semibold">
              Price
            </label>
            <input
              type="number"
              name="price"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter price"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="quantity" className="block mb-2 font-semibold">
              Available Quantity
            </label>
            <input
              type="number"
              name="quantity"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter available quantity"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block mb-2 font-semibold">
              Detail Description
            </label>
            <textarea
              name="description"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter detail description"
            />
          </div>
          <div className="text-center my-5">
            <button
              type="submit"
              className="mt-6 bg-rose-500 hover:bg-neutral-200 hover:text-black text-white font-medium py-2 px-4 rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateMyToy;