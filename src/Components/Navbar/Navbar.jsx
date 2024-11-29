import React, {useState,useEffect} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true): setSticky(false);
    })
  },[])

  return (
    <div className={`nav ${sticky? 'dark-nav':''}`}>
      <div className="nav-logo">Shopee</div> 
      <ul className='nav-menu'>
        <li><Link style={{textDecoration:'none'}} to={'/'} className='link'>Home</Link></li>
        <li><Link style={{textDecoration:'none'}} to={'/products'} className='link'>Products</Link></li>
        <li><Link style={{textDecoration:'none'}} to={'/about'} className='link'>About</Link></li>
        <li className='nav-contact'><Link style={{textDecoration:'none'}} to={'/contact'} className='link-contact'>Contact</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
