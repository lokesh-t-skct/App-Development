import React, { useState, useEffect } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import './Dashboard.css';
import './Responsive.css';
import { useDarkMode } from './context/DarkModeContext';

function Privacypolicy() {
  const { isDarkMode } = useDarkMode();
    const navigate=useNavigate();
    
    const handleHomepage = () => {
      navigate('/dashboard');
    };
    const handleAbout = () => {
      navigate('/about');
    };
    const handleTerms = () => {
      navigate('/terms');
    };

    return (
      <div className='privacybody'>
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
          <a href="#" className={isDarkMode ? 'dark-text' : '' }>Privacy policy</a>
          </li>
          <li>
          <a href="#" className={isDarkMode ? 'dark-text' : ''} onClick={handleTerms}>Terms and conditions</a>
          </li>
          
        </ul>
      </nav>
        <div className={`policy ${isDarkMode ? 'dark' : ''}`}>
     <h1 className={isDarkMode ? 'dark-text' : ''}>Privacy Policy for AESTHETIC home renovation</h1>
<br/><br/><p className={isDarkMode ? 'dark-text' : ''}>Introduction:<br></br>
<br></br>

Our AESTHETIC Application is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and protect the information you provide to us through our application. By using our application, you consent to the practices described in this policy.<br></br>
<br></br>

Information We Collect:<br></br><br></br>

Personal Information:<br></br> When you use our AESTHETIC Application, we may collect personal information such as your name, email address, phone number, and home address. This information is collected when you create an account or voluntarily provide it to us for the purpose of using our services.
<br></br><br></br>
Usage Data: <br></br>We may collect non-personal information about how you use our application, such as the features you access, the actions you take, and the duration of your sessions. This data helps us improve our application and provide a better user experience.
<br></br><br></br>
Communication Data:<br></br> If you contact us via email or other communication channels, we may collect and store the information you provide to us, including your name, email address, and any other information necessary to address your inquiries or concerns.
<br></br><br></br>
How We Use Your Information:<br></br>
<br></br>
Service Delivery: <br></br>We use the information you provide to deliver our home renovation services, including connecting you with contractors, providing project management tools, and facilitating communication between you and contractors.
<br></br><br></br>
Personalization:<br></br> We may use your information to personalize your experience within our application, such as recommending relevant contractors or suggesting home renovation ideas based on your preferences.
<br></br><br></br>
Communication:<br></br> We may use your contact information to send you important updates, notifications, and marketing communications related to our services. You can opt-out of receiving marketing communications at any time.
<br></br><br></br>
Analytics and Improvements:<br></br> We analyze usage data to understand how our application is used and identify areas for improvement. This may include analyzing trends, monitoring user behavior, and optimizing our services.
<br></br><br></br>
Information Sharing:<br></br><br></br>
<br></br>
Contractors:<br></br> To facilitate the home renovation process, we may share your project details and contact information with contractors who match your requirements. However, we do not share your personal information for marketing purposes without your explicit consent.
<br></br><br></br>
Service Providers: <br></br>We may engage third-party service providers to assist us in delivering our services, such as hosting providers, analytics providers, and customer support providers. These service providers are contractually obligated to protect your information and use it only for the purposes specified by us.
<br></br><br></br>
Legal Compliance:<br></br> We may disclose your information if required by law, legal process, or governmental request, or to protect our rights, privacy, safety, or property, or that of our users or the public.
<br></br><br></br>
Data Security:
<br></br>
We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. These measures include encryption, access controls, and regular security assessments.
<br></br><br></br>
Data Retention:<br></br>

We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
<br></br><br></br>
Updates to Privacy Policy:<br></br>

We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated Privacy Policy on our website or through other communication channels.
<br></br><br></br>
Contact Us:

If you have any questions or concerns about our Privacy Policy or the handling of your personal information, please contact us at [contact@aesthetichomerenovation.com/+1 (123) 456-7890]. We will address your inquiries as soon as possible.
<br></br><br></br>
By using our Home Renovation Application, you acknowledge that you have read and understood this Privacy Policy and agree to the collection, use, and disclosure of your information as described herein.
</p>
</div>
</div>
</div>
      );
    }
    export default Privacypolicy;