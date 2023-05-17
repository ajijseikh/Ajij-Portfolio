import React from "react";
import blogging from "../assets/portfolio/blogging.jpg";
import bookManagement from "../assets/portfolio/bookManagement.jpg";
import intership from "../assets/portfolio/internship.jpg";
import urlShortner from "../assets/portfolio/urlShortner.jpg";
import ecommerce from "../assets/portfolio/ecommerce.jpg";
import reactWeather from "../assets/portfolio/hotelBooking.jpg";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: blogging,
     href:'https://github.com/ajijseikh/Blogging_Site_Project',
    },
    {
      id: 2,
      src: ecommerce,
      href:'https://github.com/ajijseikh/ProductManagement/tree/final/projectsManagementGroup29',
    },
    {
      id: 3,
      src: intership,
      href:'https://github.com/ajijseikh/COLLEGE_INTERN_PROJECT/tree/project/internshipGroup57',
    },
    {
      id: 4,
      src: urlShortner,
      href:'https://github.com/ajijseikh/shortendUrl_Project',
    },
    {
      id: 5,
      src: bookManagement,
      href:'https://github.com/ajijseikh/Books-Management-/tree/project/booksManagementGroup56',
    },
    {
      id: 6,
      src: reactWeather,
      href:'https://github.com/ajijseikh/Hotel-Booking-App',
    },
  ];
 
      

  

  return (
    <div
      name="portfolio"
      className=" bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className=" max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-10 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div  key={id} className="flex items-center justify-center">
                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button> */}

                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 font-weight: 700;"  type="button"
    onClick={(e) => {
      e.preventDefault();
      window.location.href=href
      }}>
                  Source Code
                </button >
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
