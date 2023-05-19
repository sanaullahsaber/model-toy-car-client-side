import React, { useEffect, useRef } from "react";
import "swiper/swiper-bundle.min.css";
import { Swiper, SwiperSlide } from "swiper/react";

const CustomersReview = () => {
  const reviews = [
    {
      id: 1,
      title: "Awesome Collectible!",
      content: "Remarkable level of detail. Stunning on display.",
      rating: "★★★★★",
    },
    {
      id: 2,
      title: "Impressive Craftsmanship",
      content: "Attention to detail and quality are amazing.",
      rating: "★★★★★",
    },
    {
      id: 3,
      title: "Perfect Addition",
      content: "Pristine condition. Truly impressive detail.",
      rating: "★★★★★",
    },
    {
      id: 4,
      title: "Excellent Quality",
      content: "Impressed with the craftsmanship and detail.",
      rating: "★★★★★",
    },
    {
      id: 5,
      title: "Great Addition to My Collection",
      content: "Complements my collection. Well-crafted piece.",
      rating: "★★★★★",
    },
    {
      id: 6,
      title: "Impressive Design",
      content: "Remarkable design. Sleek lines and accurate proportions.",
      rating: "★★★★★",
    },
    {
      id: 7,
      title: "Highly Detailed Model",
      content:
        "Exceeded expectations in terms of detail. True collector's item.",
      rating: "★★★★★",
    },
    {
      id: 8,
      title: "Exceptional Build Quality",
      content: "Amazed by the level of craftsmanship. Standout piece.",
      rating: "★★★★★",
    },
    // Add more review objects here
  ];

  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current.swiper;

    const autoplayInterval = setInterval(() => {
      if (swiper) {
        if (swiper.isEnd) {
          swiper.slideTo(0);
        } else {
          swiper.slideNext();
        }
      }
    }, 1000);

    return () => {
      clearInterval(autoplayInterval);
    };
  }, []);

  return (
   <>
      <h1 className="text-center mt-20 mb-5 text-4xl font-bold">
        Model Toy Cars Reviews by our customers
      </h1>
      <Swiper
        ref={swiperRef}
        spaceBetween={50}
        // slidesPerView={1}
        breakpoints={{
          // Responsive breakpoints
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        loop={true}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="h-56 lg:h-80 mb-20 max-w-md mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
              <div className="py-4 px-6">
                <h2 className="text-gray-800 text-2xl font-bold">
                  {review.title}
                </h2>
                <p className="mt-2 text-gray-600">{review.content}</p>
                <div className="mt-4">
                  <span className="text-gray-600">Rating: </span>
                  <span className="text-yellow-500">{review.rating}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CustomersReview;
