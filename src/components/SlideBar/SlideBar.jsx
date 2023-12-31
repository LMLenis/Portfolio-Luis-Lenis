import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import { BsPersonBadgeFill, BsWhatsapp} from "react-icons/bs";



const SlideBar = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin <AiFillLinkedin size={30} className="cursor-pointer" />
        </>
      ),
      href: "https://www.linkedin.com/in/luis-mario-lenis-gil-64214189/",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <AiFillGithub size={30} />
        </>
      ),
      href: "https://github.com/LMLenis",
    },
    {
      id: 3,
      child: (
        <>
          Credly <BsPersonBadgeFill size={30} />
        </>
      ),
      href: "https://www.credly.com/users/luis-lenis/badges",
    },
    {
      id: 4,
      child: (
        <>
          E-mail <AiFillMail size={30} />
        </>
      ),
      href: "mailto:llenis73@gmail.com",
    },
    {
      id: 5,
      child: (
        <>
          Whatsapp < BsWhatsapp  size={25} />
        </>
      ),
      href: "https://wa.me/" + 573103727508,
    },
    
  ];

  return (
    <div className="flex right-0 items-center bg-[#42A5F5] bg-opacity-100 md:flex-row sm:p-1 md:justify-center md:bottom-0 text-[15px] sm:text-[8px] md:static fixed top-40 p-4 flex-col">
      {links.map(({ id, child, href, download }) => (
        <div key={id} className={"right-0 mt-4 flex duration-300 hover:mr-4"}>
          <a
            href={href}
            className="flex justify-between items-center
         text-white"
            download={download}
            target="_blank"
            rel="noreferrer"
          >
            {child}
          </a>
        </div>
      ))}
      
    </div>
    
  );
};

export default SlideBar;

