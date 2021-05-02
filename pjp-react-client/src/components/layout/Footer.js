import React , {  Component } from 'react'; 
import { Link } from 'react-router-dom';
import logo from "../../picture/Moh.svg";

import "../../css/Footer.css"; 




class Footer extends Component {
  render() {
    return (
      <div className='footer-container'>
      {/*<img src={footersvg} className="footer-image" alt="" />*/}
   
   {/* <section className='footer-subscription'>
  
     <p className='footer-subscription-heading'>
     Join Us Immediately To Get To know The Best Jobs published On Our Website
     </p>
     <p className='footer-subscription-text'>
       You can subscribe at any time.
     </p>
     <div className="row">
    {/*  <img src={logo} alt="logo" style={{ width: '200px'}} />
     <div className='input-areas'>
       <form>
         <input
           className='footer-input'
           name='email'
           type='email'
           placeholder='Your Email'
         />
      <Link type="submit" value="Contact Us" to="/register"  className="btn btn-outline-primary my-2 my-sm-0" >Sign UP</Link>

         {/*<Button buttonStyle='btn--outline'>Subscribe</Button>
       </form>
     </div>
     </div>
   
   </section> 
  */}
   
   <div class='footer-links'>
     <section className="img">
  <center> <img src={logo} alt="logo" style={{ width: '200px', height:'90px'}} /></center>
   <center><p className="text-white mb-0">
     Join Us Immediately To Get To know The Best Jobs.
     </p></center>
     <center> <p className="text-white ">
     You can subscribe at any time.
     </p></center>
     <div className='input-areas ml-2'>
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
     <div className='footer-link-wrapper'>
       <div class='footer-link-items mr-5'>
         <h2>About Us</h2>
         <Link to='/aboutUs'><i class="fas fa-angle-right"></i>How it works</Link>
         <Link to='/aboutUs'><i class="fas fa-angle-right"></i>Testimonials</Link>
         <Link to='/aboutUs'><i class="fas fa-angle-right"></i>Careers</Link>
         <Link to='/aboutUs'><i class="fas fa-angle-right"></i>Investors</Link>
         <Link to='/aboutUs'><i class="fas fa-angle-right"></i>Terms of Service</Link>
       </div>
       <div class='footer-link-items mr-5'>
         <h2>Contact Us</h2>
         <Link to='/contactUs'><i class="fas fa-angle-right"></i>Contact</Link>
         <Link to='/contactUs'><i class="fas fa-angle-right"></i>Support</Link>
         <Link to='/contactUs'><i class="fas fa-angle-right"></i>Destinations</Link>
         <Link to='/contactUs'><i class="fas fa-angle-right"></i>Sponsorships</Link>
       </div>
    
      
       <div class='footer-link-items mr-5'>
         <h2>Pricing</h2>
         <Link to='/pricing'><i class="fas fa-angle-right"></i>Basic Pay</Link>
         <Link to='/pricing'><i class="fas fa-angle-right"></i>Pro Pay</Link>
         <Link to='/pricing'><i class="fas fa-angle-right"></i>Enterprise</Link>
         <Link to='/pricing'><i class="fas fa-angle-right"></i>Terms of Pay</Link>
       </div>
       <div class='footer-link-items mr-5'>
         <h2>Blogs</h2>
         <Link to='/blogs'><i class="fas fa-angle-right"></i>Instagram</Link>
         <Link to='/blogs'><i class="fas fa-angle-right"></i>Facebook</Link>
         <Link to='/blogs'><i class="fas fa-angle-right"></i>Youtube</Link>
         <Link to='/blogs'><i class="fas fa-angle-right"></i>Twitter</Link>
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
    )
  }
}


export default Footer;


