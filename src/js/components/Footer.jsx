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
                        <span>
                            <div>
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
                            <div>
                                <h5>Foot & Ankle Pain</h5>
                                <ul>
                                    <li>Diabetic Neuropathy</li>
                                    <li>Diabetic Foot Care</li>
                                    <li>Diabetic Infections</li>
                                    <li>Medicare’s Diabetic Shoe Program</li>
                                </ul>
                            </div>
                        </span>    

                    </div>
                    <div className="col-12 col-lg-8 col-md-10 mx-auto">
                    </div>
                </div>
            </footer>
                        
        );
    }   

}    

export default Footer;