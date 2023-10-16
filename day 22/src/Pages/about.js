import React, { useState, useEffect } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import './Dashboard.css';
import './Responsive.css';
import { useDarkMode } from './context/DarkModeContext';

function AboutUS() {
    const { isDarkMode } = useDarkMode();
    const navigate = useNavigate();

    const handleTerms = () => {
      navigate("/terms");
    };
  
    const handlePrivacy = () => {
      navigate("/privacy");
    };

    const handleHome = () => {
      navigate("/Dashboard");
    };

    const [imageIndex, setImageIndex] = useState(0);
  const images = ['image 1.png', 'image 21.jpg', 'image 31.jpg', 'image 7.png', 'image 10.png', 'image 41.jpg', 'image 9.png', 'image 11.png']; 

  useEffect(() => {
    const cycleImages = () => {
      const nextIndex = (imageIndex + 1) % images.length;
      setImageIndex(nextIndex);
    };
  

    const intervalId = setInterval(cycleImages, 2500);

    return () => clearInterval(intervalId);
  }, [imageIndex, images]);

    return (
        <div className={`dashboard ${isDarkMode ? 'dark' : ''}`}>
          <nav className={`top-navbar ${isDarkMode ? 'dark' : ''}`}>
            <ul>
            <button className="home-buttond" onClick={handleHome}>Home</button>
              <li>
              <a href="#" className={isDarkMode ? 'dark-text' : '' }>About Us</a>
              </li>
              <li>
              <a href="#" className={isDarkMode ? 'dark-text' : ''}>Contact Us</a>
              </li>
            </ul>
          </nav>
          <nav className={`down-navbar ${isDarkMode ? 'dark' : ''}`}>
        <ul>
        <li className="copyright">
          <a href="#" className={isDarkMode ? 'dark-text' : ''}>&copy; 2023 Copyright claimed. All rights reserved.</a>
          </li>
          <li>
          <a href="#" className={isDarkMode ? 'dark-text' : ''} onClick={handlePrivacy}>Privacy policy</a>
          </li>
          <li>
          <a href="#" className={isDarkMode ? 'dark-text' : ''} onClick={handleTerms}>Terms and conditions</a>
          </li>
          
        </ul>
      </nav>
      <div className="image-container">
        {images.map((imageUrl, index) => (
          <img
            key={index}
            className={`fade ${index === imageIndex ? 'visible' : ''}`}
            src={imageUrl}
            alt={`Image ${index + 1}`}
          />
        ))}
      </div>
       <div className='aboutuscont'><div className='aboutheading'>AboutUS</div> <br/><br/>
<p>
Welcome to our home renovation application! We are passionate about transforming houses into homes, and we're here to help you bring your vision to life. With our user-friendly platform and a team of experienced professionals, we aim to make the renovation process seamless and enjoyable.

At our core, we believe that a well-designed and functional home has the power to enhance your quality of life. Whether you're looking to remodel a single room or undertake a complete home renovation, we have the expertise and resources to guide you every step of the way.

Our application is designed to simplify the renovation process. From inspiration to execution, we provide a one-stop solution for all your home improvement needs. Browse through our extensive collection of design ideas and trends, and find inspiration for your dream space. Our interactive tools allow you to visualize the changes before committing, ensuring that you're satisfied with the end result.

We understand that undertaking a renovation project can be overwhelming, which is why we've assembled a team of skilled professionals. Our network of architects, interior designers, contractors, and suppliers are carefully selected to ensure that you receive the highest quality service. Rest assured, we only work with trusted professionals who share our commitment to excellence.

Customer satisfaction is our top priority, and we strive to exceed your expectations in every interaction. Our dedicated customer support team is available to answer your questions and address any concerns you may have along the way. We value open and transparent communication, and we will keep you informed about the progress of your project at every stage.

Whether you're a seasoned renovator or a first-time homeowner, our home renovation application is designed to cater to your needs. We believe that everyone deserves a beautiful and functional home, and we're here to make that a reality. Let us be your trusted partner in creating the home of your dreams.

Thank you for choosing our home renovation application. We look forward to embarking on this exciting journey with you and turning your vision into reality..</p><b/><br/>
<div className='lastline'>Thank you for choosing AESTHETIC. Let's RENOVATE TOGETHER</div>
</div>
        </div>
    );
}
export default AboutUS;