// import React,{useEffect} from 'react'
// import AOS from 'aos';
// import 'aos/dist/aos.css';



function About() {
  // useEffect(() => {
  //   AOS.init({
  //     duration : 2000
  //   });
  // }, [])
  
  return (
    <div className='overflow-hidden bg-slate-100'>
        <h4 className='sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4 my-10'>About Me</h4>
        <hr className="my-4 mx-auto w-20 h-1 bg-indigo-700 rounded border-0 md:my-3 dark:bg-indigo-700"/>
        <p className="text-center mx-52 mb-8 font-medium mt-8 text-base text-gray-500" 
        data-aos="fade-up"
        data-aos-offset="100"
        // data-aos-delay="50"
        data-aos-duration="700"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        >Lorem ipsum dolor, sit sit a amet consectetur adipisicing elit. Nihil eligendi voluptatibus doloremque recusandae iusto cumque assumenda architecto facilis! Fugit qui recusandae, illum voluptatem, excepturi aliquid magni repellat voluptate animi, soluta quam? Quidem ut, omnis suscipit tempore accusamus eos placeat rerum? Tempore est optio, odio delectus asperiores, suscipit in earum beatae ab repellat, vitae doloremque quibusdam ullam autem aut neque quisquam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, aut voluptas repudiandae sint delectus voluptatem in repellat veniam</p>
    </div>
  )
}

export default About