import React, { Component } from "react";
import ScrollToTop from "./components/TopView/ScrollToTop";

import "./App.css";


import './css/plugins.css';
import './css/style.css';
import './css/templete.css';
import './css/skin/skin-1.css';
import './plugins/slick/slick.min.css';
import './plugins/slick/slick-theme.min.css';









import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddJob from "./components/job/AddJob";
import { Provider } from "react-redux"; //setup the redux
import store from "./store";
import UpdateJob from "./components/job/UpdateJob";
import Landing from "./components/Layout/Landing";


import Register from "./components/UserManagement/Register";
import Login from "./components/UserManagement/Login";
import Footer from "./components/Layout/Footer";
//check if the jwt token is valid and keep it in the storage as long as it is valid
import jwt_decode from "jwt-decode";
import setJWTToken from "./securityUtils/setJWTToken";
import { SET_CURRENT_USER } from "./actions/types";

import { logout } from "./actions/securityActions";

//secure private routes
import SecuredRoute from "./securityUtils/SecureRoute";
import JobBoard from "./components/job/JobBoard";


/* To import the page  */
import AboutUs from "./components/page/AboutUs";
import Blogs from "./components/page/Blogs";
import ContactUs from "./components/page/ContactUs";
import FindJobs from "./components/page/FindJobs";
import JobSeekers from "./components/page/JobSeekers";
import Pricing from "./components/page/Pricing";
import EmployerPostJob from "./components/page/EmployerPostJob";
import Privacy from "./components/page/Privacy";
import Disclaimer from "./components/page/Disclaimer";
import TrnaingCourses from "./components/page/TrnaingCourses";
import TermsOfUse from "./components/page/TermsOfUse";




import Jobmyresume from "./components/UserPofile/Jobmyresume";
import Jobprofile from "./components/UserPofile/Jobprofile";
import Jobcvmanager from "./components/UserPofile/Jobcvmanager";
import Jobsalert from "./components/UserPofile/Jobsalert";
import Jobsavedjobs from "./components/UserPofile/Jobsavedjobs";

import Changepasswordpage from "./components/UserPofile/Changepasswordpage";

import Categoryalljob from "./components/jobSide/Categoryalljob";
import Categorycompanyjob from "./components/jobSide/Categorycompanyjob";
import Categorydesignationsjob from "./components/jobSide/Categorydesignationsjob";
import Categoryjobs from "./components/jobSide/Categoryjobs";
import Categorylocationjobs from "./components/jobSide/Categorylocationjobs";
import Categoryskilljobs from "./components/jobSide/Categoryskilljobs";

import CustomChatbot from "./components/chatbot/CustomChatbot";
import Blogdetail from "./components/page/Blogdetail";

import Freejobalerts from "./components/page/Freejobalerts";


const jwtToken = localStorage.jwtToken;

if (jwtToken) {
  setJWTToken(jwtToken);
  const decoded_jwtToken = jwt_decode(jwtToken);
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decoded_jwtToken
  });

  const currentTime = Date.now() / 1000;
  if (decoded_jwtToken.exp < currentTime) {
    //handle logout
    store.dispatch(logout());
    window.location.href = "/";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
          <ScrollToTop>
            <Header />
            <CustomChatbot/>
            
            {
              //Public Routes
            }

            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />

            {/* this is the path for page  */}
            <Route exact path="/aboutUs" component={AboutUs} />
            <Route exact path="/blogs" component={Blogs} />
            <Route exact path="/contactUs" component={ContactUs} />
            <Route exact path="/findJobs" component={FindJobs} />
            <Route exact path="/jobSeekers" component={JobSeekers} />
            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/employerPostJob" component={EmployerPostJob} />
            <Route exact path="/Privacy" component={Privacy} />
            <Route exact path="/Disclaimer" component={Disclaimer}/>
            <Route exact path="/TrnaingCourses" component={TrnaingCourses}/>
            <Route exact path="/TermsOfUse" component={TermsOfUse}/>
            <Route exact path="/Blogdetail" component={Blogdetail}/>


            {/* job section */}
            <Route path='/category-all-jobs' exact component={Categoryalljob} />
            <Route path='/category-company-jobs' exact component={Categorycompanyjob} />
						<Route path='/category-designations-jobs' exact component={Categorydesignationsjob} />
						<Route path='/category-jobs' exact component={Categoryjobs} />
						<Route path='/category-location-jobs' exact component={Categorylocationjobs} />
						<Route path='/category-skill-jobs' exact component={Categoryskilljobs} />







            <Route exact path="/Jobmyresume" component={Jobmyresume}/>
            <Route exact path="/Jobprofile" component={Jobprofile}/>
            <Route exact path="/Jobcvmanager" component={Jobcvmanager}/>
            <Route exact path="/Jobsalert" component={Jobsalert}/>
            <Route exact path="/Jobsavedjobs" component={Jobsavedjobs}/>
            <Route exact path="/Changepasswordpage" component={Changepasswordpage}/>

            
            <Route exact path="/Freejobalerts" component={Freejobalerts}/>

         
            
           {/* <Route                               component={NotFoundPage}/> */} 
            {
              //Private Routes
            }

            <Switch>
              <SecuredRoute exact path="/dashboard" component={Dashboard} />
              <SecuredRoute exact path="/addJob" component={AddJob} />
              {
                //pass parameter using /:param
              }
              <SecuredRoute exact path="/updateJob/:id" component={UpdateJob} />
              <SecuredRoute exact path="/jobBoard/:id" component={JobBoard} />


            </Switch>
            <Footer/>
            </ScrollToTop>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
