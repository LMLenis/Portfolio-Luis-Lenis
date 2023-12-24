import React from "react";
import pmp from "../../assets/certificates/PMP.png";
import scrum from "../../assets/certificates/SCRUM Master.png";
import aws from "../../assets/certificates/Cloud Computing.png";
import itil from "../../assets/certificates/itil.png";


const Certificate = () => {
  const certificates = [
    {
      name: "pmp",
      hrefcredly: "https://drive.google.com/file/d/1VAXXg_BXHIanvG8uFQ9JMAWTRAitzItA/view",
      imageSrc: pmp,
    },
    {
      name: "scrum",
      hrefcredly: "https://drive.google.com/file/d/1sWW510eO1qdQAdWiB0Yzet4pmSriGCU6/view",
      imageSrc: scrum,
    },
    {
      name: "aws",
      hrefcredly: "https://www.credly.com/earner/earned/badge/4bf1ca96-a283-433c-b65c-1fc858cea0db",
      imageSrc: aws,
    },
    {
      name: "itil",
      hrefcredly: "https://drive.google.com/file/d/1ITr2rlURxqNpNpp5SzoQM_RDuEFugUOI/view",
      imageSrc: itil,
    },
  ];

  return (
    <div
        id = "certificate"
      name="certificate"
      className=" h-screen w-screen flex items-center flex-col sm:pt-[200%] md:w-screen pt-[10%]"
    >
      <h2 className="font-semibold text-[40px]">Certificates</h2>
      <div className="grid-cols-4 gap-4 grid md:grid-cols-1 mt-[5%] pt-[3%] pb-[10%]">
        {certificates.map((t) => (
          <div key={t.name} className="w-[260px] h-[260px] right-0 mt-4 flex duration-300 hover:mr-4">
            <a href={t.hrefcredly}>
            <img src={t.imageSrc} alt="certificate" className="object-cover" />
            </a>
          </div>
        ))}
      </div>
      
    </div>
    
  );
};

export default Certificate;
