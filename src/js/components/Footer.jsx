import React from 'react';
import {Link} from 'react-router-dom';

class Footer extends React.Component{
    
    render(){
        return (
            <footer className="containerFooter">
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-md-6 mb-md-0 mb-3 firstColumn">
                            <h5 className="text-uppercase">About Us</h5>
                            <ul className="list-unstyle nav-stacked">
                                <li>
                                    <a href="#!">Home</a>
                                </li>
                                <li>
                                    <a href="#!">About Dr. Jay Rhodes</a>
                                </li>
                                <li>
                                    <a href="#!">Testimonials</a>
                                </li>
                                <li>
                                    <a href="#!">New Patients</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 mb-md-0 mb-3 secondColumn">
                            <h5 className="text-uppercase">Foot & Ankle Pain</h5>
                            <div className="columnDiv">
                                <ul className="list-unstyle nav-stackedd">
                                    <li>
                                        <a href="#!">Diabetic Neuropathy</a>
                                    </li>
                                    <li>
                                        <a href="#!">Diabetic Foot Care</a>
                                    </li>
                                    <li>
                                        <a href="#!">Diabetic Infections</a>
                                    </li>
                                    <li>
                                        <a href="#!">Medicare’s Diabetic Shoe Program</a>
                                    </li>
                                    <li>
                                        <a href="#!">Athletes Foot</a>
                                    </li>
                                </ul>
                                <ul className="list-unstyle nav-stacked">
                                    <li>
                                        <a href="#!">Bunions</a>
                                    </li>
                                    <li>
                                        <a href="#!">Burning / Tingling</a>
                                    </li>
                                    <li>
                                        <a href="#!">Custom Orthotics</a>
                                    </li>
                                    <li>
                                        <a href="#!">Fractures</a>
                                    </li>
                                    <li>
                                        <a href="#!">Gout</a>
                                    </li>
                                    <li>
                                        <a href="#!">Fungal Toenails</a>
                                    </li>
                                </ul>
                                <ul className="list-unstyle nav-stacked">
                                    <li>
                                        <a href="#!">Hammer Toes</a>
                                    </li>
                                    <li>
                                        <a href="#!">Heel & Bone Spurs</a>
                                    </li>
                                    <li>
                                        <a href="#!">Ingrown Toenails</a>
                                    </li>
                                    <li>
                                        <a href="#!">Neuromas / Forefoot Pain</a>
                                    </li>
                                    <li>
                                        <a href="#!">Warts</a>
                                    </li>
                                </ul>
                            </div>    
                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-center py-3">Copyright © 2018 FootPain1.com
                </div>
            </footer>
                        





                        

                        
        );
    }   

}    

export default Footer;