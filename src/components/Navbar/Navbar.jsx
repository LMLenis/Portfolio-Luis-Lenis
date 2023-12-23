
const Navbar = () =>{
    

   return(
    <nav className="sticky top-0">
      <div className="absolute w-screen flex justify-between md:grid-cols-1 bg-[#2B2B29] text-white font text-[20px] px-10 py-3">
        <a className="text-[25px] font-semibold font-serif md:hidden duration-300 hover:text-slate-400" href="#home">Luis Lenis</a>  
        <a className="text-[20px] sm:text-[15px] font-semibold duration-300 hover:text-slate-400" href="#about">Background</a>
        <a className="text-[20px] sm:text-[15px] font-semibold duration-300 hover:text-slate-400" href="#projects">Projects</a>
        <a className="text-[20px] sm:text-[15px] font-semibold duration-300 hover:text-slate-400" href="#tech">Skills</a>
        <a className="text-[20px] sm:text-[15px] font-semibold duration-300 hover:text-slate-400" href="#certificate">Certificates</a>
        <a className="text-[20px] sm:text-[15px] font-semibold duration-300 hover:text-slate-400" href="#contact">Contact</a>
       
        
        </div>
    </nav>
  )
}
    
export default Navbar;