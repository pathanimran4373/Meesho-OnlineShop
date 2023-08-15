import React from 'react'
import {FaStar,FaStarHalfAlt} from "react-icons/fa";
import {AiOutlineStar} from "react-icons/ai"
const Stars = ({stars,reviews}) => {
    const ratingStar = Array.from({length:5},(elem,index)=>{
        let number = index + 0.5;
        return(
            <span  key={index}>{stars > index + 1 ? (
                <FaStar className='stars'/>
            ) : stars > number ? (
                <FaStarHalfAlt className='stars'/>
            ) : (
                <AiOutlineStar className='stars'/>
            )}</span>
        )
    });
  return (
    <div className='rating-star'>
      {ratingStar}
      <p className='reviews'>({reviews} customer reviews)</p>
    </div>
  )
}

export default Stars
