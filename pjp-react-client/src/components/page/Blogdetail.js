import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Sidebar from './Sidebar';





import bg from "./../../picture/bg2.jpg"; 

import bg1 from "./../../picture/bg3.jpg"; 
import bg2 from "./../../picture/bg5.jpg"; 
import bg3 from "./../../picture/pic2.jpg"; 


import mohammad from "./../../picture/T.jpeg"; 
import ahamd from "./../../picture/ahmad1.jpg";
import arkan from "./../../picture/arkan.jpg"
var bnr = require('../../images/banner/bnr1.jpg').default;


class Blogdetail extends Component{
	render(){
		return(
			<>
				
				<div className="page-content bg-white">
					
					<div className="dez-bnr-inr overlay-black-middle" style={{backgroundImage:"url(" + bnr + ")" }}>
						<div className="container">
							<div className="dez-bnr-inr-entry">
								<h1 className="text-white">Blog Details</h1>
								
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to={"/"}>Home</Link></li>
										<li>Blog Details</li>
									</ul>
								</div>
								
							</div>
						</div>
					</div>
					
					<div className="content-area">
						<div className="container">
							<div className="row">
								
								<div className="col-lg-8 col-md-7 m-b10">
									
									<div className="blog-post blog-single blog-style-1">
										<div className="dez-post-meta">
											<ul className="d-flex align-items-center">
												<li className="post-date"><i className="fa fa-calendar"></i>May 1, 2021 at 5:15 am</li>
												<li className="post-author"><i className="fa fa-user"></i>By <Link to={"blogs"}>Sean Bave</Link> </li>
												<li className="post-comment"><i className="fa fa-comments-o"></i><Link to={"blogs"}>1k</Link> </li>
											</ul>
										</div>
										<div className="dez-post-title">
											<h4 className="post-title m-t0"><Link to={"/blogs"}>Building Trust with Your Remote Workers</Link></h4>
										</div>
										<div className="dez-post-media dez-img-effect zoom-slow m-t20"> 
											<Link to={"#"}><img src={bg }alt="" /></Link> 
										</div>
										<div className="dez-post-text">
											<p>In today’s hyper-connected world, employees don’t 
												have to be in the office to be productive. Many companies 
												have identified remote working as a viable option to hire the 
												best staff. Tech companies, always ahead of the game, have been
												 doing this for years. In fact, 36% of developers work remotely at 
												 least a few days each month, while 9% do so full time, according to 
												 Stack Overflow’s Developer Ecosystem Report.</p>

											<p> However, one of the first concerns businesses express around 
												remote workers is: are they working? The issue of trust is one 
												of the most vital aspects of a company’s remote working program. 
												Similarly, it’s crucial for remote workers to feel like valuable 
												additions to a company’s team; in fact, 62% of employees are worried
												 that they aren’t perceived as hard-working when they are not 
												 physically in the office.</p>

											<blockquote>To establish trust with employees there are three areas 
												that businesses need to focus on: communication, outcome-based goals, 
												and the right tools.</blockquote>


											
											<h5>1. Communicate regularly</h5>
											<img className="alignleft blog-side-img" src={bg1} alt="" />
											
											<p>Just because your developer works in another location doesn’t 
												mean that you never speak with them. When you do communicate, 
												make sure you do so in a way that makes them feel at ease.  
												Hold a daily online meeting to have a quick-fire 10-minute 
												conversation at the start of each day, to ensure that everyone 
												in the team is synchronized and, with video conferencing, they 
												see each other and feel connected.
												Furthermore, small rewards can go a long way regarding keeping employees motivated and showing them that you take a genuine interest in their wellbeing. Employees are five times more likely to stay in a company if their managers consistently acknowledge them for doing good work. Also, 70% of employees say that motivation and morale would improve ‘massively’ if managers said ‘thank you’ more.
												A way to show appreciation can be in the form of a gift and note, for instance. For a coffee drinker, a manager can send a developer a good brand of coffee with a note saying ‘thank you for the extra hours that you’ve put in to complete the project last week.’
												</p>
											
											
											<div className="dez-divider bg-gray-dark"></div>
											<h5>2. Set personal outcome-based goals</h5>
											<img className="alignright blog-side-img" src={bg2} alt="" />
											<p>It is often easier to measure remote workers than workers in the office. The reason for this is that remote working is mainly focused on outcomes and not necessarily the hours spent on a project.</p>
										<p>People generally work better when they know what they’re supposed to be doing. Clearly define the responsibilities and goals of everyone in the team.</p>
										<p>Ensure that the expectations are consistent and understood by both parties, and put it in writing. These goals should be personalized, playing-up to each’s strengths to ensure not only the best possible outcomes but also a boost in morale as employees would feel gratified by fully utilizing their skill set.</p> 
										
										
										
										<div className="dez-divider bg-gray-dark"></div>
											<h5>3. Provide the right tools to do the job</h5>
											<img className="alignleft blog-side-img" src={bg3} alt="" />
											<p>A painter can have the best studio, brushes, paint, and inspiration, but unless they have something to paint on, like a canvas, they can’t create. Make sure this doesn’t happen to your developers. Companies can show their support and trust in their employees by providing them with the necessary tools to do the job to the highest possible standard. Look at their workspace requirements. Do they have decent chairs and are their keyboards and screens up to scratch?</p>
										<p>Also, what type of communication tools do you have in place? A good video conferencing tool can make daily meetings mentioned earlier happen easier. Messaging services like Skype or Slack are great for staying in touch throughout the day and answering quick questions. Lastly, create a list of tools that may be useful and share it with your team. These can include time tracking, virtual assistants, team building, group chats, or mind mapping tools.</p>
										<p>In a nutshell, any company must be able to trust its employees, whether they are working remotely or on-site. Remote working, in particular, is a trend not likely to go away soon, with businesses expecting 38% of their full-time staff to be working remotely in the next decade. It is a prerequisite for a new generation of employees, and it’s a compelling offering that can help attract the best talent. Direct benefits can include increased productivity and morale, higher employee retention, and lower operational costs, among others. The time is ripe to shape your company’s remote working policy today and start building on a culture of trust.</p> 
										</div>
										
										
										
										
										<div className="dez-post-tags clear">
											<div className="post-tags">
												<Link to={""}>Employee </Link> 
												<Link to={""}>Eduction </Link> 
												<Link to={""}>Job Seekers</Link> 
												<Link to={""}>Find Jobs</Link> 
											</div>
										</div>
										<div className="dez-divider bg-gray-dark op4"><i className="icon-dot c-square"></i></div>
										<div className="share-details-btn mt-4">
											<ul>
												<li><h5 className="m-a0 ">Share Post</h5></li>
												<li><Link to={"https://www.facebook.com/"} className="site-button facebook button-sm"><i className="fa fa-facebook"></i> Facebook</Link></li>
												<li><Link to={"https://www.google plus.com"} className="site-button google-plus button-sm"><i className="fa fa-google-plus"></i> Google Plus</Link></li>
												<li><Link to={"https://www.linkedin.com/"} className="site-button linkedin button-sm"><i className="fa fa-linkedin"></i> Linkedin</Link></li>
												<li><Link to={"https://www.instagram.com/"} className="site-button instagram button-sm"><i className="fa fa-instagram"></i> Instagram</Link></li>
												<li><Link to={"https://twitter.com/twitter"} className="site-button twitter button-sm"><i className="fa fa-twitter"></i> Twitter</Link></li>
											</ul>
										</div>
									</div>
									<div className="clear" id="comment-list">
										<div className="comments-area" id="comments">
											<h2 className="comments-title">2 Comments</h2>
											<div className="clearfix m-b20">
												
												<ol className="comment-list">
													<li className="comment">
														<div className="comment-body">
															<div className="comment-author vcard"> 
																<img  className="avatar photo" src={arkan} alt="" /> 	<cite className="fn">Arkan Saleh</cite> <span className="says">says:</span> 
															</div>
															<div className="comment-meta"> <Link to={""}>May 1, 2021 at 5:15 am</Link> </div>
															<p>As a result of what I read in this article, I had the idea that I must fully comply with the person I contract with, even if the agreement is through the Internet.
</p>
															<div className="reply"> <Link to={""} className="comment-reply-link">Reply</Link> </div>
														</div>
														<ol className="children">
															<li className="comment odd parent">
																<div className="comment-body">
																	<div className="comment-author vcard"> <img  className="avatar photo" src={ahamd} alt="" /> <cite className="fn">Ahmad Amr</cite> <span className="says">says:</span> </div>
																	<div className="comment-meta"> <Link to={""}>May 2, 2021 at 9:15 am</Link> </div>
																	<p>Yes, dear, this article has stipulated the need to abide by this agreement between you.
</p>
																	<div className="reply"> <Link to={""} className="comment-reply-link">Reply</Link> </div>
																</div>
																
																
															</li>
														</ol>
														
													</li>
													<li className="comment">
														<div className="comment-body">
															<div className="comment-author vcard"> 
															<img  className="avatar photo" src={mohammad} alt="" /> <cite className="fn">Mohammad Gabin</cite> <span className="says">says:</span> </div>
															<div className="comment-meta"> <Link to={""}>May 6, 2021 at 12:00 am</Link> </div>
															<p>This article has changed my system of thinking in the way of searching for work and communicating with those I work for through the Internet, and all this was according to some of the things that I presented in this article.
															Thank you for raising our awareness and understanding in all of this.</p>
															<div className="reply"> <Link to={""} className="comment-reply-link">Reply</Link> </div>
														</div>
													</li>
													
													
												</ol>
											
												<div className="comment-respond" id="respond">
													
													<h4 className="comment-reply-title" id="reply-title">Leave a Reply <small> <Link to={""} style={{display:"none"}} id="cancel-comment-reply-link" rel="nofollow">Cancel reply</Link> </small> </h4>
													
													<form className="comment-form" id="commentform" method="post" action="http://sedatelab.com/developer/donate/wp-comments-post.php">
														<p className="comment-form-author">
															<label htmlFor="author">Name <span className="required">*</span></label>
															<input type="text"  name="Author"  placeholder="Author" id="author" />
														</p>
														<p className="comment-form-email">
															<label htmlFor="email">Email <span className="required">*</span></label>
															<input type="text"  placeholder="Email" name="email" id="email" />
														</p>
														<p className="comment-form-url">
															<label htmlFor="url">Website</label>
															<input type="text"    placeholder="Website"  name="url" id="url" />
														</p>
														<p className="comment-form-comment">
															<label htmlFor="comment">Comment</label>
															<textarea rows="8" name="comment" placeholder="Comment" id="comment"></textarea>
														</p>
														<p className="form-submit">
															<input type="submit" defaultValue="Post Comment" className="submit site-button" id="submit" name="submit" />
														</p>
													</form>
												</div>
												
											</div>
										</div>
									</div>
									
								</div>
								
								<div className="col-lg-4 col-md-5">
									<Sidebar />
								</div>
								
							</div>
						</div>
					</div>
				</div>	
			
			</>	
		)	
		
	}
}
export default Blogdetail;