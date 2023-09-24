import Image from "next/image";
import React from "react";
import { BiLogoGithub } from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs";

const Header = () => {
  return (
    <div className="w-full">
      <header className="w-full p-2 h-[90px] flex flex-row items-center justify-between bg-custom-dark-red">
        <h1 className="font-greatvibe text-custom-black ml-9 text-5xl font-semibold">
          Bhavya Shah
        </h1>
        <div className="w-1/2 mr-3 h-full flex  items-center justify-end gap-6 ">
          <a
            href="/Bhavya_Shah_Resume.pdf"
            target="_blank"
            className="font-poppins font-extrabold border-[4px] bg-white border-custom-black text-custom-black p-[10px] pb-[10.5px] mt-[10px] hover:bg-custom-black hover:border-white hover:text-white rounded-md"
          >
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/shahbhavyakumar/"
            target="_blank"
          >
            <BsLinkedin
              className="h-full w-12  bg-custom-black  border-[4px] border-custom-black mt-3  hover:bg-white hover:border-white hover:text-black rounded-lg"
              alt="Linkedin"
            />
          </a>
          <a href="https://github.com/bh4vya" target="_blank">
            <BiLogoGithub
              className="h-full w-12 bg-custom-black   mt-3  hover:bg-white hover:text-black rounded-full"
              alt="Github"
            />
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
