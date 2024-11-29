import React from 'react'
import './Background.css'
import video from '../../assets/video.mp4'
import banner1 from '../../assets/banner1.webp'
import banner2 from '../../assets/banner2.webp'
import banner3 from '../../assets/banner3.webp'

const Background = ({playStatus, heroCount}) => {
  if(playStatus){
    return(
        <video className='background fade-in' autoPlay loop muted>
            <source src={video} type='video/mp4'/>
        </video>
    )
  }
  else if(heroCount === 0){
    return <img src={banner1} className='background fade-in' alt=''/>
  }
  else if(heroCount === 1){
    return <img src={banner2} className='background fade-in' alt=''/>
  }
  else if(heroCount === 2){
    return <img src={banner3} className='background fade-in' alt=''/>
  }
}

export default Background
