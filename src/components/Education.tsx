import React from 'react';
import Image from 'next/image';
import Mac from 'public/images/mac.png'

const Education = () => {
  return (
    <div className='text-white bg-custom-black border-2 border-white '>Education
    
    <Image alt = "McMaster" src = {Mac} width = {150} height = {150}></Image>
    </div>
    
  )
}

export default Education