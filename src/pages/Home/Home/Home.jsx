import React from 'react';
import Banner from '../Banner/Banner';
import CarGallery from '../CarGallery/CarGallery';
import ShowByCategoryTab from '../ShowByCategoryTab/ShowByCategoryTab';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Banner></Banner>
      <CarGallery></CarGallery>
      <ShowByCategoryTab></ShowByCategoryTab>
    </div>
  );
};

export default Home;