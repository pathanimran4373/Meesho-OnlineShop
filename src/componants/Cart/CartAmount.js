import React from 'react'
import { FaMinus, FaPlus} from 'react-icons/fa'

const CartAmount = ({amount,setDecrease, setIncrease}) => {
  return (
    <>
       <div className='product-incre-decrement'>
        <button onClick={()=>setDecrease()}>
            <FaMinus/>
        </button>
        <div className='amount'>{amount}</div>

        <button onClick={()=> setIncrease()}> <FaPlus/> </button>
      </div>
    </>
  )
}

export default CartAmount
