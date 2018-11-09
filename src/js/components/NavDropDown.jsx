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
          showMenu: true
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
                <button onClick={(e) => this.showMenu(e)
                    
                }>
                Foot & Ankle Pain
                </button>
                
                {
                    this.state.showMenu
                    ? (
                
                        <div className="menu">
                            <a href="/profile">Profile</a>
                            <p></p>
                            <a href="/favorites">Favorites</a>
                            <p></p>
                            <a href="/logout">Log Out</a>
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
