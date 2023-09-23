import React from "react";
import Image from "next/image";
import { BiLogoTailwindCss } from "react-icons/bi";
import { AiFillHtml5 } from "react-icons/ai";
import { SiNextdotjs } from "react-icons/si";
import {BiLogoJavascript} from "react-icons/bi";
import {BiLogoCss3} from "react-icons/bi";
import {BiLogoReact} from "react-icons/bi";
import {BiLogoTypescript} from "react-icons/bi";
import {SiMysql} from "react-icons/si"
import {FaNode} from "react-icons/fa"
import Marquee from "react-fast-marquee";


const About = () => {
  return (
    <div className="text-white bg-custom-black h-1/5 flex flex-row justify-between ">
      <div className="justify-start w-1/2  border-white border-2">
        <p className="m-5 text-[20px] font-poppins">
          Hi, my name is Bhavya and Im retarded
        </p>
      </div>
      <div className="w-1/2 flex flex-row ">
        <Marquee>
          <BiLogoCss3 className="w-20 h-20 bg-blue-500 p-2 m-2 rounded-full"/>
          <AiFillHtml5 className="w-20 h-20 bg-orange-500 p-2 m-2 rounded-full" />
          <BiLogoJavascript className = "w-20 h-20 rounded-full p-2 m-2 bg-yellow-500"/>
          <BiLogoReact className="w-[75px] h-[75px] p-2 m-2 bg-blue-400 rounded-xl" />
          <SiNextdotjs className="w-[75px] h-[75px] p-2 m-2 bg-black rounded-xl" />
          <BiLogoTailwindCss className="w-20 h-20 bg-blue-500 p-2 m-2 rounded-full" />
          <BiLogoTypescript className = "w-20 h-20 rounded-full p-2 m-2 bg-yellow-500"/>
          <FaNode className = "w-20 h-20 rounded-full p-2 m-2 bg-green-500"/>
          <SiMysql className = "w-20 h-20 rounded-full p-2 m-2 bg-orange-500"/>
          <BiLogoJavascript className = "w-20 h-20 rounded-full p-2 m-2 bg-yellow-500"/>
        </Marquee>
      </div>
      <div className="w-48 h-48  justify-center overflow-hidden  border-white border-2">
        <Image
          className="rounded-full relative object-cover"
          width={150}
          height={150}
          src="/bhavya.png"
          alt="bhavya"
        ></Image>
      </div>
    </div>
  );
};

export default About;
