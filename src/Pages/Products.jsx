import React, { useState, useEffect } from 'react'
import './Product.css'
import { Link } from 'react-router-dom'
import Customizer from './Customizer'
import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion.js'
import state from '../store/index.js'
import CustomButton from '../Components/CustomButton/CustomButton.jsx'
import CanvasModel from '../Canvas/index.jsx'

const Products = () => {
  const snap = useSnapshot(state);

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  }, [])

  return (
    <div>
      <div className={` ${sticky ? 'dark-nav nav' : 'nav-product'}`}>
        <div className="nav-logo">Shopee</div>
        <ul className='nav-menu'>
          <li><Link style={{ textDecoration: 'none' }} to={'/'} className={` ${sticky ? 'link' : 'link-about'}`}>Home</Link></li>
          <li><Link style={{ textDecoration: 'none' }} to={'/products'} className={` ${sticky ? 'link' : 'link-about'}`}>Products</Link></li>
          <li><Link style={{ textDecoration: 'none' }} to={'/about'} className={` ${sticky ? 'link' : 'link-about'}`}>About</Link></li>
          <li className={`${sticky ? 'nav-contact' : 'nav-contact-about'}`}><Link style={{ textDecoration: 'none' }} to={'/contact'} className='link-contact'>Contact</Link></li>
        </ul>
      </div>


      <div className='main'>
        <AnimatePresence>
          {snap.intro && (
            <motion.section className='home' {...slideAnimation('left')}>
              <motion.header {...slideAnimation("down")}>
                <img src="./threejs.png" alt="logo" className="home-img" />
              </motion.header>

              <motion.div className='home-content' {...headContainerAnimation}>
                <motion.div {...headTextAnimation}>
                  <h1 className='head-text'>
                    Let's <br /> Do It.
                  </h1>
                </motion.div>
                <motion.div {...headContentAnimation} className='home-hero'>
                  <p className='home-text'>
                    Create your own unique design.  <strong>Unleash Your Imagination</strong> and define your own style.
                  </p>

                  <CustomButton
                    type="filled"
                    title="Customize it"
                    handleClick={() => state.intro = false}
                    customStyles="
                      width: 'fit-content',
                      padding: '10px 16px',
                      fontWeight: '700',
                      fontSize: '14px'
                    " />
                </motion.div>
              </motion.div>
            </motion.section>
          )}
        </AnimatePresence>
        <div className='main-right'>
          <CanvasModel />
          <Customizer />
        </div>
      </div>
    </div>
  )
}

export default Products
