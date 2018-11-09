import React from 'react';
import PropTypes from 'prop-types';


export class NavDropDown2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    
    
  }
  
  componentDidMount(){
    this.props.onChange(this.state.value);
  }


  render() {
    return (
        <div className='dropDown2'>
            <form onSubmit={this.handleSubmit}>
                <label>
                  Settings:
                    <select className= 'settings'
                    value={this.state.value} 
                    onChange={(e)=>{
                      this.props.onChange(e.target.value);
                      this.setState({
                        value: e.target.value
                        
                      });
                    }}>
                        <option className="dropdown-item" value="price_delta">Price</option>
                        <option value="volume_delta">Volume</option>
          
                    </select>
                </label>
        
            </form>
        </div>
    );
  }
}

NavDropDown2.propTypes = {
  onChange: PropTypes.func
};
