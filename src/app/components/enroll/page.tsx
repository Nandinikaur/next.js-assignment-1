import React from "react";
import Image from "next/image"; 
import  Background from "../assets/bg_house.jpg";


const Enroll = () => {
    return(
       
        <div className="w-full h-[1200px] relative ">
                <Image src={Background} alt="background" className="w-full h-[1200px] blur-[5px]"/>
        

            <div className="flex flex-col justify-center items-center gap-[20px]">

       <div className="font-sans w-[1200px] h-[80px]  absolute top-[80px] font-bold text-[50px]">
        <h1>Enroll Now For Brighten Up Your Future With Us</h1>
       </div>

       <div className="font-sans absolute top-[200px] font-medium text-[30px] text-lime-950">
        <p>Tuition Free Education Program on Latest Technologies</p>
        </div>

       <div className="font-sans absolute top-[280px] font-medium text-[30px] text-cyan-950">
        <p>Certified Cloud Applied Generative AI Engineer (GenEng)</p>
       </div>

       </div>
         
         <div className="flex justify-center items-center gap-[30px]">
        <div className="w-[1000px] h-[700px] bg-[#d92404fa] rounded-[10px] absolute top-[400px] shadow-xl shadow-black opacity-[60%]">
            <form className="flex flex-col font-sans font-medium text-[18px] text-black gap-[10px]">
                <label>
                    <input type="text" placeholder="First name" required className="w-[47%] h-[50px] border-[1px] rounded-[5px] absolute top-[40px] left-[20px] placeholder-black placeholder-opacity-0.1"/>
                </label>
                <label>
                    <input type="text" placeholder="Last name" required className="w-[47%] h-[50px] border-[1px] rounded-[5px] absolute top-[40px] left-[510px] placeholder-black placeholder-opacity-0.1"/>
                </label>
                <label>
                    <input type="text" placeholder="Email" required className="w-[47%] h-[50px] border-[1px] rounded-[5px] absolute top-[120px] left-[20px] placeholder-black placeholder-opacity-0.1"/>
                </label>
                <label>
                    <input type="number" placeholder="phone" required className="w-[47%] h-[50px] border-[1px] rounded-[5px] absolute top-[120px] left-[510px] placeholder-black placeholder-opacity-0.1"/>
                </label>
                <label>
                    <input type="text" placeholder="Address" required className="w-[96%] h-[50px] border-[1px] rounded-[5px] absolute top-[200px] left-[20px] placeholder-black placeholder-opacity-0.1"/>
                </label>
                <label>
                    <input type="text" placeholder="City" required className="w-[96%] h-[50px] border-[1px] rounded-[5px] absolute top-[280px] left-[20px] placeholder-black placeholder-opacity-0.1"/>
                </label>
                <label>
                    <input type="text" placeholder="State" required  className="w-[47%] h-[50px] border-[1px] rounded-[5px] absolute top-[360px] left-[20px] placeholder-black placeholder-opacity-0.1"/>
                </label>
                <label>
                    <input type="text" placeholder="Zip" required className="w-[47%] h-[50px] border-[1px] rounded-[5px] absolute top-[360px] left-[510px] placeholder-black placeholder-opacity-0.1"/>
                </label>
                <label>
                    <input type="text" placeholder="Country" required className="w-[47%] h-[50px] border-[1px] rounded-[5px] absolute top-[420px] left-[20px] placeholder-black placeholder-opacity-0.1"/>
                </label>
                <label>
                    <input type="text" placeholder="Course" required className="w-[47%] h-[50px] border-[1px] rounded-[5px] absolute top-[420px] left-[510px] placeholder-black placeholder-opacity-0.1"/>
                    <label>
                        <input type="textarea" placeholder="Additional Info" required className="w-[96%] h-[130px] absolute top-[480px] left-[20px] rounded-[5px] placeholder-black placeholder-opacity-0.1"/> 
                    </label>
                </label>
                <button className="w-[200px] h-[50px] bg-[#ffffff] rounded-[5px] absolute top-[620px] left-[20px] text-[20px] text-[#d92404fa] font-bold hover:text-[#ffffff] hover:bg-[#e06650fa]">Enroll Now</button>
            </form>
        </div>
        </div>

        </div>
    );
};

export default Enroll;