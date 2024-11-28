import React from "react";
import Image from "next/image";
import CodeImage from "../assets/codeImage.jpg";
import { FaFacebookF } from "react-icons/fa"; 
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const Main = () => {
  return (
  <div className="flex flex-col w-full h-[1200px] gap-[10px]"> 
 <div className=" w-[100%] h-[832px] bg-slate-900 relative">
     <div className="w-[600PX] h-[832px]">
        <Image src= {CodeImage} alt="Governer Sindh Image" className="w-[500px] h-[832px] absolute left-[35%]"/>
        </div>

<div>
<h1 className="text-[100px] font-mono font-bold text-[#ffffff] absolute top-[06px] left-[40px]">THE <i className="text-[#fa4d2ffa]">NEW <br/> UNIVERSE</i><br/> OF TECH</h1>
</div> 

    <div className="w-[200px] h-[50px]">
    <h1 className="text-[#fa4d2ffa] text-[40px] absolute top-[250px] left-[1450px]">Skill Up, Level Up</h1>
    </div>

    <div className="flex w-[600px] h-[40px] text-center">
    <p className="text-[#FFFFFF] text-[30px] absolute top-[350px] left-[1220px]">Discover, learn, and master. Unlock your hidden potential<br/> and transform your life. The to grow is with you<br/> - ignite it!
      </p>
    </div>

    <div>
        <button className="w-[200px] h-[50px] text-[#fa4d2ffa] text-[25px] underline absolute top-[750px] left-[1250px] hover:text-[#FFFFFF] ">Learn More</button>
    </div>
  
<div>
 <FaYoutube className="text-[#c5c3c3] text-[25px] absolute top-[765px] right-[260px] hover:text-[#ffffff]" />
 <FaFacebookF className="text-[#c5c3c3] text-[25px] absolute top-[765px] right-[206px] hover:text-[#ffffff] "/>
 <FaTwitter className="text-[#c5c3c3] text-[25px] absolute top-[765px] right-[150px] hover:text-[#ffffff] "/>
 <CgMail className="text-[#c5c3c3] text-[30px] absolute top-[765px] right-[90px] hover:text-[#ffffff] "/>
</div>
</div>
 
 <div className="flex flex-col justify-center text-center w-full h-[348px] text-[#ffffff] bg-slate-800 relative">
<div>
  <h1 className="font-bold font-sans text-[30px] absolute top-[30px] px-[40px]">Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur Developing Billion-Dollar Valued Developers and Solopreneurs</h1>
</div>

<div>
  <p className="font-medium font-sans text-[20px] absolute top-[160px] px-[20px]">
  The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other team members.</p>
  </div>
  </div>
</div>
  );
};

export default Main;