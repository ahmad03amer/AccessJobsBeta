import React, { Component } from 'react'
import {Link} from "react-router-dom"; 
import '../Page_Css/TraningCourse.css';
import blog from '../../picture/about.jpg';



class TrnaingCourses extends Component {
    render() {
        return (
            <div> 


 {/* <!-- ======= Hero Section ======= -->*/}
  <section id="hero2" className="heroo mb-1">
    <div className="hero-container2 " data-aos="fade-up">
      <h1>Welcome To Access Jobs Blog</h1>
      <h2>Blogs of Access jobs to help you to  have more knowledge  </h2>
      <a href="/" className="btn-get-started2 scrollto">Go To add your blog</a>
    </div>
  </section>
  
  {/* <!-- End Hero -->*/} 
  <section id="counts2" className="counts2 section-bg">
      <div className="container">

        <div className="row counters">

          <div className="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up"> <i className="fas fa-smile-beam"></i>1232</span>
            
           
            <p>Students</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up"><i className="fas fa-book"></i>64</span>
            <p>Courses</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up"><i className="fas fa-school"></i>42</span>
            <p>Partners</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up"><i className="fas fa-user-graduate"></i>15</span>
            <p>Trainers</p>
          </div>

        </div>

      </div>
    </section>


    <section id="about2" className="about2">
      <div className="container" data-aos="fade-up">

        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
            <img src={blog} className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content2 mt-5">
            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
            <p className="font-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><i className="fas fa-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i className="fas fa-check"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li><i className="fas fa-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            </p>

          </div>
        </div>

      </div>
    </section>






    <section id="courses" className="courses mt-5 mb-5">
      <div className="container" data-aos="fade-up">

        <div className="row" data-aos="zoom-in" data-aos-delay="100">

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="course-item">
              <img src={blog} className="img-fluid" alt="..."/>
              <div className="course-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4>Web Development</h4>
                  <p className="price">$169</p>
                </div>

                <h3><a href="course-details.html">Website Design</a></h3>
                <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <img src={blog} className="img-fluid" alt=""/>
                    <span>Antonio</span>
                  </div>
                  <div className="trainer-rank d-flex align-items-center">
                    <i className="fas fa-user-friends"></i>&nbsp;61
                    &nbsp;&nbsp;
                    <i className="fas fa-heart"></i>&nbsp;53
                  </div>
                </div>
              </div>
            </div>
          </div> 
          

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div className="course-item">
              <img src={blog} className="img-fluid" alt="..."/>
              <div className="course-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4>Marketing</h4>
                  <p className="price">$250</p>
                </div>

                <h3><a href="course-details.html">Search Engine Optimization</a></h3>
                <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <img src={blog} className="img-fluid" alt=""/>
                    <span>Lana</span>
                  </div>
                  <div className="trainer-rank d-flex align-items-center">
                  <i className="fas fa-user-friends"></i>&nbsp;38
                    &nbsp;&nbsp;
                    <i className="fas fa-heart"></i>&nbsp;21
                  </div>
                </div>
              </div>
            </div>
          </div> 

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div className="course-item">
              <img src={blog} className="img-fluid" alt="..."/>
              <div className="course-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4>Content</h4>
                  <p className="price">$180</p>
                </div>

                <h3><a href="course-details.html">Copywriting</a></h3>
                <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <img src={blog} className="img-fluid" alt=""/>
                    <span>Brandon</span>
                  </div>
                  <div className="trainer-rank d-flex align-items-center">
                  <i className="fas fa-user-friends"></i>&nbsp;19
                    &nbsp;&nbsp;
                    <i className="fas fa-heart"></i>&nbsp;8
                  </div>
                </div>
              </div>
            </div>
          </div>
        
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-5">
            <div className="course-item">
              <img src={blog} className="img-fluid" alt="..."/>
              <div className="course-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4>Content</h4>
                  <p className="price">$180</p>
                </div>

                <h3><a href="course-details.html">Copywriting</a></h3>
                <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <img src={blog} className="img-fluid" alt=""/>
                    <span>Brandon</span>
                  </div>
                  <div className="trainer-rank d-flex align-items-center">
                  <i className="fas fa-user-friends"></i>&nbsp;19
                    &nbsp;&nbsp;
                    <i className="fas fa-heart"></i>&nbsp;8
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-5">
            <div className="course-item">
              <img src={blog} className="img-fluid" alt="..."/>
              <div className="course-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4>Content</h4>
                  <p className="price">$180</p>
                </div>

                <h3><a href="course-details.html">Copywriting</a></h3>
                <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <img src={blog} className="img-fluid" alt=""/>
                    <span>Brandon</span>
                  </div>
                  <div className="trainer-rank d-flex align-items-center">
                  <i className="fas fa-user-friends"></i>&nbsp;19
                    &nbsp;&nbsp;
                    <i className="fas fa-heart"></i>&nbsp;8
                  </div>
                </div>
              </div>
            </div>
          </div> 
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-5">
            <div className="course-item">
              <img src={blog} className="img-fluid" alt="..."/>
              <div className="course-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4>Content</h4>
                  <p className="price">$180</p>
                </div>

                <h3><a href="course-details.html">Copywriting</a></h3>
                <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <img src={blog} className="img-fluid" alt=""/>
                    <span>Brandon</span>
                  </div>
                  <div className="trainer-rank d-flex align-items-center">
                  <i className="fas fa-user-friends"></i>&nbsp;19
                    &nbsp;&nbsp;
                    <i className="fas fa-heart"></i>&nbsp;8
                  </div>
                </div>
              </div>
            </div>
          </div> 
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-5">
            <div className="course-item">
              <img src={blog} className="img-fluid" alt="..."/>
              <div className="course-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4>Content</h4>
                  <p className="price">$180</p>
                </div>

                <h3><a href="course-details.html">Copywriting</a></h3>
                <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <img src={blog} className="img-fluid" alt=""/>
                    <span>Brandon</span>
                  </div>
                  <div className="trainer-rank d-flex align-items-center">
                  <i className="fas fa-user-friends"></i>&nbsp;19
                    &nbsp;&nbsp;
                    <i className="fas fa-heart"></i>&nbsp;8
                  </div>
                </div>
              </div>
            </div>
          </div> 
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-5">
            <div className="course-item">
              <img src={blog} className="img-fluid" alt="..."/>
              <div className="course-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4>Content</h4>
                  <p className="price">$180</p>
                </div>

                <h3><a href="course-details.html">Copywriting</a></h3>
                <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <img src={blog} className="img-fluid" alt=""/>
                    <span>Brandon</span>
                  </div>
                  <div className="trainer-rank d-flex align-items-center">
                  <i className="fas fa-user-friends"></i>&nbsp;19
                    &nbsp;&nbsp;
                    <i className="fas fa-heart"></i>&nbsp;8
                  </div>
                </div>
              </div>
            </div>
          </div> 
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-5">
            <div className="course-item">
              <img src={blog} className="img-fluid" alt="..."/>
              <div className="course-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4>Content</h4>
                  <p className="price">$180</p>
                </div>

                <h3><a href="course-details.html">Copywriting</a></h3>
                <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <img src={blog} className="img-fluid" alt=""/>
                    <span>Brandon</span>
                  </div>
                  <div className="trainer-rank d-flex align-items-center">
                  <i className="fas fa-user-friends"></i>&nbsp;19
                    &nbsp;&nbsp;
                    <i className="fas fa-heart"></i>&nbsp;8
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-5">
            <div className="course-item">
              <img src={blog} className="img-fluid" alt="..."/>
              <div className="course-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4>Content</h4>
                  <p className="price">$180</p>
                </div>

                <h3><a href="course-details.html">Copywriting</a></h3>
                <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <img src={blog} className="img-fluid" alt=""/>
                    <span>Brandon</span>
                  </div>
                  <div className="trainer-rank d-flex align-items-center">
                  <i className="fas fa-user-friends"></i>&nbsp;19
                    &nbsp;&nbsp;
                    <i className="fas fa-heart"></i>&nbsp;8
                  </div>
                </div>
              </div>
            </div>
          </div>  

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-5">
            <div className="course-item">
              <img src={blog} className="img-fluid" alt="..."/>
              <div className="course-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4>Content</h4>
                  <p className="price">$180</p>
                </div>

                <h3><a href="course-details.html">Copywriting</a></h3>
                <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <img src={blog} className="img-fluid" alt=""/>
                    <span>Brandon</span>
                  </div>
                  <div className="trainer-rank d-flex align-items-center">
                  <i className="fas fa-user-friends"></i>&nbsp;19
                    &nbsp;&nbsp;
                    <i className="fas fa-heart"></i>&nbsp;8
                  </div>
                </div>
              </div>
            </div>
          </div>  

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-5">
            <div className="course-item">
              <img src={blog} className="img-fluid" alt="..."/>
              <div className="course-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4>Content</h4>
                  <p className="price">$180</p>
                </div>

                <h3><a href="course-details.html">Copywriting</a></h3>
                <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <img src={blog} className="img-fluid" alt=""/>
                    <span>Brandon</span>
                  </div>
                  <div className="trainer-rank d-flex align-items-center">
                  <i className="fas fa-user-friends"></i>&nbsp;19
                    &nbsp;&nbsp;
                    <i className="fas fa-heart"></i>&nbsp;8
                  </div>
                </div>
              </div>
            </div>
          </div>     

        </div>

      </div>
    </section>
    </div>
        )
    }
}

export default TrnaingCourses;
