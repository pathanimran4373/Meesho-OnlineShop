import React, { useState, useEffect } from 'react'
import './carosal.css'
import { Link } from 'react-router-dom';

function Carosal() {
    const [CurrentIndex, SetCurrentIndex] = useState(0);

    const item = [
        {
            id: 1, content:
                <div className="topCategoriesImage">
                    <img src="https://images.meesho.com/images/marketing/1649760442043.webp" alt='product_image'/>
                    <img src="https://images.meesho.com/images/marketing/1649760423313.webp" alt='product_image'/>
                    <img src="https://images.meesho.com/images/marketing/1649759799809.webp" alt='product_image'/>
                </div>


        },
        {
            id: 2, content:
                <div className="essentialContainer">
                    <img src="https://images.meesho.com/images/marketing/1664368165450.webp" className="essen_btn" alt='product_image'/>

                    <div className="essential_item">
                        <img src="https://images.meesho.com/images/marketing/1649760808952.webp" alt='product_image'/>
                        <img src="https://images.meesho.com/images/marketing/1664364866805.webp" alt='product_image'/>
                    </div>

                    <div className="essential_item">
                        <img src="https://images.meesho.com/images/marketing/1649760703179.webp" alt='product_image'/>
                        <img src="https://images.meesho.com/images/marketing/1664364917657.webp" alt='product_image'/>
                    </div>

                    <div className="essential_item">
                        <img src="https://images.meesho.com/images/marketing/1649760786763.webp" alt='product_image'/>
                        <img src="https://images.meesho.com/images/marketing/1664364898513.webp" alt='product_image'/>
                    </div>
                </div>
        },
        {
            id: 3, content:
                <div className="becomeSellerBanner_Container">
                    <img src="https://images.meesho.com/images/pow/downloadBannerDesktop.webp" className="becomeSellerBanner" alt='product_image'/>
                    <div className="becomeSeller_content">

                        <div className="becomeSeller_Content_Content">
                            <h2>Become a Reseller and</h2>
                            <h1>Start your Online Business
                                with Zero Investment</h1>
                            <div className="becomerSeller_appDownload_Container">
                                <Link className="becomeseller_AppDownlod">
                                    <img src="https://images.meesho.com/images/pow/playstoreIcon.webp" alt='product_image'/>
                                </Link>

                                <Link className="becomeseller_AppDownlod">
                                    <img src="https://images.meesho.com/images/pow/appstoreIcon.webp" alt='product_image'/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>


        }];



    useEffect(() => {
        const id = setInterval(() => {
            SetCurrentIndex((CurrentIndex + 1) % item.length);

        }, 3000);

        setInterval(id);
        return () => clearInterval(id);

    }, [CurrentIndex, item.length])

    return (
        <>
            <div className="topCategoriesHeading">
                <span className="horizontalLine"></span>
                <h1>Top Categories to choose from</h1>
                <span className="horizontalLine"></span>
            </div>
            <div className='Row' >

                {
                    item.map((itemContent, index) => {
                        const isActive = index === CurrentIndex;
                        const slide = `topCategoriesFrom ${isActive ? 'active' : ''}`
                        return (
                            <div className={slide} key={itemContent.id}>
                                {
                                    itemContent.content
                                }
                            </div>)
                    })
                };
            </div>
            <div className="Meesho_Supplier_Container">
            <img src="https://images.meesho.com/images/pow/supplyBannerDesktop.webp" alt='product_image'/>
            <div className="Meesho_Supplier_container_content">
                <div className=" Meesho_Supplier_content">
                    <h1>Register as a Meesho Supplier</h1>
                    <p>Sell your products to crores of customers at 0% commission</p>
                    <div className="Meesho_Supplier_benifit_Container">
                        <div className="mesho_supplier-benifit">
                            <img className="meesho_benifit_Image"
                                src="https://cdn-icons-png.flaticon.com/128/6459/6459980.png" alt='product_image'/>
                            <p>Grow your business 10</p>

                        </div>
                        <div className="mesho_supplier-benifit">
                            <img className="meesho_benifit_Image"
                                src="https://cdn-icons-png.flaticon.com/128/6459/6459980.png" alt='Product_image'/>
                            <p>Enjoy 100% Profit</p>
                        </div>
                        <div className="mesho_supplier-benifit">
                            <img className="meesho_benifit_Image"
                                src="https://cdn-icons-png.flaticon.com/128/6459/6459980.png" alt='Product_image'/>
                            <p>Sell all over Indi</p>
                        </div>
                    </div>
                    <Link  className="Signup_btn_now">Sign up now</Link>
                </div>

            </div>
        </div>


        </>

    )
}


export default Carosal
