import React, { useState } from 'react'



const ImageDescription = ({ imgDetails = [{ url: "" }] }) => {

  const [mainImage, setImage] = useState(imgDetails[0]);

  return (
    <div className='image-container'>
      <div className='image-part'> {
        imgDetails.map((curImg, index) => {
          return (
            <img className='img' src={curImg.url} alt={curImg.filename} onClick={() => setImage(curImg)} key={index} />

          )
        })
      }
      </div>
      <div className='main-image'><img src={mainImage.url} alt={mainImage.filename} /></div>

    </div>
  )
}

export default ImageDescription
