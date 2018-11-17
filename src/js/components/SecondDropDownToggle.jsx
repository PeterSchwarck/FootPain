import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class SecondDropDownToggle extends React.Component{
    constructor(){
        super();
            this.state = {};
    }
    
    render() {
        if(!this.props.show) return null;
        
        return (
            <div className="SecondDropDownDiv" onMouseLeave={() => this.props.onMouseLeave()}>
                <ul className="nav nav-pills justify-content-center navConatiner">
                    <li className="nav-item">
                        <Link to='home'className="nav-link" href="#">Diabetic Neuropathy</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='home'className="nav-link" href="#">Diabetic Foot Care</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='home'className="nav-link" href="#">Diabetic Infectionsy</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='home'className="nav-link" href="#">Medicare’s Diabetic Shoe Programy</Link>
                    </li>
                </ul>    
    
            </div> 
        );
      }
}

export default SecondDropDownToggle;

SecondDropDownToggle.propTypes = {
  show: PropTypes.object,
  onMouseLeave: PropTypes.func
};






                            