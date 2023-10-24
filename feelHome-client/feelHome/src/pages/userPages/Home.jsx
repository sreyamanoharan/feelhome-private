import React from 'react'
import Navbar from '../../components/userComponents/homeComponents/Navbar'
import HomeNav from '../../components/userComponents/homeComponents/HomeNav'
import Banner from '../../components/userComponents/homeComponents/Banner'


export const Home= () => {
  return (
    <div>
    <Navbar/>
    <HomeNav/>
    <Banner/>
    </div>
  )
}
export default Home


