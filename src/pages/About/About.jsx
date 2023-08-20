import React from 'react'
import AboutBanner from "../../components/About/AboutrBanner"
import Banner3 from '../../components/About/banner3'
import MainBanner from '../../components/util/MainBanner'
const About = () => {
  return (
    <div style={{minHeight:'670px'}}>
    <MainBanner/>
    <AboutBanner/>
    <Banner3/>
  
    </div>
  )
}

export default About