import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";






const Home = () => {

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('AJIJ_SEIKH__RESUME.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'AJIJ_SEIKH__RESUME.pdf';
            alink.click();
        })
    })
}

  



  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
        
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
          I'm<span style={{color:"black"}}>_</span>Ajij<span style={{color:"black"}}>_</span>Seikh<span style={{color:"black"}}>_</span>! 
          Full-Stack Web Developer ! 
          </h2>

          <p className="text-gray-500 py-4 max-w-md">
            I have 1 year of experience building and desgining web application.
            Currently, I love to work on web application using technologies like 
            React JS, CSS, Node JS,MongoDB, SQL, Redix, and Aws S3.
          </p>

          <div style={{flexDirection:"row"}} >
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              style={{display:"inline-block" , flex: 1,
              flexDirection: 'row',
              alignItems: 'center',}}>
              My Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>

           

         
          <button onClick={onButtonClick} smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"  style={{display:"inline-block" , flex: 1,
              flexDirection: 'row',
              alignItems: 'center',}} >
               Download Resume
              <span className="group-hover:rotate-90 duration-300" >
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
          </button>
          </div>

        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/4 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
