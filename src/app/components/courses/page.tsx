import React from "react";
import Image from "next/image";
import Codeimage from "../assets/OIP.jpg"
import Course from "../assets/Online-courses.jpg" 


const Courses = () => {
    return(

    <div className="flex flex-col w-[100%] h-[1200px] bg-slate-900 font-sans gap-[20px]">
        <div className="w-[100%] h-[200px] relative">
        <div>
            <h1 className="font-bold text-[50px] text-[#ffffff] absolute top-[40px] pl-[20px]">OUR COURSES</h1>
        </div>

        <div className="flex">
            <p className="font-medium text-[25px] text-[#ffffff] absolute top-[120px] pl-[20px]">Empower your future with our expert-led courses, designed to equip <br /> you with in-demand skills.</p>
        </div>

        <div className="flex flex-col w-[1000px] h-[890px] absolute top-[310px] rounded-tr-[35%] bg-[#371671fa] gap-[20px] border-t-[12px] border-r-[12px]">
          
          <div className="flex absolute top-[120px] gap-[20px] hover:cursor-pointer">
            <h1 className="w-[150px] h-[80px] text-[40px] text-right pr-[40px] bg-yellow-600 rounded-r-[38%]">01</h1>
            <div className="flex flex-col gap-[10px]">
                    <h1 className="w-[250px] font-bold text-[25px] text-yellow-600 hover:text-[#58752a]">Web2 Using NextJS</h1>
                    <p className="w-[800px] h-[30px] font-medium text-[20px] text-white">W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs <br/> using Next.js 13 and Cloud Development Kit (CDK) for Terraform</p>
            </div>
             </div>

             <div className="flex absolute top-[330px] gap-[20px] hover:cursor-pointer">
    <h1 className="w-[150px] h-[80px] text-[40px] text-right pr-[40px] bg-yellow-600 rounded-r-[38%]">02</h1>
    <div className="flex flex-col gap-[10px]">
            <h1 className="w-[260px] font-bold text-[25px] text-yellow-600 hover:text-[#58752a]">Web 3 and Metaverse</h1>
            <p className="w-[800px] h-[30px] font-medium text-[20px] text-white">W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps</p>
    </div>
     </div>

     <div className="flex absolute top-[530px] gap-[20px] hover:cursor-pointer">
    <h1 className="w-[150px] h-[80px] text-[40px] text-right pr-[40px] bg-yellow-600 rounded-r-[38%]">03</h1>
    <div className="flex flex-col gap-[10px]">
            <h1 className="w-[80px] font-bold text-[25px] text-yellow-600 hover:text-[#58752a]">GenAI</h1>
            <p className="w-[800px] h-[30px] font-medium text-[20px] text-white">G-401: Introduction to Generative AI and LLMs</p>
    </div>
     </div>

     <div className="flex absolute top-[730px] gap-[20px] hover:cursor-pointer">
    <h1 className="w-[150px] h-[80px] text-[40px] text-right pr-[40px] bg-yellow-600 rounded-r-[38%]">04</h1>
    <div className="flex flex-col gap-[10px]">
            <h1 className="w-[260px] font-bold text-[25px] text-yellow-600 hover:text-[#58752a]">AI and Deep Learning</h1>
            <p className="w-[800px] h-[30px] font-medium text-[20px] text-white">AI-351: Developing Planet-Scale Intelligent APIs and Python Programming</p>
    </div>
     </div>

        </div>

        
        <div className="flex w-[700px] h-[510px] border-l-[12px] border-b-[12px] absolute left-[982px] rounded-bl-[30%]"></div>
        <Image src={Codeimage} alt="code" className="w-[690px] h-[500px] absolute left-[990px] rounded-bl-[30%]"/>
        </div>

        <div className="flex w-[615px] h-[615px] border-[15px] absolute top-[640px] left-[1050px] rounded-[20%]"></div>
        
    <Image src={Course} alt="course" className="w-[587px] h-[587px] absolute top-[655px] left-[1064px] rounded-[18%]"/>
    
    </div>
    );
};

export default Courses;