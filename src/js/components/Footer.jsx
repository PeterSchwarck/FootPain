import React from 'react';
import {Link} from 'react-router-dom';

class Footer extends React.Component{
    
    render(){
        return (
            <footer className="containerFooter">
                <div className="row">
                    <div className="col-12 col-lg-8 col-md-10 mx-auto topRow">
                    </div>
                    <div className="col-12 col-lg-10 col-md-10 mx-auto col-centered">
                        <div className="aboutUs">
                            <h5>About Us</h5>
                            <ul>
                                <li>Home</li>
                                <li>About Dr. Jay Rhodes</li>
                                <li>Before and After</li>
                                <li>Testimonials</li>
                                <li>Videos</li>
                                <li>New Patients</li>
                                <li>Blog</li>
                            </ul>    
                        </div>
                        <div className="footAnklePain">
                            <h5>Foot & Ankle Pain</h5>
                            <ul className="footAnklePainUl">
                                <li>Diabetic Neuropathy</li>
                                <li>Diabetic Foot Care</li>
                                <li>Diabetic Infections</li>
                                <li>Medicare’s Diabetic Shoe Program</li>
                                <li>Diabetic Neuropathy</li>
                                <li>Diabetic Foot Care</li>
                                <li>Diabetic Infections</li>
                                <li>Medicare’s Diabetic Shoe Program</li>
                                <li>Athletes Foot</li>
                                <li>Bunions</li>
                                <li>Burning / Tingling</li>
                                <li>Custom Orthotics</li>
                                <li>Fractures</li>
                                <li>Fungal Toenails</li>
                                <li>Gout</li>
                                <li>Hammer Toes</li>
                                <li>Heel & Bone Spurs</li>
                                <li>Ingrown Toenails</li>
                                <li>Neuromas / Forefoot Pain</li>
                                <li>Warts</li>
                            </ul>
                        </div>

                    </div>
                    <div className="col-12 col-lg-8 col-md-10 mx-auto">
                    </div>
                </div>
            </footer>
                        
        );
    }   

}    

export default Footer;