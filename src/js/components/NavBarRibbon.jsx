import React from 'react';
import {Link} from 'react-router-dom';
import logoUrl from '../../img/logo.png';
import LanguageDropDown from '../components/LanguageDropDown.jsx';
import NavDropDown from '../components/NavDropDown.jsx';
import PropTypes from 'prop-types';

class NavBarRibbon extends React.Component{
    constructor(){
        super();
             this.state = {
                 clickFunction() {
                     return {
                         condition: false
                     };
                 }
             };
    }
    
    handleClick(){
        this.setState({
            condition: !this.state.condition
        });
    }
    
    
    
    render(){
        return (
            <div className="containerNavBar">
                <div className="navBarRibbon">
                    <div className="row logoRow">
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
                            <Link to="/home">
                                <img className="logoImg" src={logoUrl}>
                                </img>
                            </Link>    
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
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarText">
                                <ul className="navbar-nav mr-auto navConatiner">
                                    <li className="nav-item">
                                        <Link to='home' className="nav-link" href="#">Home</Link>
                                    </li>
                                    <NavDropDown 
                                    onChange={(e) => this.dropDownChange1(e)} />
                                    <li className="nav-item">
                                        <Link to='about-us' className="nav-link" href="#">About Dr. Jay Rhodes</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='before-and-after' className="nav-link" href="#">Before & After</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='testimonials' className="nav-link" href="#">Testimonials</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='new-patients'className="nav-link" href="#">New Patients</Link>
                                    </li>
                                </ul>
                                
                                
                                
                                
                            </div>
                        
                        </nav>
                    </div>    
                    <div className="col-12 col-lg-8 col-md-10 mx-auto">
                    </div>
                </div>
                
                
                
                
            </div>
            
            );
    }
}

export default NavBarRibbon;

NavBarRibbon.propTypes = {
  notificationObject: PropTypes.object
 
};
