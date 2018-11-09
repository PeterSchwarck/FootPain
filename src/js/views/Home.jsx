import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
import NavBarRibbon from '../components/NavBarRibbon.jsx';
import Footer from '../components/Footer.jsx';
import MapContainer from '../components/MapContainer.jsx';
import ButtonList from '../components/ButtonList.jsx';
import Form from '../components/Form.jsx';


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
                        <Form />
                    </span>

                </div>
                <div className="col-12 col-lg-8 col-md-10 mx-auto">
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-8 col-md-10 mx-auto topRow">
                </div>
                <div className="col-12 col-lg-10 col-md-10 mx-auto col-centered logoAndNo">
                    <ButtonList />
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
                        <ul className="conditionsUl">
                            <li>Foot and Ankle Pain</li>
                            <li>Ingrown Toenails</li>
                            <li>Diabetic Infections</li>
                            <li>Bunions</li>
                            <li>Gout</li>
                            <li>Athlete’s Foot</li>
                            <li>Heel & Bone Spurs</li>
                            <li>Forefoot Pain</li>
                            <li>Hammer Toes</li>
                            <li>Running Injuries</li>
                            <li>Fractures / Injuries</li>
                            <li>Flat Feet</li>
                            <li>Diabetic Neuropathy</li>
                            <li>Diabetic Foot Care</li>
                            <li>Fungal Toenails</li>
                            <li>Medicare’s Diabetic Shoe Program</li>
                            <li>Warts</li>
                            <li>Custom Orthotics</li>
                        </ul>
                    </div>
                    <div className="mapDiv">
                        <h4>Location</h4>
                        <div className="mapDivContent">
                            <MapContainer />
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
                        Dr. Rhodes and his staff offers a high quality patient care experience. Please read the testimonials.
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
