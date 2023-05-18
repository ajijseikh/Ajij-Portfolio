import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Hello World! I'm <b>Ajij Seikh</b> from West Bengal , a Full-Stack Web
          Developer. From Back-end and front-end on a stage to lines of code on
          a web page, I love combining the worlds of logic and creative design
          to make eye-catching, accessible, and user-friendly websites and
          applications.
        </p>
        <br />
        <p className="text-xl ">
          Currently I work as a trainee in Functionup to upskill my coding
          knowldege. I have learn few things like Html, CSS, JavaScript, NodeJs,
          MongoDB, MySQL, AWS S3, Redix and ReactJs like that. I heve also
          completed couple of project's like E-commerce website, Book
          management, URL shortner, Open to intern, Bloging website and Hotel
          Booking website like that projects I have done. I am looking forward
          to start my carrier as a Full-stack developer.I'm
          excited to make the leap and continue refining my skills with the
          right company.
        </p>
      </div>
    </div>
  );
};

export default About;
