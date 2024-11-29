import React, { useRef } from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'
import card1 from '../assets/card1.webp'
import card2 from '../assets/card2.avif'
import card3 from '../assets/card3.avif'
import card4 from '../assets/card4.webp'
import Title from '../Components/Title/Title'
import arrow_btn from '../assets/arrow_btn.png'
import user_1 from '../assets/user1.jpeg'
import user_2 from '../assets/user2.jpeg'
import user_3 from '../assets/user3.jpg'
import user_4 from '../assets/user4.jpg'
import { IoMailOpen } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../Components/Navbar/Navbar'

const Contact = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if(tx > -50){
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }
  const slideBackward = () => {
    if(tx < 0){
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e4ac0731-6299-4741-b01c-77af1507bdde");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="hero2">
        <div className="hero2-text">
          <h1>Ensuring You Always Stay In Style</h1>
          <p>Stay ahead of the fashion curve with our customizable designs that suit your unique style.</p>
          <Link style={{ textDecoration: 'none' }} to={'/products'} className='btn'>
            <button className='btn'>Explore More</button>
          </Link>
        </div>
      </div>

      <Title subtitle='Our Services' title='What We Offer'/>
      <div className="programs">
        <div className="program">
          <img src={card1} alt="" />
          <div className="caption">
            <p>Wide Range of Designs</p>
          </div>
        </div>
        <div className="program">
          <img src={card2} alt="" />
          <div className="caption">
            <p>Custom Jerseys</p>
          </div>
        </div>
        <div className="program">
          <img src={card3} alt="" />
          <div className="caption">
            <p>Good Quality</p>
          </div>
        </div>
      </div>

      <div className="box">
        <div className="box-left">
          <img src={card4} alt="" />
        </div>
        <div className="box-right">
          <h3>Lorem ipsum</h3>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
          <p>Integer semper metus sit amet odio semper, porttitor elementum metus ultrices. Fusce id dolor id sem iaculis faucibus. Morbi mollis ex nunc, eget finibus est feugiat venenatis. Vivamus dapibus eros ac nulla vehicula, et euismod diam posuere. Nulla neque lectus, elementum vitae turpis convallis, maximus eleifend velit. Ut dignissim imperdiet accumsan. Nam sapien enim, pellentesque scelerisque vestibulum in, dapibus non mi. Suspendisse ut efficitur sem. Maecenas consequat mollis iaculis. Pellentesque convallis enim at magna laoreet hendrerit. Nunc aliquet sem et nisl pulvinar, quis posuere diam ullamcorper. Aliquam eget magna eget massa pulvinar tempor vitae in purus. Etiam bibendum neque neque, et tincidunt leo rhoncus quis.</p>
        </div>
      </div>

      <Title subtitle='Reviews' title='What our users say'/>
      <div className="reviews">
        <img src={arrow_btn} alt="" className='next-btn' onClick={slideForward}/>
        <img src={arrow_btn} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_1} alt="" />
                  <h3>Nicolas Jackson</h3>
                </div>
                <p>I absolutely loved the experience of designing my custom t-shirt! The interface is super intuitive, and there were so many options for colors, fonts, and graphics. The final product came out exactly as I envisioned. The fabric is soft, and the print quality is excellent. I’ll definitely be back to design more shirts for my team!</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_2} alt="" />
                  <h3>Cole Palmer</h3>
                </div>
                <p>The t-shirt arrived sooner than expected, and the material feels great. However, I found the design tool a bit limited in terms of customization. I was hoping for more clipart or pre-made designs to choose from. That said, the printing is sharp and the shirt fits perfectly, so I’m still pretty happy with the purchase!</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_3} alt="" />
                  <h3>Reece James</h3>
                </div>
                <p>My friends and I ordered custom t-shirts for our reunion, and we couldn’t be happier! The process was straightforward, and we were able to upload our own design without any issues. The bulk order discount was a nice bonus, and all the shirts were printed perfectly with vibrant colors. Highly recommend for group orders!</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_4} alt="" />
                  <h3>Pedro Neto</h3>
                </div>
                <p>The site is easy to navigate, and the customization tool worked well. I was really excited to receive my shirt, but the sizing runs smaller than expected. I would recommend ordering a size up if you’re not sure. Other than that, the print quality was spot on and the material feels durable.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <Title subtitle='Contact Us' title='Get in Touch' />
      <div className="contact">
        <div className="contact-col">
          <h3>Send us a message <IoMailOpen /></h3>
          <p>Feel free to reach out through contact form or find our contact information below. Your feedback , questions, and suggestions are important to us as we strive to provide exceptional service to our customers.</p>
          <ul>
            <li><IoMdMail />Contact@Shopee.com</li>
            <li><FaPhoneAlt />+91 1234567890</li>
            <li><FaLocationDot />Bangalore</li>
          </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter Your name' required />
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required />
            <label>Write your messages here</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='submit-btn btn'>Submit<FaArrowRight /></button>
          </form>
          <span>{result}</span>
        </div>
      </div>

      <div className="footer">
        <p>© 2024 Shopee. All rights reserved</p>
        <ul>
          <li>Terms of Services</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </div>
  )
}

export default Contact
