import React, { Component } from "react";
import weAreHiring from "../../imgs/we-are-hiring-5.jpg";
//when logged in prevent sign up
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Carsual from'./Carsual'; 



class Landing extends Component {
    componentDidMount() {
        if (this.props.security.validToken) {
            this.props.history.push("/dashboard");
        }
    }
    render() {
        return (
          
           <div>
               <Carsual/>
            <div className="container">
            <div className="row">
            <div className="col-md-12">
            <div className="text-lg-center text-left">
            <h3 className="mt-5 mb-lg-2 font-weight-bold" > Explore Jobs By Category </h3>
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
 </div>
         </div>   
           </div>   

   
 

        );
    }
}

Landing.propTypes = {
    security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    security: state.security
});

export default connect(mapStateToProps)(Landing);