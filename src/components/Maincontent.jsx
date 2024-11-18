import React from 'react'

const Maincontent = () => {
  return (
    <div className='forContent container'>
      <div className='textcontent'>
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p className='description'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className='two-btn'>
          <button className='btn-2'>Shop Now</button>
          <button className='btn-3'>Category</button>
        </div>
        <p>Also Available On</p>
        <div className='two'>
          <img src="/images/amazon.png" alt="" />
          {/* <img src="/images/jd.png" style={"height: 10px; width:10px"} alt="" /> */}
          <img
            src="/images/jd.png"
            style={{ height: "32px", width: "28px" }}
            alt=""
          />

        </div>
      </div>
      <div className='imagecontent'>
        <img src="/images/shoe_image.png" alt="" />
      </div>

    </div>
  )
}

export default Maincontent