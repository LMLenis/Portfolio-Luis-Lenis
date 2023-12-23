import React from "react";

const About = () => {
  return (
    <div
      id="about"
      name="About"
      className=" flex flex-col items-center  h-screen w-screen"
    >
      <h2 className="font-semibold text-[40px] pt-[5%]">Background</h2>

      <div className="flex flex-col items-center justify-center w-screen md:p-10  mt-[1%] pt-[1%] pb-[1%] bg-[#2B2B29] p-40">
        <p className="text-white text-[25px] sm:text-[15px]">
        I am Colombian, married with two children. I studied electronic engineering and telecommunications, 
        and later did postgraduate studies in Engineering Management and Renewable Energy. 
        <br/>
        I worked for more than 20 years for a company in the <a href="https://www.americamovil.com/Spanish/overview">America Movil</a> group, holding different positions, 
        such as Mobile Communication Engineer, Operation and Maintenance Manager, and finally as Senior Project Manager.
        <br/>

        In 2022, and at 50 years old, I wanted to add a technical skill as an application developer to my professional profile 
        and I began studies in cloud programming, and in 2023 I began my studies as a Full Stack developer, 
        successfully completing the Henry bootcamp.
        <br/>
        Some of the projects I worked for:<br/>
        <a className=" duration-300 hover:bg-[#9b9ead]" href="https://www.youtube.com/watch?v=MLhiSChss18">* Integration of the GSM/UMTS mobile network in Colombia.</a><br/>
        <a className=" duration-300 hover:bg-[#9b9ead]" href="https://www.youtube.com/watch?v=3AyrcnIU-zs">* Digital Centers, a colombian goverment project to connect internet far away schools. </a><br/>
        <a className=" duration-300 hover:bg-[#9b9ead]" href="https://www.youtube.com/watch?v=PdtnlL9r2LM">* 5G Telco Cloud / Datacenter for network virtualization.</a><br/>
        <br/>
        <a className=" duration-300 hover:bg-[#9b9ead]" href="https://www.efset.org/cert/w5AQNk">English level: intermediate.</a>
        </p>
      </div>
    </div>
  );
};

export default About;
