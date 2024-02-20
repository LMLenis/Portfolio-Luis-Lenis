import projectImage1 from "../../assets/projects/ETNIA.png";
import projectImage2 from "../../assets/projects/Quirkz.png"
import projectImage3 from "../../assets/projects/Drivers.png"

const Projects = () => {
  const projects = [
    {
      title: "ETNIA Sports Wear",
      description:
      "An e-commerce for the Etnia brand that allows management of its sports wear inventory. The application allows you to filter, sort, display details, login, pay, search, delete and create products using dashboard of administrator.",
      projectsImageSrc: projectImage1,
      githubLink: "https://github.com/LMLenis/Etnia-Ecommerce",
      deployLink: "https://etnia-ecommerce.vercel.app/",
    },
    {
      title: "QUIRKZ",
      description:
        "Design and develop an market place for shoes sale that allows management of its inventory. The application allows you to filter, sort, display details, login, pay, search, delete, edit and create products using dashboard of administrator.",
      projectsImageSrc: projectImage2,
      githubLink: "https://github.com/LMLenis/Proyecto-Final-Client-Quirkz",
      deployLink: "https://quirkzmain.vercel.app/",
    },
    {
      title: "DRIVERS",
      description:
        "Academic project that allows displaying cards with information on car drivers brought from an API and a database. The application allows you to filter, sort, display details, search and create objects.",
      projectsImageSrc: projectImage3,
      githubLink: "https://github.com/LMLenis/Proyecto-Drivers",
      deployLink: "https://proyecto-drivers.vercel.app/",
    },
  ];

  return (
    <div
      id = "projects"
      name="Projects"
      className="w-screen flex items-center flex-col md:static pt-[5%]"
    >
      <h2 className="font-semibold text-[40px]">My Projects</h2>
      <div className="   gap-10 grid grid-cols-3 md:grid-cols-1 mt-[5%]">
        {projects.map((p) => (
          <div className="relative w-[300px] h-[220px]  border-red-100 border-spacing-1 border p-2 bg-[#42A5F5] ">
            <p className="text-white  text-[20px] font-serif">{p.title}</p>
            <img className="object-cover " src={p.projectsImageSrc} alt="" />
            <span className="flex flex-col  p-4 absolute hover:bg-[#2a6ba0] inset-0 items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-white sm:text-[12px]" >{p.description}</p>
              <div className="flex">
                <a className="ml-20 text-white p-1 duration-300 hover:bg-[#08090f] hover:rounded font-serif"href={p.githubLink}>Code</a>
                <a className="ml-12 text-white p-1 duration-300 hover:bg-[#08090f] hover:rounded font-serif" href={p.deployLink}>Deploy</a>
              </div>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
