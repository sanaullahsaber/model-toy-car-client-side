import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Car from './Car';

const ShowByCategoryTab = () => {
  const [cars, setCars] = useState([]);
  const [activeTab, setActiveTab] = useState("sports")


  useEffect(() => {
    fetch(`http://localhost:5000/toycars/${activeTab}`)
      .then(res => res.json())
      .then(result => {
        setCars(result);
    })
  }, [activeTab])
  
  const result = cars.filter((car) => car.status == activeTab);
  console.log(result);

   const handleTabClick = (tabName) => {
     setActiveTab(tabName);
   };

  return (
    <>
      <div>
        <h1 className="text-center mt-5 p-5 text-3xl">Available Cars</h1>
        <div className="text-center">
          <div className="flex justify-center items-center">
            <div className="flex">
              <div
                onClick={() => handleTabClick("sports")}
                className={`p-3 mr-4 cursor-pointer  rounded-lg ${
                  activeTab === "sports"
                    ? "text-white bg-rose-600"
                    : "bg-neutral-400"
                }`}
              >
                SuperCars
              </div>
              <div
                onClick={() => handleTabClick("luxury")}
                className={`p-3 cursor-pointer rounded-lg ${
                  activeTab === "luxury"
                    ? "text-white bg-rose-600"
                    : "bg-neutral-400"
                }`}
              >
                Luxury Cars
              </div>
              <div
                onClick={() => handleTabClick("hyper")}
                className={`p-3 cursor-pointer ml-4 rounded-lg ${
                  activeTab === "hyper"
                    ? "text-white bg-rose-600"
                    : "bg-neutral-400"
                }`}
              >
                Hyper Cars
              </div>
            </div>
          </div>
        </div>
        <div className="my-5 grid sm:grid-cols-1 md:grid-cols-2 gap-4">
          {cars?.map((car) => (
            <Car key={car.id} car={car} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ShowByCategoryTab;