import React from "react";
import Image from "next/image";
import HeadTeacher from "../assets/image-1.jpg";
import Teacher from "../assets/image-2.jpg";
import Teacher2 from "../assets/image-3.jpg";
import Teacher3 from "../assets/image-4.jpg";
import Teacher4 from "../assets/image-5.jpg";
import Teacher5 from "../assets/image-6.jpg";       
import { FaFacebookF } from "react-icons/fa"; 
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Faculty = () => {
    return(

        <div className="flex flex-col w-[100%] h-[1200px] bg-slate-900 gap-[20px]">
            <div className="w-[100%] h-[200px] relative">
        <div className="flex justify-center">
            <h1 className="font-sans font-semibold text-[50px] text-[#fa4d2ffa] absolute top-[40px] ">MEET OUR EXPERTS</h1>
        </div>

        <div className="flex justify-center">
            <p className="font-sans font-normal text-[20px] text-[#ffffff] absolute top-[140px]">Your Partners in <i className="text-[#fa4d2ffa] font-semibold text-[22px]">TECH WORLD</i> Excellence with there Expertise and Experience</p>
        </div>
        </div>

        <div className="grid grid-rows-3 grid-flow-col gap-[20px] justify-center items-center ">
            <div className="flex w-[780px] h-[300px] rounded-[20px] bg-[#ffffff] relative">
               
                <div className="w-[200px] absolute top-[30px] left-[20px]">
            <Image src={HeadTeacher} alt="our head-teacher" className="rounded-[100px] "/>
                </div>

                <div className="flex flex-col justify-center">
                    <div className="absolute top-[30px] left-[280px] text-[20px] text-[#525050] font-medium">
                        <h5>Head Teacher</h5>
                    </div>

                    <div className="absolute top-[80px] left-[280px] text-[30px] text-[#14897b] font-bold  hover:text-[#fa4d2ffa] hover:cursor-pointer">
                        <h1>Mubashir Ali</h1>
                    </div>

                    <div className="absolute top-[160px] left-[280px] text-[20px] text-[#343434] font-medium">
                        <p>Software Engineer | Typescript | NodeJS | ReactJS |<br/> Python | SQL | Docker | Kubernetes | AWS | CI/CD</p>
                        </div>

                    <div className="flex text-[20px] text-[#14897b] gap-[10px] relative">
                    <FaFacebookF className="absolute top-[100px] left-[280px]  hover:text-[#fa4d2ffa] hover:cursor-pointer"/>
                    <FaLinkedin className="absolute top-[100px] left-[340px]  hover:text-[#fa4d2ffa] hover:cursor-pointer" /> 
                    <FaTwitter className="absolute top-[100px] left-[420px]  hover:text-[#fa4d2ffa] hover:cursor-pointer" />
                    <BiLogoGmail className="absolute top-[100px] left-[500px]  hover:text-[#fa4d2ffa] hover:cursor-pointer" />
                    </div>
                </div>
            </div>

            <div className="w-[780px] h-[300px] rounded-[20px] bg-[#ffffff] relative">
            <div className="w-[200px] absolute top-[30px] left-[20px]">
    <Image src={Teacher} alt="our head-teacher" className="rounded-[100px] "/>
        </div>
        <div className="flex flex-col justify-center relative">
            <div className="absolute top-[30px] left-[280px] text-[20px] text-[#525050] font-medium">
                <h5>Teacher</h5>
            </div>
            <div className="absolute top-[70px] left-[280px] text-[30px] text-[#14897b] font-bold hover:text-[#fa4d2ffa] hover:cursor-pointer">
                <h1>Naeem Hussain</h1>
            </div>
            <div className="absolute top-[120px] left-[280px] text-[20px] text-[#343434] font-medium">
                <p>Need help with high-performance, secure, and interactive web solutions? Get in touch for modern web development with React, Next.js. Mern Stack Developer | express.js | MongoDB | Node.js</p>
                </div>
            <div className="flex text-[20px] text-[#14897b] gap-[10px] relative">
            <FaFacebookF className="absolute top-[255px] left-[280px]  hover:text-[#fa4d2ffa] hover:cursor-pointer"/>
            <FaLinkedin className="absolute top-[255px] left-[340px]  hover:text-[#fa4d2ffa] hover:cursor-pointer" /> 
            <FaTwitter className="absolute top-[255px] left-[420px]  hover:text-[#fa4d2ffa] hover:cursor-pointer" />
            <BiLogoGmail className="absolute top-[255px] left-[500px]  hover:text-[#fa4d2ffa] hover:cursor-pointer" />
            </div>
        </div>

            </div>

            <div className="w-[780px] h-[300px] rounded-[20px] bg-[#ffffff] relative">
            <div className="w-[200px] absolute top-[30px] left-[20px]">
    <Image src={Teacher2} alt="our head-teacher" className="rounded-[100px]  border-[1px] "/>
        </div>
        <div className="flex flex-col justify-center relative">
            <div className="absolute top-[30px] left-[280px] text-[20px] text-[#525050] font-medium">
                <h5>Teacher Assistant</h5>
            </div>
            <div className="absolute top-[70px] left-[280px] text-[30px] text-[#14897b] font-bold  hover:text-[#fa4d2ffa] hover:cursor-pointer">
                <h1>Amjad Ali</h1>
            </div>
            <div className="absolute top-[120px] left-[280px] text-[20px] text-[#343434] font-medium">
                <p>Software Engineer | Full-Stack Developer | Free Consultation | Freelancer | JavaScript | Typescript | tailwindcss |shadcn| |React.js | Redux | Next.js | Express.js | MongoDB</p>
                </div>
            <div className="flex text-[20px] text-[#14897b] gap-[10px] relative">
            <FaFacebookF className="absolute top-[255px] left-[280px]  hover:text-[#fa4d2ffa] hover:cursor-pointer"/>
            <FaLinkedin className="absolute top-[255px] left-[340px]  hover:text-[#fa4d2ffa] hover:cursor-pointer" /> 
            <FaTwitter className="absolute top-[255px] left-[420px]  hover:text-[#fa4d2ffa] hover:cursor-pointer" />
            <BiLogoGmail className="absolute top-[255px] left-[500px]  hover:text-[#fa4d2ffa] hover:cursor-pointer" />
            </div>
        </div>
            </div>

            <div className="w-[780px] h-[300px] rounded-[20px] bg-[#ffffff] relative">
            <div className="w-[200px] absolute top-[30px] left-[20px]">
    <Image src={Teacher3} alt="our head-teacher" className="rounded-[100px] "/>
        </div>
        <div className="flex flex-col justify-center relative">
            <div className="absolute top-[30px] left-[280px] text-[20px] text-[#525050] font-medium">
                <h5>Teacher Assistant</h5>
            </div>
            <div className="absolute top-[70px] left-[280px] text-[30px] text-[#14897b] font-bold  hover:text-[#fa4d2ffa] hover:cursor-pointer">
                <h1>Ayesha Siddiqua</h1>
            </div>
            <div className="absolute top-[130px] left-[280px] text-[20px] text-[#343434] font-medium">
                <p>Full Stack Wizard Crafting Seamless Digital Experiences: Lets Connect! Talks about #nextjs #typescript #tailwindcss #SEO</p>
                </div>
            <div className="flex text-[20px] text-[#14897b] gap-[10px] relative">
            <FaFacebookF className="absolute top-[255px] left-[280px]  hover:text-[#fa4d2ffa] hover:cursor-pointer"/>
            <FaLinkedin className="absolute top-[255px] left-[340px]  hover:text-[#fa4d2ffa] hover:cursor-pointer" /> 
            <FaTwitter className="absolute top-[255px] left-[420px]  hover:text-[#fa4d2ffa] hover:cursor-pointer" />
            <BiLogoGmail className="absolute top-[255px] left-[500px]  hover:text-[#fa4d2ffa] hover:cursor-pointer" />
            </div>
        </div>
            </div>

            <div className="w-[780px] h-[300px] rounded-[20px] bg-[#ffffff] relative">
            <div className="w-[200px] absolute top-[30px] left-[20px]">
    <Image src={Teacher4} alt="our head-teacher" className="rounded-[100px] "/>
        </div>
        <div className="flex flex-col justify-center relative">
            <div className="absolute top-[30px] left-[280px] text-[20px] text-[#525050] font-medium">
                <h5>Teacher Assistant</h5>
            </div>
            <div className="absolute top-[70px] left-[280px] text-[30px] text-[#14897b] font-bold  hover:text-[#fa4d2ffa] hover:cursor-pointer">
                <h1>Shaikh Abdul Sami</h1>
            </div>
            <div className="absolute top-[140px] left-[280px] text-[20px] text-[#343434] font-medium">
                <p>GenAI Enthusiast | Teaching Assistant @GIAIC | Web Dev. Lead @Google DSC-HU</p>
                </div>
            <div className="flex text-[20px] text-[#14897b] gap-[10px] relative">
            <FaFacebookF className="absolute top-[250px] left-[280px]  hover:text-[#fa4d2ffa] hover:cursor-pointer"/>
            <FaLinkedin className="absolute top-[250px] left-[340px]  hover:text-[#fa4d2ffa] hover:cursor-pointer" /> 
            <FaTwitter className="absolute top-[250px] left-[420px]  hover:text-[#fa4d2ffa] hover:cursor-pointer" />
            <BiLogoGmail className="absolute top-[250px] left-[500px]  hover:text-[#fa4d2ffa] hover:cursor-pointer" />
            </div>
        </div>
            </div>

            <div className="w-[780px] h-[300px] rounded-[20px] bg-[#ffffff] relative">
            <div className="w-[200px] absolute top-[30px] left-[20px]">
            <Image src={Teacher5} alt="our head-teacher" className="rounded-[100px] "/>
</div>
<div className="flex flex-col justify-center relative">
<div className="absolute top-[30px] left-[280px] text-[20px] text-[#525050] font-medium">
<h5 >Senior Teacher</h5>
</div>
<div className="absolute top-[70px] left-[280px] text-[30px] text-[#14897b] font-bold  hover:text-[#fa4d2ffa] hover:cursor-pointer">
<h1>Muhammad Imran Rafique</h1>
</div>
<div className="absolute top-[130px] left-[280px] text-[20px] text-[#343434] font-medium">
<p>Passionate Web Developer | Full-Stack Web Developer | Building Tailored Tech Solutions | Qatasoft Technology Service | Senior Teacher in GIAIC</p>
</div>
 <div className="flex text-[20px] text-[#14897b] gap-[10px] relative">
 <FaFacebookF className="absolute top-[255px] left-[280px]  hover:text-[#fa4d2ffa] hover:cursor-pointer"/>
 <FaLinkedin className="absolute top-[255px] left-[340px] hover:text-[#fa4d2ffa] hover:cursor-pointer" /> 
 <FaTwitter className="absolute top-[255px] left-[420px]  hover:text-[#fa4d2ffa] hover:cursor-pointer" />
 <BiLogoGmail className="absolute top-[255px] left-[500px] hover:text-[#fa4d2ffa] hover:cursor-pointer" />
 </div>
 </div>
 </div>
    
        
        </div>
        </div>
    );
};

export default Faculty;