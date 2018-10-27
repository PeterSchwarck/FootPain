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
                            <form>
                                <div className="form-group">
                                    <label htmlFor="inputName">Name</label>
                                    <input type="text" className="form-control" id="inputName" placeholder="Name"></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputNumber">Phone Number</label>
                                    <input type="text" className="form-control" id="inputNumber" placeholder="Phone Number"></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputName">Email</label>
                                    <input type="email" className="form-control" id="inputEmail" placeholder="Email"></input>
                                </div>
                                    
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Questions</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </span>

                </div>
                <div className="col-12 col-lg-8 col-md-10 mx-auto">
                </div>
            </div>
                
                
                

            
            
            
            
            
            
            
            <Footer />
        </div>
    );
  }
}
