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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum mollitia tempore aperiam nam porro earum laudantium. Saepe quaerat laudantium iste tempore. Distinctio rem explicabo, ut cupiditate eligendi quam aliquam ullam ab ea. Corrupti aperiam adipisci quod, sed incidunt laboriosam officiis reiciendis sit nisi repellat sapiente qui maiores hic repudiandae voluptatum. Voluptatem odio, beatae excepturi impedit perspiciatis, explicabo inventore eveniet totam illum architecto fugit reprehenderit distinctio?
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
