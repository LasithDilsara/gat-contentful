import React from 'react'
import { Link } from 'gatsby'

function Navbar() {
  return (
    <nav className='Navone'>
        

        <ul>
            
            <img className='img2' src='https://www.ceylonelements.lk/wp-content/uploads/2022/09/ceylon-elements-logo.png'></img>
            
            
            <li>
                <Link to="/"><a href="">Contact Us</a></Link>
            </li>
            <li>
                <Link to="/"><a href="">About us</a></Link>
            </li>
            <li>
                <Link to="/"><a href="">Skincare</a></Link>
            </li>
            <li>
                <Link to="/"><a href="">Shop</a></Link>
            </li>
            <li>
                <Link to="/"><a href="">Home</a></Link>
            </li>
        </ul>
      
    </nav>
  )
}

export default Navbar
