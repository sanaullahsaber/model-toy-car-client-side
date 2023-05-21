import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const AddToy = () => {
  const { user } = useContext(AuthContext);

  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const seller = form.seller.value;
    const email = form.email.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const booking = {
      photo: photo,
      name,
      sellerName: seller,
      sellerEmail: email,
      subCategory: subCategory,
      price: price,
      rating: rating,
      quantity: quantity,
      description: description,
    };
    console.log(booking);

    fetch(`https://73-model-toy-cars-server.vercel.app/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Add A Toy successfully");
        }
      });
  };

  return (
    <div className="max-w-7xl mx-auto my-10">
      <form onSubmit={handleAddToy} className="">
        <div className="bg-white p-8 shadow-xl rounded-md">
          <h2 className="text-2xl font-medium mb-6 text-center">Add A Toy</h2>
          <div className="grid gap-4">
            <div>
              <label htmlFor="pictureUrl" className="text-gray-700 font-medium">
                Picture URL of the toy:
              </label>
              <input
                type="text"
                name="photo"
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="name" className="text-gray-700 font-medium">
                Name:
              </label>
              <input
                type="text"
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                name="name"
              />
            </div>
            <div>
              <label htmlFor="sellerName" className="text-gray-700 font-medium">
                Seller Name:
              </label>
              <input
                type="text"
                value={user?.displayName}
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                name="seller"
              />
            </div>
            <div>
              <label
                htmlFor="sellerEmail"
                className="text-gray-700 font-medium"
              >
                Seller Email:
              </label>
              <input
                type="email"
                value={user?.email}
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                name="email"
              />
            </div>
            <div>
              <label
                htmlFor="subCategory"
                className="text-gray-700 font-medium"
              >
                Sub-category:
              </label>
              <select
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                name="subCategory"
              >
                <option name="subCategory" value="">
                  Select a sub-category
                </option>
                <option name="subCategory" value="SuperCars">
                  Super Cars
                </option>
                <option name="subCategory" value="LuxuryCars">
                  Luxury Cars
                </option>
                <option name="subCategory" value="HyperCars">
                  Hyper Cars
                </option>
              </select>
            </div>
            <div>
              <label htmlFor="price" className="text-gray-700 font-medium">
                Price:
              </label>
              <input
                type="number"
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                name="price"
              />
            </div>
            <div>
              <label htmlFor="rating" className="text-gray-700 font-medium">
                Rating:
              </label>
              <input
                type="number"
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                name="rating"
              />
            </div>
            <div>
              <label htmlFor="quantity" className="text-gray-700 font-medium">
                Available Quantity:
              </label>
              <input
                type="number"
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                name="quantity"
              />
            </div>
            <div className="col-span-2">
              <label
                htmlFor="description"
                className="text-gray-700 font-medium"
              >
                Detail Description:
              </label>
              <textarea
                id="description"
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                name="description"
              />
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="mt-6 bg-rose-500 hover:bg-neutral-200 hover:text-black text-white font-medium py-2 px-4 rounded-md"
            >
              Add Toy
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddToy;
