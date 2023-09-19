import React from "react";
import Image from "next/image";
import { BiLogoTailwindCss } from "react-icons/bi";
import { AiFillHtml5 } from "react-icons/ai";
import { SiNextdotjs } from "react-icons/si";

const About = () => {
  return (
    <div className="text-white bg-red-500 h-1/5 flex flex-row justify-between ">
      <div className="justify-start w-1/2">
        <p className="font-sans m-5">
          Hello, I'm Bhavya Shah, a passionate and driven engineer with a
          diverse skill set and a love for problem-solving. I'm currently
          pursuing a Bachelor of Engineering in Mechatronics at McMaster
          University, where I maintain a strong academic record with a GPA of
          3.9. My journey in the world of technology and innovation has been
          nothing short of exhilarating, and I'm excited to share my experiences
          with you. One of my newly discovered passions is front-end web development
          and I have created this website as a sample for you. Mechanical engineering 
          is the absolute worst stream and I hope all mech profs rm -rf life. This is
          the most responsive website... I know
        </p>
      </div>
      <div className="w-1/2 flex flex-row">
        <BiLogoTailwindCss className="w-20 h-20 bg-blue-500 p-2 m-2 rounded-full" />
        <AiFillHtml5 className="w-20 h-20 bg-orange-500 p-2 m-2 rounded-full" />
        <SiNextdotjs className="w-[75px] h-[75px] p-2 m-2 bg-black rounded-xl" />
      </div>
      <div className="w-48 h-48 justify-center overflow-hidden">
        <Image
          className="rounded-full relative object-cover"
          width={170}
          height={170}
          src="/bhavya.png"
          alt="bhavya"
        ></Image>
      </div>
    </div>
  );
};

export default About;
