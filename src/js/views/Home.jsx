import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
import NavBarRibbon from '../components/NavBarRibbon.jsx';
import Footer from '../components/Footer.jsx';

export default class Home extends Flux.DashView {
    
    
  render() {
    return (
        <div className="homeDiv">
            <div>
                <NavBarRibbon />
            </div>
            
            
            <div className="row rowOne">
                <div className="col-12 col-lg-8 col-md-10 mx-auto topRow">
                </div>
                <div className="col-12 col-lg-10 col-md-10 mx-auto col-centered">
                    <span>
                        <div className="imageBox">Big image box</div>
                    </span>
                    <span>
                        <div className="formContainer">
                            <h4>How can we help you?</h4>
                            <h5>Request an appointment</h5>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="inputName"></label>
                                    <input type="text" className="form-control" id="inputName" placeholder="Name"></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputNumber"></label>
                                    <input type="text" className="form-control" id="inputNumber" placeholder="Phone Number"></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputName"></label>
                                    <input type="email" className="form-control" id="inputEmail" placeholder="Email"></input>
                                </div>
                                    
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1"></label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Questions or Comments"rows="3"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </span>

                </div>
                <div className="col-12 col-lg-8 col-md-10 mx-auto">
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-8 col-md-10 mx-auto topRow">
                </div>
                <div className="col-12 col-lg-10 col-md-10 mx-auto col-centered logoAndNo">
                    <div className="buttonRow">
                        <div className="btn-group btn-group-lg" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-secondary">Meet Us</button>
                            <button type="button" className="btn btn-secondary">Ask the Doctor</button>
                            <button type="button" className="btn btn-secondary">Request an Appointment</button>
                        </div>
                    </div>    
                </div>
                <div className="col-12 col-lg-8 col-md-10 mx-auto">
                </div>
            </div>
            <div className="row conditionsMapRow">
                <div className="col-12 col-lg-8 col-md-10 mx-auto topRow">
                </div>
                <div className="col-12 col-lg-10 col-md-10 mx-auto col-centered">
                    <div className="conditionsDiv">
                        <h3>We Treat the Following Common Podiatry Issues & Conditions</h3>
                    </div>
                    <div className="mapDiv">
                        <h4>Location</h4>
                        <div className="mapDivContent">
                        5642 W. Atlantic Blvd.
                        Margate, FL 33063
                        </div>
                    </div>

                </div>
                <div className="col-12 col-lg-8 col-md-10 mx-auto">
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-8 col-md-10 mx-auto topRow">
                </div>
                <div className="col-12 col-lg-10 col-md-10 mx-auto col-centered">
                    <div className="weHeretoHelpDiv">
                        <h3>We’re Here to Help</h3>
                    </div>
                    <div className="testimonialDiv">
                        <h4>Testimonials</h4>
                        <div className="testimonialContent">
                        Content Content Content Conten
                        </div>
                    </div>
                    

                </div>
                <div className="col-12 col-lg-8 col-md-10 mx-auto">
                </div>
            </div>
                
                
                

            
            
            
            
            
            
            
            <Footer />
        </div>
    );
  }
}
