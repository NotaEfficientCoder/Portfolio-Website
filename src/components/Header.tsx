import Image from 'next/image'
import React from "react"
import Github from 'public/github.png'
import Linkedin from 'public/linkedin.png'


const Header=()=>{
    return(
        <div className = "w-full">
           <header className = "w-full p-2 h-[55px] flex flex-row items-center justify-between bg-sky-500">
           <h1 className = "font-sans ml-2 text-lg font-bold italic">Bhavya Shah</h1>
           <div className = "w-40 mr-5 flex items-center justify-between">
             <a href = "/Bhavya_Shah_Resume.pdf" target = "_blank" className="font-sans h-[28px] w-[65px] border-2 border-black text-black p-[3px] mt-1.5 hover:bg-black hover:text-sky-500 rounded-md">Resume</a>
             <a href="https://www.linkedin.com/in/shahbhavyakumar/" target="_blank">
              <Image className = "h-6 w-6 mt-3" src = {Linkedin} alt = "Linkedin" ></Image>
             </a>
             <a href="https://github.com/bh4vya" target="_blank">
              <Image className = "h-6 w-6 mt-3" src = {Github} alt = "Github" ></Image>
             </a>
           </div>
        </header>
        </div>
    )
}


export default Header