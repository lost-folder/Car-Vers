import React from 'react'
import CarModel from '../../components/Home/CarModel'
import HomeForm from '../../components/Home/HomeForm'
import PlanTrip from '../../components/Home/PlanTrip'
import Banner from "../../components/util/Banner"
import Banner2 from "../../components/util/Banner2"
import ChooseUs from "../../components/Home/chooseUs"
import ReviewSection from '../../components/Home/ReviewSection'
import FAQ from '../../components/Home/FAQ'
import Appbanner from '../../components/Home/Appbanner'

const HomePage = () => {
  return (
    <div  style={{ minHeight: '670px' }}>

    <Banner/>
    <HomeForm/>
    <PlanTrip/>
    <CarModel/>
    <Banner2/>
    <ChooseUs/>
    <ReviewSection/>
    <FAQ/>
    <Appbanner/>
        
      
    </div>
  )
}

export default HomePage