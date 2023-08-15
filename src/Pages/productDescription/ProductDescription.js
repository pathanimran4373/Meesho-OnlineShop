import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { ContextProvider } from '../../GlobalContext/Context/ProductContext';
import ImageDescription from './imageDescription';
import './ProductDescri.css'
import Star from './ratingStar';
import { Link } from 'react-router-dom'
import AddToCart from '../../componants/Cart/addCart';
// import { cartContextForCartPage } from '../../globalContext/CartContext'

function SingleProductpage() {


    const { SingleProductapi, GetProductDetail, isLoding } = useContext(ContextProvider);

    // const { addToCart } = useContext(cartContextForCartPage)
    // console.log(GetProductDetail)

    const { id: khan, name, image, price, category, stock, stars, reviews, description } = GetProductDetail;


    const { id } = useParams();
    const url = "https://api.pujakaitem.com/api/products";

    useEffect(() => {
        SingleProductapi(`${url}?id=${id}`);
    }, []);



    if (isLoding) {
        return <div><h1 style={{ color: "red" }}>Loding........</h1></div>
    }

    return (
        <>
            <div className='single-product-page'>

                {
                    <div className='productdetail-section' key={khan}>
                        <div className='image-description'>
                            <ImageDescription imgDetails={image} />
                        </div>
                        <div className='pd-details'>
                        <Link to='/'> <button className='home-btn'>HOME</button></Link>
                        {/* <button className='home-btn'><Link to='/'>HOME</Link></button> */}
                            <h2>{name} / <span>{category}</span></h2>

                            <span>Rs.{price}</span>
                            <p>{description}</p>
                            <Star stars={stars} reviews={reviews} />

                            <hr />
                            <b>Available : {stock > 0 ? "In Stock" : "Not Available"}</b>

                            <div>
                                {stock > 0 && <AddToCart product={GetProductDetail} />}
                            </div>
                        </div>

                    </div>
                }
            </div>

        </>
    )
}

export default SingleProductpage
