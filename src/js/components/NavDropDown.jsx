import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class NavDropDown extends React.Component{
    
    constructor() {
        super();
    
        this.state = {
            showMenu: false
    };
    
  }
  
  showMenu(e) {
      e.preventDefault();
      
      this.setState({
          showMenu: !this.state.showMenu
      });
  }
  
  
  closeMenu() {
      this.setState({ showMenu: false }, () => {
          document.removeEventListener('click', this.closeMenu);
      });
  }
  
    render(){
        return (
            <div className="NavDropDownDiv">
                <div className="dropDownButton" onClick={(e) => this.showMenu(e)
                    
                }>
                Foot & Ankle Pain
                </div>
                
                {
                    this.state.showMenu
                    ? (
                
                        <div className="dropdownContent">
                            <a href="#" className="link">You</a>
                            <br></br>
                            <a href="#" className="link">Look</a>
                            <br></br>
                            <a href="#" className="link">Awesome</a>
                            <br></br>
                            <a href="#" className="link">Today !</a>
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
