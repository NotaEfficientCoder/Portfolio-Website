import React from 'react'
import Image from 'next/image'
import {BiLogoTailwindCss} from 'react-icons/bi'

const About = () => {
  return (
    <div className='text-white bg-red-500 h-1/5 flex flex-row justify-between '>
        <div className='justify-start w-1/2'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat voluptatum adipisci maxime? Exercitationem cum unde blanditiis ipsam illum tenetur labore eum aut natus. Dignissimos, dolore magnam voluptatum nostrum magni vel reiciendis perspiciatis sint odio quibusdam accusantium ducimus, doloremque dolorum incidunt eveniet praesentium. Doloremque sed perferendis recusandae ad explicabo dicta, veniam commodi officia id sint facere repellendus. Ratione maiores omnis impedit facere fugiat, vitae modi excepturi, architecto quisquam cum laboriosam ipsum officiis, maxime doloremque. Sit facilis accusamus placeat voluptatibus rerum culpa molestiae odio dolorem architecto neque officiis expedita recusandae, magni, blanditiis repudiandae aliquid totam. Vitae quisquam veritatis maiores optio fuga iusto velit asperiores amet cupiditate.</p>
        </div>
        <div className = "border-2 border-black w-1/2">
            <BiLogoTailwindCss/>
        </div>
        <div className='w-48 h-48 justify-center overflow-hidden'>
            <Image className = "rounded-full relative object-cover" width = {170} height= {170} src = "/bhavya.png" alt = "bhavya" ></Image>
        </div>
    </div>
  )
}

export default About
