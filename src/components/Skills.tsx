import React from 'react'
import { BiLogoTailwindCss } from "react-icons/bi";
import { AiFillHtml5 } from "react-icons/ai";
import { SiNextdotjs } from "react-icons/si";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoCss3 } from "react-icons/bi";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import Marquee from "react-fast-marquee";

const Skills = () => {
  return (
    <div className=" bg-custom-black ">
    <Marquee>
      <BiLogoCss3 className="w-20 h-20  p-2 m-2 rounded-full" />
      <AiFillHtml5 className="w-20 h-20 p-2 m-2 rounded-full" />
      <BiLogoJavascript className="w-20 h-20 rounded-full p-2 m-2 " />
      <BiLogoReact className="w-[75px] h-[75px] p-2 m-2 rounded-xl" />
      <SiNextdotjs className="w-[75px] h-[75px] p-2 m-2 rounded-xl" />
      <BiLogoTailwindCss className="w-20 h-20 p-2 m-2 rounded-full" />
      <BiLogoTypescript className="w-20 h-20 rounded-full p-2 m-2" />
      <FaNode className="w-20 h-20 rounded-full p-2 m-2" />
      <SiMysql className="w-20 h-20 rounded-full p-2 m-2" />
    </Marquee>
  </div>
  )
}

export default Skills