import './CartPage.css'
import {FaTrash} from "react-icons/fa"



const CartItems = ({id,name,image,color,price,amount}) => {



  return (
    <>
   
    <div className='cart-item-sec'>
      <figure><img className='img' src={image} alt={id}/></figure>
      <div className='name'>{name}</div>
      {/* <div className='color'>{color}</div> */}
      <div className='amount'>{amount}</div>
     
      <div>Rs.{price}</div>
      <FaTrash/>

    </div>
    <hr></hr>
</>
  )
}

export default CartItems
