import React, { useState, useEffect } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import './Dashboard.css';
import './Responsive.css';
import { useDarkMode } from './context/DarkModeContext';

function TermsPage() {
  const { isDarkMode } = useDarkMode();
    const navigate=useNavigate();
  
    
   const handleHomepage = () => {
    navigate('/Dashboard');
   };
    const handlePrivacy = () => {
      navigate('/privacy');
    };
    const handleAbout = () => {
      navigate('/about');
    };
    return (
      <div className={`dashboard ${isDarkMode ? 'dark' : ''}`}>
    
        <nav className={`top-navbar ${isDarkMode ? 'dark' : ''}`}>
            <ul>
            <button className="home-buttond" onClick={handleHomepage}>Home</button>
              <li>
              <a href="#" className={isDarkMode ? 'dark-text' : ''} onClick={handleAbout}>About Us</a>
              </li>
              <li>
              <a href="#" className={isDarkMode ? 'dark-text' : ''}>Contact Us</a>
              </li>

            </ul>
          </nav>
          <nav className={`down-navbar ${isDarkMode ? 'dark' : ''}`}>
        <ul>
        <li className="copyright">
          <a href="#" className={isDarkMode ? 'dark-text' : ''}>&copy; 2023 Copyrights claimed. All rights reserved.</a>
          </li>
          <li>
          <a href="#" className={isDarkMode ? 'dark-text' : ''} onClick={handlePrivacy}>Privacy policy</a>
          </li>
          <li>
          <a href="#" className={isDarkMode ? 'dark-text' : ''}>Terms and conditions</a>
          </li>
          
        </ul>
        </nav>
        <div className={`terms ${isDarkMode ? 'dark' : ''}`} >
     <b className={isDarkMode ? 'dark-text' : ''}>Terms and Conditions for ART AESTHETIC home renovation</b>
<br/><br/><p className={isDarkMode ? 'dark-text' : ''}>Terms and Conditions for Home Renovation Application<br></br><br></br>
Eligibility:<br></br> The home renovation application is available to individuals who are of legal age and have the authority to enter into a legally binding contract. By using the application, you confirm that you meet these eligibility requirements.
<br></br><br></br>
Use of the Application: <br></br>The home renovation application is intended for the purpose of assisting users in planning and managing home renovation projects. You agree to use the application only for lawful purposes and in accordance with any applicable laws and regulations.
<br></br><br></br>
Accuracy of Information:<br></br> You are responsible for providing accurate and up-to-date information when using the home renovation application. Any information provided through the application should be true, complete, and not misleading.
<br></br><br></br>
Third-Party Services:<br></br> The home renovation application may integrate with third-party services, such as contractor directories or payment processors. Your use of these third-party services is subject to their respective terms and conditions, and you agree to comply with those terms when using such services.
<br></br><br></br>
User Conduct:<br></br> You agree to use the home renovation application in a manner that is respectful, lawful, and does not infringe upon the rights of others. You shall not engage in any activity that may disrupt or interfere with the proper functioning of the application or its associated services. </p>
</div>
</div>

 );
    }
    export default TermsPage;
    <br></br>