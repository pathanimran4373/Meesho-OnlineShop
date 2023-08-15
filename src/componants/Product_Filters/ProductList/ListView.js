import React from 'react'
import { Link } from 'react-router-dom'
import { SearchContextProvider } from '../../../GlobalContext/Context/FilterProducts'
import { useContext } from 'react'
import "./List.css"


const ListView = () => {

  const { ProductpageData } = useContext(SearchContextProvider)

  return (
    <div className='list-section-product'>
      {
        ProductpageData.map((element) => {
          return (

            <div key={element.id}>
              <Link style={{ textDecoration: "none" }} to={`/productdetail/${element.id}`}>
                <div className='list-product-box'>
                  <figure className='figure-tag'>
                    <img src={element.image} alt="product" />
                  </figure>
                  <div className='product-details-ofListview'>
                    <h3>{element.name}</h3>

                    <span>RS : $.{element.price}</span>
                    <p>
                      {element.description.slice(0, 140)}........</p>
                    <button className='cart-btn-listView'>Buy Now</button>
                  </div>
                </div>


              </Link>


            </div>

          )
        })
      }
    </div>
  )
}

export default ListView
