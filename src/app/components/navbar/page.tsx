import Link from "next/link";
import { FaSearch } from "react-icons/fa";


const Navbar = () => {
    return(
      <header className="flex w-[100%] h-[80px] justify-between gap-[40px] bg-slate-950"> 
        <h1 className="flex w-[200px] h-[80px] text-[35px] font-bold text-center items-center justify-center text-white">Tech World</h1>
          <nav className="flex w-[900px] font-medium text-[20px] items-center justify-between">
    <Link className=" text-[#cbc7c7] hover:text-[#ffffff]" href= "../">Home</Link>
    <Link className=" text-[#cbc7c7] hover:text-[#ffffff]" href="../components/faculty">Faculty</Link>
    <Link className=" text-[#cbc7c7] hover:text-[#ffffff]" href="../components/courses">Courses</Link>
    <Link className=" text-[#cbc7c7] hover:text-[#ffffff]" href="../components/initiatives">Initiative</Link>
    <Link className=" text-[#cbc7c7] hover:text-[#ffffff]" href="../components/enroll">Enroll</Link>
  </nav> 
  
  <div className=" flex justify-center w-[80px] font-semibold">
  <FaSearch className="h-[75px] text-[#cbc7c7] text-[28px] hover:text-[#ffffff]"/>
 </div>

  </header> 
    )
};

export default Navbar;