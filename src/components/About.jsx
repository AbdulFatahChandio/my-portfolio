import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
          I am a Website Developer working across frontend and backend. I specialize in AI-related work and build websites, mobile apps, and AI agents for real-world business needs.
        </p>

        <br />

        <p className="text-xl mt-5">
          I like building products from scratch and turning ideas into working solutions. Connect with me to get your project done.
          <br /> <br />
          I focus on clean design, thoughtful branding, and a smooth user experience — so your product looks great and converts better.
          <br /> <br />
          Whether it is a website, a mobile app, or an AI agent, I help you ship modern digital products that grow with your business.
        </p>
        <p className="text-xl mt-5 mb-8">
          Stay Connected : abdulfatahchandio61@gmail.com
        </p>
        


      </div>
    </div>
  );
};

export default About;   
