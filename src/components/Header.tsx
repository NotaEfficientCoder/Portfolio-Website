import Image from "next/image";
import React from "react";
import Linkedin from "public/images/linkedin.png";
import {AiFillGithub} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"

const Header = () => {
  return (
    <div className="w-full">
      <header className="w-full p-2 h-[90px] flex flex-row items-center justify-between bg-custom-dark-red">
        <h1 className="font-greatvibe ml-2 text-5xl font-bold italic">
          Bhavya Shah
        </h1>
        <div className="w-1/2 mr-3 h-full flex  items-center justify-end gap-6 ">
          <a
            href="/Bhavya_Shah_Resume.pdf"
            target="_blank"
            className="font-sans border-2 border-white text-white p-2 mt-2 hover:bg-black hover:text-white rounded-md"
          >
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/shahbhavyakumar/"
            target="_blank"
          >
            <AiFillLinkedin className="h-full rounded-lg w-12 mt-3" alt="Linkedin"/>
            {/* <Image
              className="h-full w-12 bg-white rounded-lg mt-3"
              src={Linkedin}
              alt="Linkedin"
            ></Image> */}
          </a>
          <a href="https://github.com/bh4vya" target="_blank">
            {/* <Image className="h-full bg-white rounded-lg w-12 mt-3" alt="Github"></Image> */}
            <AiFillGithub className="h-full rounded-lg w-12 mt-3" alt="Github"/>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
