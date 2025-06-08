import React from "react";

const About = () => {
  return (
    <div
      id="about"
      name="About"
      className=" flex flex-col items-center w-screen md:static pt-[5%]"
    >
      <h2 className="font-semibold text-[40px]">Background</h2>

      <div className="flex flex-col items-center justify-center w-screen md:p-10  mt-[1%] pt-[1%] pb-[1%] bg-[#2B2B29] p-48">
        <p className="text-white text-[25px] sm:text-[15px] text-justify">
        I am Colombian, married with two children. I studied electronic engineering and telecommunications, 
        and later did postgraduate studies in Engineering Management and Renewable Energy. 
        <br/>
        I worked for more than <a className=" duration-300 hover:bg-[#2a6ba0]" href="https://drive.google.com/file/d/1AGD_nLkKWlErib_PxCYW_ZHwj2zfDERm/view">25 years</a> for a company in the <a className=" duration-300 hover:bg-[#2a6ba0]" href="https://www.americamovil.com/Spanish/overview">America Movil</a> group, holding different positions, 
        such as Mobile Communication Engineer, Operation and Maintenance Manager, and finally as Implementation Project Manager.
        <br/>

        In 2022, I wanted to add a technical skill as an application developer to my professional profile 
        and I began studies in cloud programming, and in 2023 I finished my studies as a Full Stack developer.       
        In 2024, I was consultant for a core migration and digital transformation project for a financial organization.
        Currently, I'm working as a consultant on an autonomous network project and at the same time I'm univesrity professor of telematics in <a className=" duration-300 hover:bg-[#2a6ba0]" href="https://www.icesi.edu.co/">ICESI university.</a>
        <br/>
        Some of the projects I had worked:<br/>
        <a className=" duration-300 hover:bg-[#2a6ba0]" href="https://www.youtube.com/watch?v=MLhiSChss18">* Integration of the GSM/UMTS mobile network in Colombia.</a><br/>
        <a className=" duration-300 hover:bg-[#2a6ba0]" href="https://www.youtube.com/watch?v=3AyrcnIU-zs">* Digital Centers, a colombian goverment project to connect internet far away schools. </a><br/>
        <a className=" duration-300 hover:bg-[#2a6ba0]" href="https://www.youtube.com/watch?v=PdtnlL9r2LM">* 5G Telco Cloud / Datacenter for network virtualization.</a><br/>
        <br/>
        <a className=" duration-300 hover:bg-[#2a6ba0]" href="https://www.efset.org/cert/w5AQNk">English level: intermediate.</a>
        </p>
      </div>
    </div>
  );
};

export default About;
