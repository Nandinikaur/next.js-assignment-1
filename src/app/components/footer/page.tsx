import React from "react"

const Footer = () => {
    return (
        <div className="w-[100%] h-[160px] bg-slate-950 font-sans relative">
              <div className="flex justify-center tracking-widest ">
                <p className="font-normal absolute top-[55px] text-[18px] text-white">Assignment given by Sir Mubashir</p>
            </div>

            <div className="flex justify-center place-items-center">
            <div className="w-[85%] border-[1px] border-[#2d2a2a] absolute top-[90px]"></div>
            </div>
            <div className="flex justify-center tracking-widest ">
                <p className="absolute top-[100px] font-normal text-[15px] text-white">All Rights Reserved © 2024</p>
                
            <p className="font-normal absolute top-[120px] text-[15px] text-white">Made by Nandini Kaur</p>
            </div>
        
         </div>
    );

};

export default Footer