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
        <SlideBar/>
        <Home/>   
        <About/>
        <Projects/>
        <Experience/>
        <Certificate/>
        <Contact/>
        
        
    </div>
  );
}

export default App;
