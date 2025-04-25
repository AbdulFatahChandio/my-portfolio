import React from "react";
// import waveportal from "../assets/portfolio/waveportal.jpg";
import quoteQuote1 from "../assets/portfolio/quoteQuote1.jpg";
import apiProduct from "../assets/portfolio/apiProduct .jpg"
import taskMang from "../assets/portfolio/taskMang.jpg";
import profileMang from "../assets/portfolio/profileMang.jpg";
import tracker from "../assets/portfolio/tracker.jpg"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: apiProduct,
      link : "https://www.linkedin.com/posts/abdul-fatah-chandio-1b7112322_backenddevelopment-nodejs-expressjs-activity-7320411250511769600-I4a1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFGHy5sBLzkpiTr8rPeSUXi0ppCMa92e4WE",
      repo: 'https://github.com/AbdulFatahChandio/postmanAPI.git'
    },
    {
      id: 2,
      src: tracker,
      link: 'https://www.linkedin.com/posts/abdul-fatah-chandio-1b7112322_nodejs-expressjs-websockets-activity-7287758237678923778-kyfE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFGHy5sBLzkpiTr8rPeSUXi0ppCMa92e4WE',
      repo: 'https://github.com/AbdulFatahChandio'
    },
    {
      id: 3,
      src: taskMang,
      link: 'https://www.linkedin.com/posts/abdul-fatah-chandio-1b7112322_nodejs-expressjs-ejs-activity-7276131143375032320-GsU1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFGHy5sBLzkpiTr8rPeSUXi0ppCMa92e4WE',
      repo: 'https://github.com/AbdulFatahChandio/Task-Manager.git'
    },
    {
      id: 4,
      src: quoteQuote1,
      link:"https://www.linkedin.com/posts/abdul-fatah-chandio-1b7112322_reactjs-vitejs-webdevelopment-activity-7321179288349618177-KuGd?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFGHy5sBLzkpiTr8rPeSUXi0ppCMa92e4WE",
      repo: 'https://github.com/AbdulFatahChandio/Quote-Generator.git'
    },
    {
      id: 5,
      src: profileMang,
      link: 'https://www.linkedin.com/posts/abdul-fatah-chandio-1b7112322_nodejs-expressjs-fullstackdevelopment-activity-7280284633118691328-7iaC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFGHy5sBLzkpiTr8rPeSUXi0ppCMa92e4WE',
      repo: 'https://github.com/AbdulFatahChandio'
    },
   
  ];

  return (
    <div
      name="My Work"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen myWork"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            My Work
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(link, '_blank')}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
