import React from 'react'
import HeroSection from './components/HeroSection'
import { useProductContext} from './context/productContext'

const About = () => {
  const {myName} = useProductContext()
  const data = {
    name:"E~Ecommerce",
  }
  return (
    <>
    {myName}
    <HeroSection mydata={data}/>
    </>
  )
}

export default About