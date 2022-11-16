import React from "react";

function Services() {
  return (
    <div className="overflow-hidden bg-slate-200 text-gray-600 body-font">
      <h4 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4 my-10">Services we Offer</h4>
      <hr className="my-4 mx-auto w-28 h-1 bg-indigo-700 rounded border-0 md:my-4 dark:bg-indigo-700" />

<div className="container px-5 py-16 mx-auto">
    <div className="flex flex-wrap justify-center -m-4">
      <div className="lg:w-80 sm:w-72 mx-4 lg:mb-0 mb-6 p-4 bg-white border-2 rounded-xl hover:-translate-y-5 delay-100"
      data-aos="fade-down-right"
      data-aos-offset="120"
      // data-aos-delay="50"
      data-aos-duration="900"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false">
      <div className="h-full text-center ">
          <img alt="testimonial" className="h-24 inline-block" src="/web.dev.jpg"/>
          <h2 className="flex justify-center font-semibold text-2xl my-3">Web Development</h2>
          <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking ipsum dolor sit amet consectetur adipisicing elit. Explicabo, odio...</p>        
        </div>
      </div>
      <div className="lg:w-80 sm:w-72 mx-4 lg:mb-0 mb-6 p-4 bg-white border-2 rounded-xl hover:-translate-y-5 delay-100"
      data-aos="fade-up"
      data-aos-offset="120"
      // data-aos-delay="30"
      data-aos-duration="900"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false">
      <div className="h-full text-center">
          <img alt="testimonial" className="h-24 inline-block" src="/design.jpg"/>
          <h2 className="flex justify-center font-semibold text-2xl my-3">Web Design</h2>
          <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking ipsum dolor sit amet consectetur adipisicing elit. Explicabo, odio...</p>         
        </div>
      </div>
      <div className="lg:w-80 sm:w-72 mx-4 lg:mb-0 p-4 bg-white border-2 rounded-xl"
      data-aos="fade-down-left"
      data-aos-offset="120"
      // data-aos-delay="50"
      data-aos-duration="900"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false">
        <div className="h-full text-center">
          <img alt="testimonial" className="h-24 inline-block" src="/wp.logo.png"/>
          <h2 className="flex justify-center font-semibold text-2xl my-3">WordPress Website</h2>
          <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking ipsum dolor sit amet consectetur adipisicing elit. Explicabo, odio...</p>         
        </div>
      </div>
    </div>
  </div>
    </div>
  );
}

export default Services;
