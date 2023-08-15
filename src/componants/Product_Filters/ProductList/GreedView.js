import { SearchContextProvider } from '../../../GlobalContext/Context/FilterProducts'
import { useContext } from 'react'
import { Link } from 'react-router-dom'


const Product = () => {
    const { ProductpageData } = useContext(SearchContextProvider)

    return (
        <>
            <div className='greed-section'>
                {
                    ProductpageData.map((element) => {
                        return (
                            <Link style={{textDecoration:"none"}} className='product-link' to={`/productdetail/${element.id}`}>

                            <div className='greed-product-box' key={element.id}>
                                <figure>
                                    <img className='product-image' src={element.image} alt="product" />
                                </figure>

                                <h3>{element.name}</h3>
                                <div className='cart-btn'>
                                    <p>$.{element.price}</p>
                                        <button className='view-btn'>view details</button>

                                </div>
                            </div>
                            </Link>

                        )
                    })
                }
            </div>
        </>

    )
}

export default Product
