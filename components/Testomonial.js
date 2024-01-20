import React from "react";
import Slider from "react-slick";

const testimonialData = [
 
  {
    id: 1,
    name: "Ankit Singh",
    text: "I recently had the pleasure of experiencing the after-sales services provided by Servsy, and I must say it was nothing short of exceptional. From prompt responses to personalized assistance, every aspect of their after-sales support reflects a commitment to customer satisfaction.",
    img: "afterPassout.png",
  }, {
    id: 1,
    name: "Vivek Sharma",
    text: "One of the standout features of Servsy's after-sales service is their responsiveness. I had a few inquiries and concerns regarding the product I purchased, and their customer support team was quick to address them. The efficiency and speed with which they handled my queries left a lasting positive impression.",
    img: "https://t4.ftcdn.net/jpg/01/56/19/15/360_F_156191504_F8KusEJnAdRbyztflKKtQnnU43GIyWv4.jpg",
  },
  {
    id: 1,
    name: "Rahul Gupta",
    text: "Moreover, the level of personalization in their support truly sets Servsy apart. It wasn't just about resolving issues; it was about understanding my specific needs and tailoring their assistance accordingly. This personalized touch made me feel valued as a customer, reinforcing my trust in the brand.",
    img: "https://t3.ftcdn.net/jpg/02/69/98/98/360_F_269989865_mMfRFRN4mtDOtnHA0RFXcURX4n761zwd.jpg",
  },
  {
    id: 1,
    name: "Simmy",
    text: "Furthermore, Servsy goes the extra mile to ensure customer satisfaction. They proactively follow up to inquire about the resolution's effectiveness and if there are any additional concerns. This proactive approach reflects their dedication to providing a comprehensive and holistic after-sales service.",
    img: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202301/aarti-sixteen_nine_1.jpg?size=948:533",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10 ">
        <div className="container">
          {/* Header section */}
          <div className="text-center mb-10 max-w-[400px] mx-auto">
            <h1 className="text-4xl font-bold">What our client say.</h1>
            <p className="text-xs text-gray-400 mt-3">
              {" "}
              Our clients express admiration for our transformative solutions, echoing their success stories through our collaborative ventures.
            </p>
          </div>
          {/* testimonial section */}
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[800px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text, img }) => {
                return (
                  <div key={id} className="my-4">
                    <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                     <div className="flex justify-center items-center h-[120px] w-[120px]">
                      <img
                        src={img}
                        alt=""
                        className=" mx-auto "
                      />
                      </div>
                      <h1 className="text-xl font-bold">{name}</h1>
                      <p className="text-gray-500 text-sm">{text}</p>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
