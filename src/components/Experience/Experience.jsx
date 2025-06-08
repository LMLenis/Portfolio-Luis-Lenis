import React from "react";
import javascript from "../../assets/technologies/javascript.png";
import html from "../../assets/technologies/html.png";
import css from "../../assets/technologies/css.png";
import nodejs from "../../assets/technologies/Nodejs.png";
import expressjs from "../../assets/technologies/Express.png";
import reactjs from "../../assets/technologies/reactjs.png";
import redux from "../../assets/technologies/Redux.png";
import sequelize from "../../assets/technologies/sequelize.png";
import aws from "../../assets/technologies/aws.png";
import postgresql from "../../assets/technologies/Postgresql.png";
import discord from "../../assets/tools/discord.png";
import github from "../../assets/tools/GitHub.png";
import slack from "../../assets/tools/Slack.png";
import visual from "../../assets/tools/Visual_Studio.png";
import tailwind from "../../assets/technologies/tailwind.png";
import trello from "../../assets/tools/trello.png";
import phyton from "../../assets/technologies/Python.png";

const Experience = () => {
  const technologies = [
    {
      name: "JavaScript",
      imageSrc: javascript,
    },
    {
      name: "CSS3",
      imageSrc: css,
    },
    {
      name: "HTML5",
      imageSrc: html,
    },
    {
      name: "Tailwindcss",
      imageSrc: tailwind,
    },
    {
      name: "Nodejs",
      imageSrc: nodejs,
    },
    {
      name: "Expressjs",
      imageSrc: expressjs,
    },
    {
      name: "Reactjs",
      imageSrc: reactjs,
    },
    {
      name: "Redux",
      imageSrc: redux,
    },
    {
      name: "Sequelize",
      imageSrc: sequelize,
    },
    {
      name: "AWS",
      imageSrc: aws,
    },
    {
      name: "Postgresql",
      imageSrc: postgresql,
    },
    {
      name: "Phyton",
      imageSrc: phyton,
    }
  ];
  const tools = [
    {
      name: "Discord",
      imageSrc: discord,
    },
    {
      name: "Github",
      imageSrc: github,
    },
    {
      name: "Slack",
      imageSrc: slack,
    },
    {
      name: "VSC",
      imageSrc: visual,
    },
    {
      name: "Trello",
      imageSrc: trello,
    },
  ];

  return (
    <div
      id="tech"
      name="Experience"
      className="w-screen flex flex-col items-center justify-center pt-[5%]"
    >
      <h2 className="font-semibold text-[40px]">My Skills</h2>
      <div className="content-center grid-cols-6 gap-10 grid md:grid-cols-2 md:gap-5 mt-[2%]">
        {technologies.map((t) => (
          <div key={t.name} className="w-[100px] h-[120px] justify-center items-center relative ">
            <img src={t.imageSrc} alt="" className="object-cover" />
            <span className="flex flex-col  p-4 absolute hover:bg-white inset-0 items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-black font-bold text-[20px]">{t.name}</p>
            </span>
          </div>
        ))}
      </div>
      <h2 className="font-semibold text-[40px] mt-[2%]">Tools</h2>
      <div className="content-center grid-cols-5 gap-10 grid md:grid-cols-2 md:gap-5 mt-[2%]">
        {tools.map((t) => (
          <div key={t.name} className="w-[100px] h-[100px] justify-center items-center relative">
            <img src={t.imageSrc} alt="" className="object-cover" />
            <span className="flex flex-col  p-4 absolute hover:bg-white inset-0 items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-black font-bold text-[20px]">{t.name}</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
