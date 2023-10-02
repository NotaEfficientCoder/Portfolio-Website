import React from 'react'
import Image from 'next/image'
import Ageis from 'public/images/ageis.png'
import Steam from 'public/images/steam.png'

const Experience = () => {
  return (
    <div className='text-white border-2  border-white bg-custom-black'>Experience
      <Image className = "bg-white" alt = "Ageis" src = {Ageis} width = {150} height = {150}></Image>
      <Image src = {Steam} width= {150} height={150} alt = "steam"></Image>
    </div>
  )
}

export default Experience