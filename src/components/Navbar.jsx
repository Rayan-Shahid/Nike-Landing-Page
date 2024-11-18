import React from 'react'
// import images from 'images'
const Navbar = () => {
  return (
    
 <div className='container'>
 <nav>
     <div className="logo">
         <img src="/images/brand_logo.png" alt="" />
     </div>
 <ul>
     <li href='#'>Menu</li>
     <li href='#'>Location</li>
     <li href='#'>About</li>
     <li href='#'>Contact</li>
 </ul>
 <button className="btn-1">Login</button>
 </nav>


</div>
  );
}

export default Navbar