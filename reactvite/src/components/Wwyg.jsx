import React from "react";

function Wwyg() {
  return (
    <>
      <div className="bg-slate-300 py-12 overflow-hidden">
        <div className="mx-aut max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h4 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              What will you Get?
            </h4>
            <hr className="my-4 mx-auto w-28 h-1 bg-indigo-700 rounded border-0 md:my-4 dark:bg-indigo-700" />
          </div>

          <div className="mt-16 flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="p-2 sm:w-1/2 w-full">
              <div
                className="bg-gray-100 rounded-md flex py-4 h-full items-center"
                data-aos="fade-right"
                data-aos-offset="120"
                // data-aos-delay="50"
                data-aos-duration="400"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
              >
               <div className="absolute flex h-14 w-14 items-center justify-center rounded-md bg-indigo-500 text-white">
               <i className="fa-solid fa-mobile-screen-button"></i>
            </div>
                <span className="title-font font-medium mx-16">Mobile Responsive</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div
                className="bg-gray-100 rounded-md flex py-4 h-full items-center"
                data-aos="fade-left"
                data-aos-offset="120"
                // data-aos-delay="50"
                data-aos-duration="400"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                <div className="absolute flex h-14 w-14 items-center justify-center rounded-md bg-indigo-500 text-white">
                <i className="fa-solid fa-globe"></i>
                </div>
                <span className="title-font font-medium mx-16">Basic SEO</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div
                className="bg-gray-100 rounded-md flex py-4 h-full items-center"
                data-aos="fade-right"
                data-aos-offset="120"
                // data-aos-delay="50"
                data-aos-duration="600"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                <div className="absolute flex h-14 w-14 items-center justify-center rounded-md bg-indigo-500 text-white">
               <i className="fa-sharp fa-solid fa-wand-magic-sparkles"></i>
            </div>
                <span className="title-font font-medium mx-16">Eye Catching Design</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div
                className="bg-gray-100 rounded-md flex py-4 h-full items-center"
                data-aos="fade-left"
                data-aos-offset="120"
                // data-aos-delay="50"
                data-aos-duration="600"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                <div className="absolute flex h-14 w-14 items-center justify-center rounded-md bg-indigo-500 text-white">
                <i className="fa-regular fa-pen-to-square"></i>
            </div>
                <span className="title-font font-medium mx-16">CSS Customization</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div
                className="bg-gray-100 rounded-md flex py-4 h-full items-center"
                data-aos="fade-right"
                data-aos-offset="120"
                // data-aos-delay="50"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                <div className="absolute flex h-14 w-14 items-center justify-center rounded-md bg-indigo-500 text-white">
                <i className="fa-regular fa-square-check"></i>
            </div>
                <span className="title-font font-medium mx-16">Easy to Integrate</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div
                className="bg-gray-100 rounded-md flex py-4 h-full items-center"
                data-aos="fade-left"
                data-aos-offset="120"
                // data-aos-delay="50"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
              >
               <div className="absolute flex h-14 w-14 items-center justify-center rounded-md bg-indigo-500 text-white">
               <i className="fa-solid fa-person-chalkboard"></i>
            </div>
                <span className="title-font font-medium mx-16">
                  Great User Experience
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    
  );
}

export default Wwyg;
