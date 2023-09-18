import About from '@/components/About'
import Contact from '@/components/Contact'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Header from '@/components/Header'
import Projects from '@/components/Projects'
import Image from 'next/image'
import Github from 'public/github.png'
import Linkedin from 'public/linkedin.png'


export default function Home() {
  return (
    <div className="w-full h-screen">
        <Header/>
        <About/>
        <Education/>
        <Experience/>
        <Projects/>
        <Contact/>
    </div>

    
  )
}

