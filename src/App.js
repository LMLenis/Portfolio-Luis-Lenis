//import {Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import SlideBar from "./components/SlideBar/SlideBar";
import Projects from "./components/Projects/Projects";
import Certificate from "./components/Certificates/Certificates";
import Contact from "./components/Contact/Contact"


function App() {
  return (
    <div className="md:grid-cols-1 md:h-screen md:pt-[0%]">
        <Navbar/>
        <Home/>   
        <About/>
        <Projects/>
        <Experience/>
        <Certificate/>
        <Contact/>
        <SlideBar/>
        <p className="static w-screen flex justify-center bg-[#2B2B29] text-white font text-[15px] py-1">
        <>
        © Luis Mario Lenis 2023. All rights reserved
        </>
      </p>    
        
    </div>
  );
}

export default App;
