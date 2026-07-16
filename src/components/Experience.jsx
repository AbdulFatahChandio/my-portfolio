import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import express from "../assets/express.png";
import mongodb from "../assets/mongodb.png";
import typescript from "../assets/typescript.svg";
import postgresql from "../assets/postgresql.svg";
import docker from "../assets/docker.svg";
import git from "../assets/git.svg";
import firebase from "../assets/firebase.svg";
import vercel from "../assets/vercel.svg";
import stripe from "../assets/stripe.svg";
import jwt from "../assets/jwt.svg";
import redis from "../assets/redis.svg";
import nestjs from "../assets/nestjs.svg";
import vscode from "../assets/vscode.svg";
import cursor from "../assets/cursor.svg";
import pgadmin from "../assets/pgadmin.svg";
import antigravity from "../assets/antigravity.png";

const Experience = () => {
  const groups = [
    {
      name: "Frontend",
      techs: [
        { id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
        { id: 2, src: css, title: "CSS", style: "shadow-blue-500" },
        { id: 3, src: javascript, title: "JavaScript", style: "shadow-yellow-500" },
        { id: 4, src: typescript, title: "TypeScript", style: "shadow-blue-400" },
        { id: 5, src: reactImage, title: "ReactJS", style: "shadow-blue-600" },
        { id: 6, src: tailwind, title: "Tailwind", style: "shadow-sky-400" },
      ],
    },
    {
      name: "Backend",
      techs: [
        { id: 7, src: node, title: "NodeJS", style: "shadow-green-400" },
        { id: 8, src: express, title: "ExpressJS", style: "shadow-white" },
        { id: 9, src: nestjs, title: "NestJS", style: "shadow-red-500" },
        { id: 10, src: jwt, title: "JWT", style: "shadow-gray-300" },
      ],
    },
    {
      name: "Database",
      techs: [
        { id: 11, src: mongodb, title: "MongoDB", style: "shadow-green-500" },
        { id: 12, src: postgresql, title: "PostgreSQL", style: "shadow-blue-500" },
        { id: 13, src: redis, title: "Redis", style: "shadow-red-400" },
        { id: 14, src: pgadmin, title: "PGAdmin", style: "shadow-indigo-400" },
      ],
    },
    {
      name: "Tools & Editors",
      techs: [
        { id: 15, src: git, title: "Git", style: "shadow-orange-600" },
        { id: 16, src: github, title: "GitHub", style: "shadow-gray-400" },
        { id: 17, src: vscode, title: "VS Code", style: "shadow-blue-500" },
        { id: 18, src: cursor, title: "Cursor", style: "shadow-white" },
        { id: 19, src: antigravity, title: "Antigravity", style: "shadow-blue-400" },
        { id: 20, src: docker, title: "Docker", style: "shadow-sky-500" },
      ],
    },
    {
      name: "Cloud & Services",
      techs: [
        { id: 21, src: firebase, title: "Firebase", style: "shadow-yellow-400" },
        { id: 22, src: vercel, title: "Vercel", style: "shadow-white" },
        { id: 23, src: stripe, title: "Stripe", style: "shadow-purple-500" },
      ],
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen experience"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">
            These are the technologies I've worked with and used them in my
            projects.
          </p>
        </div>

        <div className="w-full flex flex-col gap-10 py-8 px-12 sm:px-0">
          {groups.map((group) => (
            <div key={group.name}>
              <p className="text-2xl font-semibold mb-6 text-gray-300">
                {group.name}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center">
                {group.techs.map(({ id, src, title, style }) => (
                  <div
                    key={id}
                    className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                  >
                    <img src={src} alt={title} className="w-20 h-20 object-contain mx-auto" />
                    <p className="mt-4">{title}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
