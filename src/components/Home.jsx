import React from "react";
import Me from "../assets/Me.jpg"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 home"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="small-screen hidden">
          <img
            src={Me }
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm Abdul Fatah Chandio || Full Stack Web Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          I'm a passionate Computer Science student at Sindh Madarastul Islam University, with a strong focus on Full Stack Development using the MERN stack (MongoDB, Express.js, React, Node.js). I specializes in backend development with Node.js and has experience in building scalable, user-friendly applications, Proficient in C, HTML, CSS, JavaScript, and Python. Currently enrolled in the AI track of the Presidential Initiative for AI and Computing (PIAIC).
          </p>

          <div className="portfolio-btn">
            <Link
              to="My Work"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Check My Work
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="big-screen">
          <img
            src={Me}
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-2/3"
          />
        </div>
        
      </div>
    </div>
  );
};

export default Home;
