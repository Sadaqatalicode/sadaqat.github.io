import React from "react";

function Hero() {
  return (
    <>
      <div className="relative overflow-hidden overflow-x-hidden">
        <div className="mx-auto max-w-7xl mt-60">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
            <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="content sm:text-center lg:text-left">
                <h6 className="slide-right font-semibold text-2xl text-indigo-600"
                data-aos="fade-left"
                data-aos-offset="120"
                // data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false">
                  Hey there!
                </h6>
                <h1 className="slide-right text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
                data-aos="fade-left"
                data-aos-offset="120"
                // data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false">
                  <span className="block xl:inline">I'm Sadaqat</span>
                  <br />
                  <span className="slide-right block text-indigo-600 xl:inline">
                    Website Developer
                  </span>
                </h1>
                <p className="opacity-0 slide-right mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0"
                data-aos="fade-right"
                data-aos-offset="120"
                // data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="/"
                      className="slide-right opacity-0 flex w-full items-center justify-center rounded-md border border-indigo-600 bg-transparent px-8 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-100 md:py-2 md:px-5 md:text-lg"
                      data-aos="fade-left"
                      data-aos-offset="50"
                      // data-aos-delay="50"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                      data-aos-mirror="true"
                      data-aos-once="false">
                      Get started
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
        data-aos="fade-left"
        data-aos-offset="100"
        // data-aos-delay="50"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false">
          <img
            className="slide-right h-56 mt-10 w-full object-cover sm:h-72 md:h-96 lg:h-screen lg:w-70"
            src="/home.png"
            alt="home"
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
