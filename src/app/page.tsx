import Image from 'next/image'

export default function Home() {
  return (
    <div className = "flex justify-center items-center h-screen w-screen">
           <Image  src = "/self-portrait.jpg" alt="Self Portrait" width={100} height = {50}>

          </Image>
    </div>
 
  )
}
