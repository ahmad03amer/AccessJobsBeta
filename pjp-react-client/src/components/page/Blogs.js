import React, { Component } from 'react';
import '../Page_Css/Blog.css';

import blog from '../../picture/about.jpg';
import blog1 from '../../picture/blog-1.jpg';



 class Blogs extends Component {

    render() {
        return (
            <div>
              
 {/* <!-- ======= Hero Section ======= -->*/}
  <section id="hero" className="heroo mb-1">
    <div className="hero-container " data-aos="fade-up">
      <h1>Welcome To Access Jobs Blog</h1>
      <h2>Blogs of Access jobs to help you to  have more knowledge  </h2>
      <a href="/" className="btn-get-started scrollto">Go To add your blog</a>
    </div>
  </section>
  
  {/* <!-- End Hero -->*/}

  

   {/*  <!-- ======= About Section ======= -->*/}
    <section id="about" className="about mt-0">
      <div className="container">

        <div className="row justify-content-end">
          <div className="col-lg-11">
            <div className="row justify-content-end">

              <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                <div className="count-box py-5">
                <i className="fas fa-smile-beam mt-3"></i>
                  <span data-purecounter-start="0" data-purecounter-end="65" className="purecounter">5006</span>
                  <p>Happy Clients</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                <div className="count-box py-5">
                <i className="fad fa-user-hard-hat mt-3" ></i>
                  <span data-purecounter-start="0" data-purecounter-end="85" className="purecounter">12157</span>
                  <p>Jobs</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                <div className="count-box pb-5 pt-0 pt-lg-5">
                <i className="fas fa-calendar-day mt-3"></i>
                  <span data-purecounter-start="0" data-purecounter-end="27" className="purecounter">142</span>
                  <p>Jobs in Day</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                <div className="count-box pb-5 pt-0 pt-lg-5">
                <i className="fas fa-award mt-3"></i>
                  <span data-purecounter-start="0" data-purecounter-end="22" className="purecounter">16</span>
                  <p>Awards</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="row">

          <div className="col-lg-6 video-box align-self-baseline position-relative mt-4">
            <img src={blog} className="img-fluid" alt="img"/>
            <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox play-btn mb-4"></a>
          </div>

          <div className="col-lg-6 pt-3 pt-lg-0 content">
            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p> 
            <ul>
              <li><i className="fas fa-check-double"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i className="fas fa-check-double"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li><i className="fas fa-check-double"></i> Voluptate repellendus pariatur reprehenderit corporis sint.</li>
              <li><i className="fas fa-check-double"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>

        </div>

      </div>
    </section>
    
    {/* <!-- End About Section -->*/}

   {/*  <!-- ======= Cta Section ======= -->*/}
    <section id="cta" className="cta mt-5">
      <div className="container" data-aos="fade-in">

        <div className="text-center">
          <h3>Call To Action</h3>
          <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <a className="cta-btn" href="/">Call To Action</a>
        </div>

      </div>
    </section>
   {/*  <!-- End Cta Section --> */}

 {/* <!-- ======= Blog Section ======= -->*/}
 <section id="blog" className="blog">
      <div className="container" data-aos="fade-up">

        <div className="row">

          <div className="col-lg-8 entries">

            <article className="entry mt-5">

              <div className="entry-img">
                <img src={blog} alt="" className="img-fluid"/>
              </div>

              <h2 className="entry-title">
                <a href="/">Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia</a>
              </h2>

              <div className="entry-meta">
                <ul>
                  <li className="d-flex align-items-center"><i class="fas fa-user"></i> <a href="/">Malak ibrahim</a></li>
                  <li className="d-flex align-items-center"><i class="fas fa-clock"></i> <a href="/"><time dateTime="2021-05-01">May 1, 2021</time></a></li>
                  <li className="d-flex align-items-center"><i class="fas fa-comments"></i> <a href="/">0 Comments</a></li>
                </ul>
              </div>

              <div className="entry-content">
                <p>
                  Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.
                  Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.
                </p>
                <div className="read-more">
                  <a href="/">Read More</a>
                </div>
              </div>

            </article>
            {/* <!-- End blog entry -->*/}

            <article className="entry">

              <div className="entry-img">
                <img src={blog} alt="" className="img-fluid"/>
              </div>

              <h2 className="entry-title">
                <a href="/">Nisi magni odit consequatur autem nulla dolorem</a>
              </h2>

              <div className="entry-meta">
                <ul>
                <li className="d-flex align-items-center"><i className="fas fa-user"></i> <a href="/">Malak ibrahim</a></li>
                  <li className="d-flex align-items-center"><i className="fas fa-clock"></i> <a href="/"><time dateTime="2021-05-01">May 1, 2021</time></a></li>
                  <li className="d-flex align-items-center"><i className="fas fa-comments"></i> <a href="/">0 Comments</a></li>
                </ul>
              </div>

              <div className="entry-content">
                <p>
                  Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam.
                  Ad impedit qui officiis est in non aliquid veniam laborum. Id ipsum qui aut. Sit aliquam et quia molestias laboriosam. Tempora nam odit omnis eum corrupti qui aliquid excepturi molestiae. Facilis et sint quos sed voluptas. Maxime sed tempore enim omnis non alias odio quos distinctio.
                </p>
                <div className="read-more">
                  <a href="/">Read More</a>
                </div>
              </div>

            </article>
            {/*  <!-- End blog entry -->*/}

            <article className="entry">

              <div className="entry-img">
                <img src={blog} alt="" className="img-fluid"/>
              </div>

              <h2 className="entry-title">
                <a href="/">Possimus soluta ut id suscipit ea ut. In quo quia et soluta libero sit sint.</a>
              </h2>

              <div className="entry-meta">
                <ul>
                <li className="d-flex align-items-center"><i className="fas fa-user"></i> <a href="/">Malak ibrahim</a></li>
                  <li className="d-flex align-items-center"><i className="fas fa-clock"></i> <a href="/"><time dateTime="2021-05-01">May 1, 2021</time></a></li>
                  <li className="d-flex align-items-center"><i className="fas fa-comments"></i> <a href="/">0 Comments</a></li>
                </ul>
              </div>

              <div className="entry-content">
                <p>
                  Aut iste neque ut illum qui perspiciatis similique recusandae non. Fugit autem dolorem labore omnis et. Eum temporibus fugiat voluptate enim tenetur sunt omnis.
                  Doloremque est saepe laborum aut. Ipsa cupiditate ex harum at recusandae nesciunt. Ut dolores velit.
                </p>
                <div className="read-more">
                  <a href="/">Read More</a>
                </div>
              </div>

            </article>
            
             {/* <!-- End blog entry -->*/}

            <article className="entry">

              <div className="entry-img">
                <img src={blog} alt="" className="img-fluid"/>
              </div>

              <h2 className="entry-title">
                <a href="/">Non rem rerum nam cum quo minus. Dolor distinctio deleniti explicabo eius exercitationem.</a>
              </h2>

              <div className="entry-meta">
                <ul>
                <li className="d-flex align-items-center"><i className="fas fa-user"></i> <a href="/">Malak ibrahim</a></li>
                  <li className="d-flex align-items-center"><i className="fas fa-clock"></i> <a href="/"><time dateTime="2021-05-01">May 1, 2021</time></a></li>
                  <li className="d-flex align-items-center"><i className="fas fa-comments"></i> <a href="/">0 Comments</a></li>
                </ul>
              </div>

              <div className="entry-content">
                <p>
                  Aspernatur rerum perferendis et sint. Voluptates cupiditate voluptas atque quae. Rem veritatis rerum enim et autem. Saepe atque cum eligendi eaque iste omnis a qui.
                  Quia sed sunt. Ea asperiores expedita et et delectus voluptates rerum. Id saepe ut itaque quod qui voluptas nobis porro rerum. Quam quia nesciunt qui aut est non omnis. Inventore occaecati et quaerat magni itaque nam voluptas. Voluptatem ducimus sint id earum ut nesciunt sed corrupti nemo.
                </p>
                <div className="read-more">
                  <a href="/">Read More</a>
                </div>
              </div>

            </article>
            
        {/*    <!-- End blog entry -->*/} 

            <div className="blog-pagination">
              <ul className="justify-content-center">
                <li className="active"><a href="/">1</a></li>
                <li ><a href="/">2</a></li>
                <li><a href="/">3</a></li>
              </ul>
            </div>

          </div>
          {/*  <!-- End blog entries list -->*/}

          <div className="col-lg-4">

            <div className="sidebar mt-5">

              <h3 className="sidebar-title">Search</h3>
              <div className="sidebar-item search-form">
              <form action="">
                  <input type="text"/>
                  <button type="submit"><i class="fas fa-search"></i></button>
                </form>
              </div>
              
              {/*  <!-- End sidebar search formn-->*/}

              <h3 className="sidebar-title">Categories</h3>
              <div className="sidebar-item categories">
                <ul>
                  <li><a href="/">General <span>(25)</span></a></li>
                  <li><a href="/">Lifestyle <span>(12)</span></a></li>
                  <li><a href="/">Travel <span>(5)</span></a></li>
                  <li><a href="/">Design <span>(22)</span></a></li>
                  <li><a href="/">Creative <span>(8)</span></a></li>
                  <li><a href="/">Educaion <span>(14)</span></a></li>
                </ul>
              </div>
              
              {/*  <!-- End sidebar categories-->*/}

              <h3 className="sidebar-title">Recent Posts</h3>
              <div className="sidebar-item recent-posts">
                <div className="post-item clearfix">
                  <img src={blog} alt=""/>
                  <h4><a href="/">Nihil blanditiis at in nihil autem</a></h4>
                  <time dateTime="2021-05-01">May 1, 2021</time>
                </div>

                <div className="post-item clearfix">
                  <img src={blog} alt=""/>
                  <h4><a href="/">Quidem autem et impedit</a></h4>
                  <time dateTime="2021-05-01">May 12, 2021</time>
                </div>

                <div className="post-item clearfix">
                  <img src={blog} alt=""/>
                  <h4><a href="/">Id quia et et ut maxime similique occaecati ut</a></h4>
                  <time dateTime="2021-05-01">May 4, 2021</time>
                </div>

                <div className="post-item clearfix">
                  <img src={blog} alt=""/>
                  <h4><a href="/">Laborum corporis quo dara net para</a></h4>
                  <time dateTime="2021-05-01">May 1, 2021</time>
                </div>

                <div className="post-item clearfix">
                  <img src={blog} alt=""/>
                  <h4><a href="/">Et dolores corrupti quae illo quod dolor</a></h4>
                  <time dateTime="2021-05-01">May 1, 2021</time>
                </div>
                <div className="post-item clearfix">
                  <img src={blog} alt=""/>
                  <h4><a href="/">Et dolores corrupti quae illo quod dolor</a></h4>
                  <time dateTime="2021-05-01">May 1, 2021</time>
                </div>
                <div className="post-item clearfix">
                  <img src={blog} alt=""/>
                  <h4><a href="/">Et dolores corrupti quae illo quod dolor</a></h4>
                  <time dateTime="2021-05-01">May 1, 2021</time>
                </div>
                <div className="post-item clearfix">
                  <img src={blog} alt=""/>
                  <h4><a href="/">Et dolores corrupti quae illo quod dolor</a></h4>
                  <time dateTime="2021-05-01">May 1, 2021</time>
                </div>
                <div className="post-item clearfix">
                  <img src={blog} alt=""/>
                  <h4><a href="/">Et dolores corrupti quae illo quod dolor</a></h4>
                  <time dateTime="2021-05-01">May 1, 2021</time>
                </div>
                <div className="post-item clearfix">
                  <img src={blog} alt=""/>
                  <h4><a href="/">Et dolores corrupti quae illo quod dolor</a></h4>
                  <time dateTime="2021-05-01">May 1, 2021</time>
                </div>
                <div className="post-item clearfix">
                  <img src={blog} alt=""/>
                  <h4><a href="/">Et dolores corrupti quae illo quod dolor</a></h4>
                  <time dateTime="2021-05-01">May 1, 2021</time>
                </div>
                <div className="post-item clearfix">
                  <img src={blog} alt=""/>
                  <h4><a href="/">Et dolores corrupti quae illo quod dolor</a></h4>
                  <time dateTime="2021-05-01">May 1, 2021</time>
                </div>
                <div className="post-item clearfix">
                  <img src={blog} alt=""/>
                  <h4><a href="/">Et dolores corrupti quae illo quod dolor</a></h4>
                  <time dateTime="2021-05-01">May 1, 2021</time>
                </div>
                <div className="post-item clearfix">
                  <img src={blog} alt=""/>
                  <h4><a href="/">Et dolores corrupti quae illo quod dolor</a></h4>
                  <time dateTime="2021-05-01">May 1, 2021</time>
                </div>
                <div className="post-item clearfix">
                  <img src={blog} alt=""/>
                  <h4><a href="/">Et dolores corrupti quae illo quod dolor</a></h4>
                  <time dateTime="2021-05-01">May 1, 2021</time>
                </div>

              </div>
              
              {/* <!-- End sidebar recent posts--> */} 

              <h3 className="sidebar-title">Tags</h3>
              <div className="sidebar-item tags">
                <ul>
                  <li><a href="/">App</a></li>
                  <li><a href="/">IT</a></li>
                  <li><a href="/">Business</a></li>
                  <li><a href="/">Software</a></li>
                  <li><a href="/">Design</a></li>
                  <li><a href="/">Accounting</a></li>
                  <li><a href="/">Legal</a></li>
                  <li><a href="/">Android</a></li>
                  <li><a href="/">DevOps</a></li>
                  <li><a href="/">Frpnt-End</a></li>
                  <li><a href="/">Back-End</a></li>
                </ul>
              </div>
              
             {/*  <!-- End sidebar tags--> */}

            </div>
            
           {/*  <!-- End sidebar -->*/}

          </div>
          {/*  <!-- End blog sidebar -->*/}

        </div>

      </div>
    </section>
    {/*  <!-- End Blog Section -->*/}


            </div>
        )
    }
}

export default Blogs; 
