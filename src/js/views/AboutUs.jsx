import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
import NavBarRibbon from '../components/NavBarRibbon.jsx';
import Footer from '../components/Footer.jsx';
import MapContainer from '../components/MapContainer.jsx';
import Form from '../components/Form.jsx';
import jayrhodesUrl from '../../img/jayrhodes.png';
import ButtonList from '../components/ButtonList.jsx';


export default class AboutUs extends Flux.DashView {
    
    render() {
    
    
    return (
        <div className="aboutUsContainer">
            <div>
                <NavBarRibbon />
            </div>    
            <div className="row">
                <div className="col-12 col-lg-8 col-md-10 mx-auto">
                </div>
                <div className="col-12 col-lg-10 col-md-10 mx-auto col-centered">
                    <div className="aboutJay">
                        <h4>About Dr. Jay Rhodes</h4>
                        <div className="headerDiv">
                        Foot Pain Doctor and Diabetic Infections 
                        </div>
                        <div className="imgUlDiv">
                            <img className="jayrhodesImg" src={jayrhodesUrl}>
                            </img>
                            <ul className="ulList">
                                <li>Dr. Rhodes is a graduate of Long Island University and Ohio College of Podiatric Medicine</li>
                                <li>He also attended Cornell University Ithaca, NY</li>
                                <li>He spent a year Preceptorship in Atlanta, GA</li>
                                <li>He is a Diplomat awarded by National Board of Podiatry Examiners</li>
                                <li>Dr. Rhodes studied extensively with now deceased Dr. Marvin Steinberg</li>
                                <li>Dr. Rhodes regularly attends Medical conferences and Wound Care seminars to stay current with today’s ever changing medical advances.</li>
                            </ul>
                        </div>
                    </div>
                    <Form />
                </div>
                <div className="col-12 col-lg-8 col-md-10 mx-auto">
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-8 col-md-10 mx-auto">
                </div>
                
                <div className="col-12 col-lg-10 col-md-10 mx-auto col-centered">
                    <ButtonList />
                    <MapContainer />    
                    Is this thing on?
                </div>
                <div className="col-12 col-lg-8 col-md-10 mx-auto">
                </div>
            </div>
            <Footer />
        
        </div>
      
    );
  }
}
