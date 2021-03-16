import React, {useState} from 'react'
import Footer from '../components/Footer/Index'
import Hero from '../components/HeroSection/Hero'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data'
import Info from '../components/InfoSection/Info'
import Navbar from '../components/Navbar/Navbar'
import Services from '../components/Services/Index'
import Sidebar from '../components/Sidebar/Sidebar'



const Home = () => {

    const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () =>{

        setIsOpen(!isOpen)
    }

    return (
        <>
          <Sidebar isOpen= {isOpen} toggle={toggle}/>
          <Navbar toggle = {toggle}/> 
          <Hero/> 
          <Info {...homeObjOne} />
          <Services/>
          <Info {...homeObjThree} />
          <Info {...homeObjTwo} />
          <Footer/>
        </>
    )
}

export default Home
