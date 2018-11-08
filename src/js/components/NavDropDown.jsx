import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class NavDropDown extends React.Component{
    
    constructor() {
        super();
    
        this.state = {
            showMenu: false
    };
    
    this.showMenu = this.showMenu.bind(this);
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
                            <option onClick={() => this.props.onClose()} value="item1">Menu Item 1</option>
                            <option value="item2">Menu Item 2</option>
                            <option value="item3">Menu Item 3</option>
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

NavDropDown.propTypes = {
  onClose: PropTypes.func
};