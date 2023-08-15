import React from 'react'
// import './Homepage.css'

function Home() {
  return (
   <>
     <div class="lowestpriceContainer">
        <div class="lowestPrice_texe">
            <h1>Lowest Prices </h1>
            <h1>Best Quality Shopping</h1>
            <div class="lowestPriceWhay">
                <div class="lowestpriceItem">
                    <div class="lowestprice_icon">
                        <img src="https://images.meesho.com/images/pow/freeDelivery.svg" alt='product_image'/>
                    </div>
                    <p>Free Delivery</p>
                </div>

                <div class="lowestpriceItem">
                    <div class="lowestprice_icon">
                        <img src="https://images.meesho.com/images/pow/cod.svg" alt='product_image'/>
                    </div>
                    <p>Cash on Delivery</p>
                </div>

                <div class="lowestpriceItem">
                    <div class="lowestprice_icon">
                        <img src="https://images.meesho.com/images/pow/easyReturns.svg" alt='images'/>
                    </div>
                    <p>Easy Returns</p>
                </div>
            </div>

            <button class="downlodApp_Container">
                <div class="downloadAppIcon">
                    <img src="https://images.meesho.com/images/pow/playstoreSmallIcon.webp" alt='images'/>
                </div>
                <p> Download the Meesho App </p>
            </button>




        </div>
        <div class="lowestPrice_image">
            <img src="https://images.meesho.com/images/marketing/1631722939962.webp" alt='images'/>

        </div>
    </div>

   </>
  )
}

export default Home
