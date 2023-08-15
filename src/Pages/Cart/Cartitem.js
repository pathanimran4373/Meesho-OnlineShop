import { cartContextForCartPage } from '../../GlobalContext/Context/CartContext'
import { useContext } from 'react'


const CartItems = ({ id, name, image, price, amount }) => {

    const {removeItem} = useContext(cartContextForCartPage)
  return (
    <>
      <tr>
        <td>
          <div className="cart-info">
            <img src={image} alt={id} />
            <div className="description-of-product">
              <h4>{name}</h4>
              <p>Rs.{price}</p>
              <button onClick={() => removeItem(id)}>Remove</button>
            </div>
          </div>
        </td>
        <td>{amount}</td>
        <td>Rs.{amount*price}</td>
      </tr>
    </>
  );
};

export default CartItems;
