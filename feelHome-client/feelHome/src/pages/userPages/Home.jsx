import React from 'react'
import Navbar from '../../components/userComponents/homeComponents/Navbar'
import HomeNav from '../../components/userComponents/homeComponents/HomeNav'
import Banner from '../../components/userComponents/homeComponents/Banner'
import HomeData from '../../components/userComponents/homeComponents/homeData'


export const Home= () => {

  return (
    <div>
    <Navbar/>
    <HomeNav/>
    <Banner/>
    <HomeData/>

    </div>
  )
}
export default Home


