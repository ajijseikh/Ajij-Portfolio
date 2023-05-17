import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import mysql from "../assets/mysql.png";
import nodejs from "../assets/nodejs.png";
import github from "../assets/github.png";
import awss3 from "../assets/asws3.png";
import mongodb from "../assets/mongodb.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: awss3,
      title: "AWS S3",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: mysql,
      title: "MySQL",
      style: "shadow-white",
    },
    {
      id: 7,
      src: nodejs,
      title: "Nodejs",
      style: "shadow-pink-400",
    },
     {
      id: 8,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white ">
        <div className="pb-15 mt-20 ">
          <p className="text-4xl mt-20 font-bold border-b-4 border-gray-500 p-1 inline ">
            Experience
          </p>
          <p className="py-6 ">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center  px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-1 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
