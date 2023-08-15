import React from 'react'
import CartAmount from './CartAmount'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { FaCheck } from "react-icons/fa"
import { useContext } from 'react';
import { cartContextForCartPage } from "../../GlobalContext/Context/CartContext"

const AddToCart = ({ product }) => {

    const { addToCart } = useContext(cartContextForCartPage);

    const { id, colors, stock } = product;

    const [color, setColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1);

    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
    };
    const setIncrease = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock);
    }
    return (
        <>
            {/* colors button */}
            <div className='color-btns'>color: {
                colors.map((curcolor, index) => {
                    return (
                        <button key={index} style={{ backgroundColor: curcolor }} className={color === curcolor ? "btnstyle Active" : "btnstyle"} onClick={() => setColor(curcolor)}>
                            {color === curcolor ? <FaCheck className='cheak-cursor'/> : null}
                        </button>
                    )
                })
            }</div>
            {/* increase and decrease product */}
            <div className='quantyties-and-cartbtn'>
                <CartAmount amount={amount} setDecrease={setDecrease} setIncrease={setIncrease} />

                <Link to="/cart" onClick={() => addToCart(id, color, amount, product)}>
                    <button className='cart-button'>add to cart</button></Link>

            </div>
        </>
    )
}

export default AddToCart
