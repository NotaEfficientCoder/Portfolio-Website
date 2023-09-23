import Image from "next/image";
import React from "react";
import Linkedin from "public/images/linkedin.png";
import {BsGithub} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs"

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
            className="font-poppins font-bold border-2 bg-white border-custom-black text-custom-black p-[11px] mt-2 hover:bg-black hover:text-white rounded-md"
          >
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/shahbhavyakumar/"
            target="_blank"
          >
            <BsLinkedin
              className="h-full border-2 rounded-md bg-custom-black border-custom-black w-12 mt-3"
              alt="Linkedin"
            />
          </a>
          <a href="https://github.com/bh4vya" target="_blank">
            <BsGithub
              className="h-full w-12 bg-custom-black border-2 border-custom-black rounded-full mt-3"
              alt="Github"
            />
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
