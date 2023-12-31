import React from "react";




const Home = () => {
    return (
        <div id="home" className=" w-screen">
           
        <div className="md:text-[30px] md:p-10 md:left-[1%] md:w-screen md:pt-[20%] md:static pl-[15%] pt-[8%] w-[1100px] text-black font-normal">
        <p className="text-[30px] md:text-[25px]" > Hi! I am</p>
        <h1 className="text-[60px] font-bold text-slate-400 md:text-[40px] font-serif" >Luis Lenis</h1> 
        <p className="text-[38px] font-semibold sm:text-[25px]"> I'm a fullstack developer and electronics engineer</p> 
        <p className="text-[30px] pt-[3%] sm:text-[15px]">  I am available right now to be part of a company where I can grow as a software developer 
        and at the same time I can contribute with my experience acquired in the world of telecommunications. <br/>
        My greatest contribution will be in stakeholders management, on-time deliverables and user experience mindset.</p> 
        
        <a
            href="https://drive.google.com/file/d/18EdCcxsjpgwr2wOnyWTVpoOLbysftRHW/view">
        <button
          type="submit"
          className="rounded border border-slate-800 mt-8 w-[160px] p-2 font-semibold bg-slate-400 text-white text-[20px] duration-300 hover:bg-[#31333f]"
        >
          Download CV
        </button>
        </a>
        </div>

        </div>
    )
}

export default Home;