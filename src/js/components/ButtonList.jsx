import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

class ButtonList extends React.Component{
    
render() {
    
    
    return (
        <div className="buttonDiv">
        
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 col-sm-6 mx-auto">
                        <Link to="/about-us">
                            <button type="button" className="btn btn-outline-dark handShake" href="about-us">Meet Us
                                <p></p>
                                <i className="far fa-handshake"></i>
                            </button>
                        </Link>
                        <Link to="/new-patients">
                            <button type="button" className="btn btn-outline-dark question">Ask the Doctor
                                <p></p>
                                <i className="far fa-question-circle"></i>
                            </button>
                        </Link>    
                        <Link to="/new-patients">
                            <button type="button" className="btn btn-outline-dark appts">Appointments
                                <p></p>
                                <i className="far fa-calendar-check"></i>
                            </button>
                        </Link> 
                    </div>
                </div>
            </div>
        
        
        </div>
      
    );
  }
}

export default ButtonList;