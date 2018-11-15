import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import SecondDropDownToggle from '../components/SecondDropDownToggle.jsx';

class NavDropDown extends React.Component{
    
    constructor() {
        super();
    
        this.state = {
            showMenu: false,
            showSecondMenu: false,
            black : true
    };
    
  }
  
    changeColor(){
        this.setState({black: !this.state.black});
    }
  
    showMenu(e) {
      e.preventDefault();
      
      this.setState({
          showMenu: !this.state.showMenu
      });
  }
  
    showSecondMenu() {
        this.setState((preState) => ({
            showSecondMenu: !this.state.showSecondMenu
        }));
        
    }
  
  
  
  
  
  
  
    render(){
        let btn_class = this.state.black ? "blackButton" : "whiteButton";
        
        return ( 
            <div className="NavDropDownDiv">
                <div className="dropdown-toggle dropDownButton" 
                    onClick={(e) => 
                        this.showMenu(e)
                    }
                    style={{display: "block", color: "#007bff", fontWeight: "bold", padding: "0.5rem 1rem", fontSize: "17px", position: "relative"}}    
                        
                        
                        >
                Foot & Ankle Pain
                </div>
                
                {
                    this.state.showMenu
                    ? (
                
                        <div className="dropdownContent">
                            <a href="#" className="link" onClick={() => this.showSecondMenu()}>Diabetes</a>
                            <br></br>
                            {
                                <SecondDropDownToggle show={this.state.showSecondMenu} onClose={()=>this.showSecondMenu()}  />
                            }
                            
                            <a href="#" className="link">Athletes Foot</a>
                            <br></br>
                            <a href="#" className="link">Bunions</a>
                            <br></br>
                            <a href="#" className="link">Burning / Tingling</a>
                            <br></br>
                            <a href="#" className="link">Custom Orthotics</a>
                            <br></br>
                            <a href="#" className="link">Gout</a>
                            <br></br>
                            <a href="#" className="link">Fractures</a>
                            <br></br>
                            <a href="#" className="link">Fungal Toenails</a>
                            <br></br>
                            <a href="#" className="link">Hammer Toes</a>
                            <br></br>
                            <a href="#" className="link">Heel & Bone Spurs</a>
                            <br></br>
                            <a href="#" className="link">Ingrown Toenails</a>
                            <br></br>
                            <a href="#" className="link">Neuroma</a>
                            <br></br>
                            <a href="#" className="link">Warts</a>
                        </div>
                    )
                    : (
                        null
                    )
                }
            </div>
        );
    }   

}    

export default NavDropDown;
