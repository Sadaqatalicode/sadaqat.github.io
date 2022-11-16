import React from 'react'

function Client() {
  return (
    <div>
        <section className="text-gray-600 body-font bg-slate-300 overflow-hidden">
        <div className="lg:text-center mt-10">
      <h4 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">What My Clients Say?</h4>
      <hr className="my-4 mx-auto w-28 h-1 bg-indigo-700 rounded border-0 md:my-4 dark:bg-indigo-700" />
    </div>
   <div className="container px-5 py-16 mx-auto">
    <div className="flex flex-wrap justify-center -m-4 ">
      <div className="lg:w-80 sm:w-72 mx-4 lg:mb-0 mb-6 p-4 bg-white border-2 rounded-xl"
      data-aos="fade-up-right"
      data-aos-offset="120"
      // data-aos-delay="50"
      data-aos-duration="900"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false">
        <div className="h-full text-center">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-4 border-indigo-600 bg-gray-100 " src="/client3.jfif"/>
          <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking ipsum dolor sit amet consectetur adipisicing elit. Explicabo, odio...</p>
          <span className="inline-block h-1 w-14 rounded bg-indigo-700 mt-4 mb-4"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
          {/* <p className="">Senior Product Designer</p> */}
        </div>
      </div>
      <div className="lg:w-80 sm:w-72 mx-4 lg:mb-0 mb-6 p-4 bg-white border-2 rounded-xl"
      data-aos="fade-down"
      data-aos-offset="120"
      // data-aos-delay="50"
      data-aos-duration="900"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false">
        <div className="h-full text-center">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-4 border-indigo-600 bg-gray-100" src="/client3.jfif"/>
          <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking ipsum dolor sit amet consectetur adipisicing elit. Explicabo, odio..</p>
          <span className="inline-block h-1 w-14 rounded bg-indigo-700 mt-4 mb-4"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">ALPER KAMU</h2>
          {/* <p className="text-gray-500">UI Develeoper</p> */}
        </div>
      </div>
      <div className="lg:w-80 sm:w-72 mx-4 lg:mb-0 p-4 bg-white border-2 rounded-xl"
      data-aos="fade-up-left"
      data-aos-offset="120"
      // data-aos-delay="50"
      data-aos-duration="900"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false">
        <div className="h-full text-center">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-4 border-indigo-600 bg-gray-100" src="/client3.jfif"/>
          <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking ipsum dolor sit amet consectetur adipisicing elit. Explicabo, odio...</p>
          <span className="inline-block h-1 w-14 rounded bg-indigo-700 mt-4 mb-4"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HENRY LETHAM</h2>
          {/* <p className="text-gray-500">CTO</p> */}
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Client