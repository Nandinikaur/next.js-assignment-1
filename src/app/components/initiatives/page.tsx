import React from "react";
import Image from "next/image";
import Work1 from "../assets/initiative-1.jpg";
import Work2 from "../assets/initiative-2.jpg";
import Work3 from "../assets/initiative-3.jpg";
import Work4 from "../assets/initiative-4.jpg";

const Initiatives = () => {
    return(
        <div className="flex flex-col w-[100%] h-[1200px] bg-slate-900 font-sans gap-[30px]">
        
        <div className="flex justify-center items-center py-[50px]">
            <h1 className="text-center text-white text-[60px] font-semi-bold">Our Initiatives</h1>
        </div>

    <div className="flex flex-col gap-[20px] justify-center items-center">

        <div className="flex flex-row w-[80%] h-[200px] justify-center">
            <div className="flex justify-end w-[350px] h-[200px] bg-orange-600">
                <Image src={Work1} alt="initiatives" className="w-[300px] h-[200px]"/>
            </div>

            <div className="flex flex-col justify-center pl-[15px] w-[1000px] bg-[#426517] gap-[20px]">
            <h1 className="text-white text-[30px]">Tuition Free Education Program on Latest Technologies</h1>
                <p className="w-[1000px] text-white text-[18px]">Governor Sindh Kamran Khan Tassorri pioneering initiative offers free IT courses to empower youth with in-demand skills. Bridging the digital divide, one code at a time.</p>
            </div>
        </div>

        <div className="flex flex-row w-[80%] h-[200px] justify-center">
     <div className="flex justify-end w-[350px] h-[200px] bg-orange-600">
         <Image src={Work2} alt="initiatives" className="w-[300px] h-[200px]"/>
     </div>
     <div className="flex flex-col justify-center pl-[15px] w-[1000px] bg-[#426517] gap-[20px]">
     <h1 className="text-white text-[30px]">Grocery Aid</h1>
         <p className="w-[1000px] text-white text-[18px]">The Governor of Sindh has launched a compassionate initiative to distribute essential groceries to underprivileged families, aiming to alleviate the burden of rising living costs. This effort underscores a commitment to supporting vulnerable communities and promoting social welfare across the province.</p>
     </div>
 </div>

 <div className="flex flex-row w-[80%] h-[200px] justify-center">
     <div className="flex justify-end w-[350px] h-[200px] bg-orange-600">
         <Image src={Work3} alt="initiatives" className="w-[300px] h-[200px]"/>
     </div>
     <div className="flex flex-col justify-center pl-[15px] w-[1000px] bg-[#426517] gap-[20px]">
     <h1 className="text-white text-[30px]">Bell of Hope</h1>
         <p className="w-[1000px] text-white text-[18px]">The Bell of Hope initiative to assist individuals seeking help with jobs, finances, education, medical needs, and other challenges. This program aims to provide comprehensive support and solutions to improve lives and foster community well-being.</p>
     </div>
 </div>

 <div className="flex flex-row w-[80%] h-[200px] justify-center">
     <div className="flex justify-end w-[350px] h-[200px] bg-orange-600">
         <Image src={Work4} alt="initiatives" className="w-[300px] h-[200px]"/>
     </div>
     <div className="flex flex-col justify-center pl-[15px] w-[1000px] bg-[#426517] gap-[20px]">
     <h1 className="text-white text-[30px]">Green Initiative</h1>
         <p className="w-[1000px] text-white text-[18px]">A tree plantation drive to enhance greenery and combat environmental challenges. This effort promotes a healthier ecosystem and a sustainable future for a better Pakistan.</p>
     </div>
 </div>
    
    </div>
    
        </div>
    );
};

export default Initiatives;