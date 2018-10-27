import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class LanguageDropDown extends React.Component{
    

    
render() {
    return (
        <div className='languageToggle'>
            <form onSubmit={this.handleSubmit}>
                <label>
                    <span className='label1'>
            Delta:
                    </span>
                    <select className= 'delta'
            value={this.state.value} 
            onChange={(e)=>{
              this.props.onChange(e.target.value);
              this.setState({
                value: e.target.value
              });
            }}>
                        <option value="Spanish">Spanish</option>
                        <option value="Creole">Haitian Creole</option>
                    </select>
                </label>
          
            </form>
        </div>
    );
  }
}

export default LanguageDropDown;

LanguageDropDown.propTypes = {
  onChange: PropTypes.func
};