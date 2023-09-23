import React from "react";
import Image from "next/image";


const About = () => {
  return (
    <div className="text-white bg-custom-black flex flex-col border-2 border-white justify-between">
      <div className=" m-2 rounded-lg chat chat-end ">
        <p className="m-5 mb-20 text-[20px] font-poppins chat-bubble">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam est eos molestiae nobis, facere ex aut animi rem ad voluptatibus magnam suscipit veniam deleniti dignissimos fugit beatae perferendis rerum doloribus dolores delectus, sed impedit, nulla commodi? Quis et natus quos ipsam illo enim earum recusandae nulla. Sapiente facere asperiores ipsa incidunt officia illo.
        </p>
        
        <div className="w-48 h-48 mt-16">
          <Image
            className="rounded-full relative object-cover"
            width={150}
            height={150}
            src="/bhavya.png"
            alt="bhavya"
          ></Image>
        </div>
    </div>


     
    </div>
  );
};

export default About;
