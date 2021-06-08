import React, { Component } from "react";
//when logged in prevent sign up
import { connect } from "react-redux";
import PropTypes from "prop-types";
import '../Page_Css/Landing.css';
import {Link} from "react-router-dom";
import {Form} from 'react-bootstrap';
import CountUp from 'react-countup';

import IconSlider from './IconSlider';
// picture for page 
import phone1 from "../../picture/home1.jpeg";

import Popup from "./Popup";
import Jobcategories from "../page/Jobcategories";
import Featureblog from "../page/Featureblog";
import Jobsection from "../page/Jobsection";
import Owltestimonial from '../page/Owlblog1';
import Latestblogowl from '../page/Owlblog2';




class Landing extends Component {
  componentDidMount() {
    if (this.props.security.validToken) {
      this.props.history.push("/");
    }
    var i = 0;
		
		// Placeholder Animation Start
		var inputSelector = document.querySelectorAll('input, textarea');
		
		for (i = 0; i < inputSelector.length; i++) {
			inputSelector[i].addEventListener('focus', function(event) {
				return this.parentElement.parentElement.classList.add("focused");
			});
		}
		
		
		for (i = 0; i < inputSelector.length; i++) {
			inputSelector[i].addEventListener('blur', function(event) {
				var inputValue = this.value;	
				if ( inputValue === '' ) {
					this.parentElement.parentElement.classList.remove('filled');
					this.parentElement.parentElement.classList.remove('focused');  
				} else {
					this.parentElement.parentElement.classList.add('filled');
				}
			});
		}

  }

  constructor () {
    super()
    this.state = {
      isOpen: false,
      addModalshow :false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal () {
    this.setState({isOpen: true})
  }
  

  render() {
     let addModalClose =()=> this.setState({addModalshow : false});
   
       
    
    return (
      <div>
      

        {/* 



        <div className="container">





          <div className="row">
            <div className="col-md-12">
              <div className="text-lg-center text-left">
                <h3 className="mt-5 mb-lg-2 font-weight-bold">
                  {" "}
                  Explore Jobs By C....ategory{" "}
                </h3>
                <p className="mb-1 text-dark"> Pick from the list</p>
              </div>
            </div>
          </div>
               <div className="row mt-5">
            {/*<InfoConsumer> 

           {value=>{
           return value.info.map(item =>{
               return < Info key={item.id} item={item}/>;
           })
                }}
        </InfoConsumer>
        */}
        {/* </div> */}
        {/* </div> */}

        <div>

         
           {/* <div class="preloader">
            <span></span>
          </div>  */}

         
  <section className="home d-flex align-items-center" id="home" >
     <div className="effect-wrap">
        <i className="fas fa-plus effect effect-1"></i>
        <i className="fas fa-plus effect effect-2"></i>
        <i className="fas fa-circle-notch effect effect-3"></i>
     </div>
     <div className="container">
        <div className="row align-items-center">
           <div className="col-md-7">
              <div className="home-text">
              <Link to="/FindJobs" className="site-button button-sm">Find Jobs, Employment & Career Opportunities</Link>

              <h2 className="text-white"><b>Search Between More Then<br/> <span className="text-primary">58,000</span> Open Jobs.</b></h2>
                
                 <div className="home-btn">
                    <a href="/"  data-scroll-goto="3" className="btn btn-1 bg-white text-dark">Soon on Mobile Phone </a>


                    
                   
      
                 
                   
                     <button type="button" className="btn btn-1 video-play-btn"   onClick = {()=> this.setState({addModalshow : true })}> <i className="fas fa-play"></i> </button>
                     <Popup
                     show ={this.state.addModalshow}
                     onHide ={addModalClose}
                     
                     />
                 
                 </div>
                 <div className="find-job-bx mt-5">
                 <form className="dezPlaceAni">
										<div className="row">
											<div className="col-lg-6 col-md-6">
												<div className="form-group">
													<label >Job Title, Keywords, or Phrase</label>
													<div className="input-group">
														<input type="text" className="form-control" placeholder="" />
														<div className="input-group-append">
														  <span className="input-group-text"><i className="fa fa-search"></i></span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-lg-6 col-md-6">
												<div className="form-group">
													<label>Country</label>
													<div className="input-group">
														<input type="text" className="form-control" placeholder="" />
														<div className="input-group-append">
														  <span className="input-group-text"><i className="fa fa-map-marker"></i></span>
														</div>
													</div>
												</div>
											</div>
											<div className="col-lg-6 col-md-6">
												<div className="form-group">
													<Form.Control as="select" custom className="select-btn">
														<option>Select Sector</option>
														<option>Legal Jobs</option>
														<option>Computer Since Jobs</option>
														<option>Engineering Jobs</option>
														<option>Architecture Jobs</option>
														<option>Information Technology Jobs</option>
														<option>Marketing Jobs</option>
														<option>Sales Jobs</option>
														<option>Teaching Jobs</option> 
													</Form.Control>
													
												</div>
											</div>
											<div className="col-lg-4 col-md-6 ml-5">
												<button type="submit" to="/browse-job" className="site-button btn-block">Find Job</button>
											</div>
										</div>
									</form>
                           </div>
              </div>
           </div>
           <div className="col-md-5 text-center">
              <div className="home-img">
                 <div className="circle">
                 </div>
                 <img src={phone1} alt=""/>
              </div>
           </div>
        </div>
     </div>
  </section>





   {/*-------------------  How It Works Section Start  --------------------------*/}
  <section className="how-it-works section-padding">
     <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-8">
               <div className="section-title">
                   <h2>how it <span>works</span></h2>
               </div>
            </div>
        </div>
        <div className="row">
           <div className="col-lg-3 col-md-6">
              <div className="how-it-works-item line-right">
                  <div className="step">1</div>
                  <h3>SignUP</h3>
               <p>
               Register now to be able to apply for jobs or post jobs And browse many articles and courses for free.

               </p>
              </div>
           </div>
           <div className="col-lg-3 col-md-6">
              <div className="how-it-works-item line-right">
                  <div className="step">2</div>
                  <h3>create profile</h3>
                 <p>
                 Create your account and subscribe to our services to be able to benefit from the best recommendations

                 </p>
              </div>
           </div>
           <div className="col-lg-3 col-md-6">
              <div className="how-it-works-item line-right">
                  <div className="step">3</div>
                  <h3>search for jobs</h3>
                  <p>
                 Browse posted jobs, and apply for the right job through a wide variety of categories

                 </p>
              </div>
           </div>
           <div className="col-lg-3 col-md-6">
              <div className="how-it-works-item">
                  <div className="step">4</div>
                  <h3>submit</h3>
                 <p>
                 Post the job if you are the owner of the company, or apply for it if you are an employee

                 </p>
              </div>
           </div>
           
        </div>
     </div>
  </section>
  <IconSlider/>
  {/* --------------------------- How It Works Section End ----------------------------------------------- */}

  <div className="section-full job-categories content-inner-2 bg-white">
						<div className="container">
							<div className="section-head d-flex head-counter clearfix">
								<div className="mr-auto">
									<h2 className="m-b5">Popular Categories</h2>
									<h6 className="fw3">8+ Categories work waiting for you</h6>
								</div>
								<div className="head-counter-bx">
									<h2 className="m-b5 counter"><CountUp end={649} duration={5}/></h2>
									<h6 className="fw3">Jobs Posted</h6>
								</div>
								<div className="head-counter-bx">
									<h2 className="m-b5 counter"><CountUp end={364} duration={5}/></h2>
									<h6 className="fw3">Full-Time Jobs</h6>
								</div>
								<div className="head-counter-bx">
									<h2 className="m-b5 counter"><CountUp end={193} duration={5}/></h2>
									<h6 className="fw3">Part-Time Jobs</h6>
								</div>
                        
                        <div className="head-counter-bx">
									<h2 className="m-b5 counter"><CountUp end={92} duration={5}/></h2>
									<h6 className="fw3">By-Contract Jobs</h6>
								</div>
							</div>
							<Jobcategories />
						</div>
					</div>

               <Featureblog />
					
					<Jobsection />
               	
               <div className="section-full p-tb70 overlay-black-dark text-white text-center bg-img-fix">
						<div className="container">
							<div className="section-head text-center text-white">
								<h2 className="m-b5">Testimonials</h2>
								<h5 className="fw4">We are proud of our customers, a sample of their statements about the jobs they got through our website.</h5>
							</div>
							
							<Owltestimonial />
						</div>
					</div>	
               <div className="section-full content-inner-2 overlay-white-middle">
						<div className="container">
							<div className="section-head text-black text-center">
								<h2 className="text-uppercase m-b0"><b>Latest Blog</b></h2>
								<p>Blogs of <b>Access jobs</b> to help you to have more knowledge, to improve your skiles to have a big chances to git a job.</p>
							</div>
							<Latestblogowl />
						</div>
					</div>	

  {/* <!-- Testimonials Section Start --> */}
  
   {/* Testimonials Section End  */}

   {/* Toge Theme  */}
   <div className="toggle-theme">
      <i className="fas"></i>
   </div>
  
  {/* Vedio pop up  */}
  
  <div className="video-popup">
     <div className="video-popup-inner">
        <i className="fas fa-times video-popup-close"></i>
        <div className="iframe-box">
           <iframe id="player-1" src="https://www.youtube.com/embed/o1eY1MPcRQs" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
     </div>
  </div>


  

  
 
        </div>
       
      </div>
    );
  }
}

Landing.propTypes = {
  security: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  security: state.security,
});

export default connect(mapStateToProps)(Landing);
