import React from "react";
import javascript from "../../assets/technologies/javascript.png";
import html from "../../assets/technologies/html.png";
import css from "../../assets/technologies/css.png";
import nodejs from "../../assets/technologies/Nodejs.png";
import express from "../../assets/technologies/Express.png";
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

const Experience = () => {
  const technologies = [
    {
      name: "Javascript",
      imageSrc: javascript,
    },
    {
      name: "CSS",
      imageSrc: css,
    },
    {
      name: "HTML",
      imageSrc: html,
    },
    {
      name: "Tailwind",
      imageSrc: tailwind,
    },
    {
      name: "Nodejs",
      imageSrc: nodejs,
    },
    {
      name: "Express",
      imageSrc: express,
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
  ];

  return (
    <div
      id="tech"
      name="Experience"
      className="w-screen flex flex-col items-center justify-center pt-[5%]"
    >
      <h2 className="font-semibold text-[40px]">Skills</h2>
      <div className="content-center grid-cols-5 gap-8 grid sm:grid-cols-2 sm:gap-5 mt-[1%]">
        {technologies.map((t) => (
          <div key={t.name} className="w-[130px] h-[160px] justify-center items-center  border-red-100 border-spacing-1 border p-3 bg-slate-300 ">
            <img src={t.imageSrc} alt="" className="object-cover" />
            <p className="font-semibold">{t.name}</p>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Experience;
