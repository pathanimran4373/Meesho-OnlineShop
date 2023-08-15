import React from 'react'
import { useContext } from 'react'
import { cartContextForCartPage } from '../../GlobalContext/Context/CartContext'
import CartItems from './Cartitem'
import { Link } from "react-router-dom"



function CartPage() {

  const { cart, clearCart, totalAmount, shippingFees } = useContext(cartContextForCartPage)

  console.log(cart)
  if (cart.length === 0) {
    return (
      <h1>your cart is empty</h1>
    )
  }
  return (
    <>
      <div className='cart-page'>
        <div className='cart-box-layout'>
          <div className='product-heading'>
            <b>Product</b>
            <b>Name</b>
            <b> Quantity</b>
            <b>Price</b>
            <b>Remove</b>
          </div>
          <hr></hr>
          <div>
            {
              cart.map((curelm) => {
                return (
                  <CartItems key={curelm.id} {...curelm} />
                )
              })
            }
          </div>
          <div className='clearCart-btn-totalAmount'>
            <div className='home-and-remove-btn'>
              <Link to="/"><button className='btn'>Home</button></Link>
              <button onClick={clearCart}>clear cart</button>

            </div>
            <div className='show-total-price'>
              <span>Amount : Rs {totalAmount}</span>
              <span>Shiping Charge : Rs {shippingFees}</span>
              <b> <hr></hr></b>
              <span>Total Amount : Rs {totalAmount + shippingFees}</span>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default CartPage
