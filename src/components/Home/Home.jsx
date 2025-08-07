import React from "react";




const Home = () => {
    return (
        <div id="home" className=" w-screen">
           
        <div className="md:text-[30px] md:p-10 md:left-[1%] md:w-screen md:pt-[20%] md:static pl-[15%] pt-[8%] w-[1100px] text-black font-normal">
        
        <h1 className="text-[60px] font-bold md:text-[40px] font-serif text-[#42A5F5]" >Luis Lenis</h1> 
        <p className="text-[40px] font-semibold sm:text-[30px]">Project manager</p> 
        <p className="text-[30px] pt-[3%] sm:text-[24px] text-justify">  I currently work as an independent consultant, leading digital transformation initiatives and applying the experience I've gained over the years in the telecommunications and IT sectors. <br/>
        My main contribution is focused on process optimization through the development of software solutions using RPA and AI technologies.</p> 
        
        <a
            href="https://drive.google.com/file/d/1ElPqTV4-EiYLYGA6TyBwEFurOkzwBdh_/view">
        <button
          type="submit"
          className="rounded border border-slate-800 mt-8 w-[180px] p-2 font-semibold bg-[#42A5F5] text-white text-[20px] duration-300 hover:bg-[#2a6ba0]"
        >
          Download CV
        </button>
        </a>
        </div>

        </div>
    )
}

export default Home;