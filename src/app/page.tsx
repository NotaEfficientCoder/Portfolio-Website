import Image from 'next/image'
import Github from 'public/github.png'
import Linkedin from 'public/linkedin.png'



export default function Home() {
  return (
    <div>
        <header className = "header">
           <div className = "name">Bhavya Shah</div>
           <div className = "right-side">
             <a href = "/Bhavya_Shah_Resume.pdf" target = "_blank"className="resume-button">Resume</a>
             <a href="https://www.linkedin.com/in/shahbhavyakumar/" target="_blank">
              <Image className = "github-icon" src = {Linkedin} alt = "Linkedin" ></Image>
             </a>
             <a href="https://github.com/bh4vya" target="_blank">
              <Image className = "github-icon" src = {Github} alt = "Github" ></Image>
             </a>
           </div>
        </header>
       
    </div>

    
  )
}

