import React from "react";
import { BiLogoTailwindCss } from "react-icons/bi";
import { AiFillHtml5 } from "react-icons/ai";
import { SiNextdotjs } from "react-icons/si";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoCss3 } from "react-icons/bi";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { BiLogoUnity } from "react-icons/bi";
import { BiLogoPython } from "react-icons/bi";
import { BiLogoJava } from "react-icons/bi";
import { BiLogoCPlusPlus } from "react-icons/bi";
import { FiFigma } from "react-icons/fi";
import { FaBootstrap } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { BiLogoSass } from "react-icons/bi";
import { BsGit } from "react-icons/bs";
import {SiCsharp} from "react-icons/si"
import {BiLogoShopify} from "react-icons/bi"
import Marquee from "react-fast-marquee";

const Skills = () => {
  return (
    <div className=" bg-custom-black ">
      <Marquee>
        <BiLogoCss3 className="w-20 h-20  p-2 m-2 rounded-full" />
        <AiFillHtml5 className="w-20 h-20 p-2 m-2 rounded-full" />
        <BiLogoJavascript className="w-20 h-20 rounded-full p-2 m-2 " />
        <BiLogoReact className="w-20 h-20 p-2 m-2 rounded-full" />
        <SiNextdotjs className="w-20 h-20 p-2 m-2 rounded-full" />
        <BiLogoTailwindCss className="w-20 h-20 p-2 m-2 rounded-full" />
        <BiLogoTypescript className="w-20 h-20 rounded-full p-2 m-2" />
        <FaNode className="w-20 h-20 rounded-full p-2 m-2" />
        <SiMysql className="w-20 h-20 rounded-full p-2 m-2" />
        <BiLogoUnity className="w-20 h-20 rounded-full p-2 m-2" />
        <BiLogoPython className="w-20 h-20 rounded-full p-2 m-2" />
        <BiLogoJava className="w-20 h-20 rounded-full p-2 m-2" />
        <BiLogoCPlusPlus className="w-20 h-20 rounded-full p-2 m-2" />
        <SiCsharp className="w-20 h-20 rounded-full p-2 m-2"/>
        <FaBootstrap className="w-20 h-20 rounded-full p-2 m-2" />
        <BiLogoMongodb className="w-20 h-20 rounded-full p-2 m-2" />
        <BiLogoSass className="w-20 h-20 rounded-full p-2 m-2" />
        <FiFigma className="w-20 h-20 rounded-full p-2 m-2" />
        <BsGit className="w-20 h-20 rounded-full p-2 m-2" />
        <BiLogoShopify className="w-20 h-20 rounded-full p-2 m-2"/>
        
      </Marquee>
    </div>
  );
};

export default Skills;
