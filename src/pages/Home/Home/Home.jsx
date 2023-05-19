import React from 'react';
import Banner from '../Banner/Banner';
import CarGallery from '../CarGallery/CarGallery';
import ShowByCategoryTab from '../ShowByCategoryTab/ShowByCategoryTab';
import CustomersReview from '../CustomersReview/CustomersReview';
import Manufacturers from '../Manufacturers/Manufacturers';
import CarBrands from '../CarBrands/CarBrands';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Banner></Banner>
      <CarGallery></CarGallery>
      <ShowByCategoryTab></ShowByCategoryTab>
      <CustomersReview></CustomersReview>
      <Manufacturers></Manufacturers>
      <CarBrands></CarBrands>
    </div>
  );
};

export default Home;