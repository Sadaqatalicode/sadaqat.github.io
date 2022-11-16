import React from "react";

function Footer() {
  return (
    <div>
      
<footer className="p-4 bg-white sm:p-6 dark:bg-gray-900">
    <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
                <img src="/logo.png" className="mr-3 h-8 rounded-full" alt="FlowBite Logo"/>
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Sadaqat Ali</span>
            </a>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                <ul className="text-gray-600 dark:text-gray-400">
                    <li className="mb-4">
                        <a href="https://flowbite.com/" className="hover:underline">React Js</a>
                    </li>
                    <li>
                        <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                <ul className="text-gray-600 dark:text-gray-400">
                    <li className="mb-4">
                        <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
                    </li>
                    <li>
                        <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                <ul className="text-gray-600 dark:text-gray-400">
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
    <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" className="hover:underline">Sadaqat Ali</a>. All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <i className="fa-brands fa-facebook"></i>
                <span className="sr-only">Facebook page</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <i className="fa-brands fa-instagram"></i>
                <span className="sr-only">Instagram page</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <i className="fa-brands fa-twitter"></i>
                <span className="sr-only">Twitter page</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <i className="fa-brands fa-github"></i>
                <span className="sr-only">GitHub account</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <i className="fa-brands fa-linkedin"></i>
                <span className="sr-only">LinkedIn account</span>
            </a>
        </div>
    </div>
</footer>

    </div>
  );
}

export default Footer;
