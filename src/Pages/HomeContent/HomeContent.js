import React from 'react'
import HomePage from '../../componants/HomePage/HomePage'
import Carosal from '../../componants/carousel/Carousal'
import Product from '../Products/Products'
import Footer from '../../componants/Footer/Footer'
const HomeContent = () => {
  return (
    <>
      <HomePage/>
      <Carosal/>
      <Product/>
      <Footer/>
    </>
  )
}

export default HomeContent
