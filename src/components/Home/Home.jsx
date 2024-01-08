import React from "react";




const Home = () => {
    return (
        <div id="home" className=" w-screen">
           
        <div className="md:text-[30px] md:p-10 md:left-[1%] md:w-screen md:pt-[20%] md:static pl-[15%] pt-[8%] w-[1100px] text-black font-normal">
        
        <h1 className="text-[60px] font-bold md:text-[40px] font-serif text-[#42A5F5]" >Luis Lenis</h1> 
        <p className="text-[40px] font-semibold sm:text-[30px]"> Fullstack developer and electronics engineer</p> 
        <p className="text-[32px] pt-[3%] sm:text-[24px] text-justify">  I am available right now to be part of a company where I can grow as a software developer 
        and at the same time I can contribute with my experience acquired in the world of telecommunications. <br/>
        My greatest contribution will be in stakeholders management, on-time deliverables and user experience mindset.</p> 
        
        <a
            href="https://drive.google.com/file/d/1W_kVnZkUiEw5USlSLlg2E0rWBpEiX-Kv/view">
        <button
          type="submit"
          className="rounded border border-slate-800 mt-8 w-[160px] p-2 font-semibold bg-[#42A5F5] text-white text-[20px] duration-300 hover:bg-[#2a6ba0]"
        >
          Download CV
        </button>
        </a>
        </div>

        </div>
    )
}

export default Home;