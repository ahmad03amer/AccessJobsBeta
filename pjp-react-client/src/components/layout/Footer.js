
import React from 'react'; 
import { Link } from 'react-router-dom';
import footersvg from '../../picture/foorter.svg';
import logo from "../../picture/Moh.svg";

import "../../css/Footer.css"; 



function Footer() {
    return (
        <div className='footer-container'>
             {/*<img src={footersvg} className="footer-image" alt="" />*/}
          <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
            Join us immediately to get to know the best jobs published on our website            </p>
            <p className='footer-subscription-text'>
              You can subscribe at any time.
            </p>
            <img src={logo} alt="logo" style={{ width: '200px'}} />
            <div className='input-areas'>
              <form>
                <input
                  className='footer-input'
                  name='email'
                  type='email'
                  placeholder='Your Email'
                />
             <Link type="submit" value="Contact Us" to="/register"  className="btn btn-outline-primary my-2 my-sm-0" >Sign UP</Link>

                {/*<Button buttonStyle='btn--outline'>Subscribe</Button>*/}
              </form>
            </div>
          </section>
          <div class='footer-links'>
            <div className='footer-link-wrapper'>
              <div class='footer-link-items mr-5'>
                <h2>About Us</h2>
                <Link to='/sign-up'>How it works</Link>
                <Link to='/'>Testimonials</Link>
                <Link to='/'>Careers</Link>
                <Link to='/'>Investors</Link>
                <Link to='/'>Terms of Service</Link>
              </div>
              <div class='footer-link-items mr-5'>
                <h2>Contact Us</h2>
                <Link to='/'>Contact</Link>
                <Link to='/'>Support</Link>
                <Link to='/'>Destinations</Link>
                <Link to='/'>Sponsorships</Link>
              </div>
           
              <div class='footer-link-items mr-5'>
                <h2>Job Seekers</h2>
                <Link to='/'>Submit Video</Link>
                <Link to='/'>Ambassadors</Link>
                <Link to='/'>Agency</Link>
                <Link to='/'>Influencer</Link>
              </div>
              <div class='footer-link-items mr-5'>
                <h2>Pricing</h2>
                <Link to='/'>Instagram</Link>
                <Link to='/'>Facebook</Link>
                <Link to='/'>Youtube</Link>
                <Link to='/'>Twitter</Link>
              </div>
              <div class='footer-link-items mr-5'>
                <h2>Blogs</h2>
                <Link to='/'>Instagram</Link>
                <Link to='/'>Facebook</Link>
                <Link to='/'>Youtube</Link>
                <Link to='/'>Twitter</Link>
              </div>
            </div>
          </div>
          <section class='social-media'>
            <div class='social-media-wrap'>
              <div class='footer-logo'>
                <Link to='/' className='social-logo'>
                  Access Job
                  <i class='fab fa-typo3' />
                </Link>
              </div>
              <small class='website-rights'>Access Job Team © 2021</small>
              <div class='social-icons'>
                <Link
                  class='social-icon-link facebook'
                  to='/'
                  target='_blank'
                  aria-label='Facebook'
                >
                  <i class='fab fa-facebook-f' />
                </Link>
                <Link
                  class='social-icon-link instagram'
                  to='/'
                  target='_blank'
                  aria-label='Instagram'
                >
                  <i class='fab fa-instagram' />
                </Link>
                <Link
                  class='social-icon-link youtube'
                  to='/'
                  target='_blank'
                  aria-label='Youtube'
                >
                  <i class='fab fa-youtube' />
                </Link>
                <Link
                  class='social-icon-link twitter'
                  to='/'
                  target='_blank'
                  aria-label='Twitter'
                >
                  <i class='fab fa-twitter' />
                </Link>
                <Link
                  class='social-icon-link twitter'
                  to='/'
                  target='_blank'
                  aria-label='LinkedIn'
                >
                  <i class='fab fa-linkedin' />
                </Link>
              </div>
            </div>
          </section>
        </div>
      );
   
}

export default Footer;
