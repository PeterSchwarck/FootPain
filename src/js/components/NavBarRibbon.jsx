import React from 'react';
import {Link} from 'react-router-dom';
import logoUrl from '../../img/logo.png';
import LanguageDropDown from '../components/LanguageDropDown.jsx';
import PropTypes from 'prop-types';

class NavBarRibbon extends React.Component{
    
    render(){
        return (
            <div className="containerNavBar">
                <div className="navBarRibbon">
                    <div className="row">
                        <div className="col-12 col-lg-8 col-md-10 mx-auto topRow">
                        </div>
                        <div className="col-12 col-lg-10 col-md-10 mx-auto col-centered">
                            <span className="socialMediaButtons">
                                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square"></i></a>
                                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square"></i></a>
                                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                            </span>
                            <span className="dropdown">
                            </span>
                        </div>
                        <div className="col-12 col-lg-8 col-md-10 mx-auto">
                        </div>
                    </div>
                </div> 
                <div className="row">
                    <div className="col-12 col-lg-8 col-md-10 mx-auto topRow">
                    </div>
                    <div className="col-12 col-lg-10 col-md-10 mx-auto col-centered logoAndNo">
                        <div className="middleSection">
                            <img className="logoImg" src={logoUrl}></img>
                            <div className="contactInfo">
                                <h3>Same Day Appointments Avaialable</h3>
                                <h1>954-974-3535</h1>
                            </div>
                        </div>    
                    </div>
                    <div className="col-12 col-lg-8 col-md-10 mx-auto">
                    </div>
                </div>
                
                <div className="row bottom">
                    <div className="col-12 col-lg-8 col-md-10 mx-auto topRow">
                    </div>
                    <div className="col-12 col-lg-10 col-md-10 mx-auto col-centered navPills">
                        <div className="navbarBoarder">
                            <ul className="nav nav-pills justify-content-center">
                                <li className="nav-item dropdown">
                                    <button className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false" onClick={() =>{
                                 
                                        
                                    }}> Foot & Ankle Pain</button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">About Dr. Jay Rhodes</a>
                                        <a className="dropdown-item" href="#">Before & After</a>
                                        <a className="dropdown-item" href="#">Testimonials</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Separated link</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About Dr. Jay Rhodes</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Before & After</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Testimonials</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Videos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">New Patients</a>
                                </li>
                            </ul>
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                           
                        </div>
                    </div>    
                    <div className="col-12 col-lg-8 col-md-10 mx-auto">
                    </div>
                </div>
                
                
                
                
            </div>
            
            );
    }
}

export default NavBarRibbon;