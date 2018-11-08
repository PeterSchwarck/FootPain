import React from 'react';
import PropTypes from 'prop-types';

export class NavDropDown2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
            showMenu: false
    };
  
      this.setState({
          showMenu: true
      });
  }
  
  componentDidMount(){
    this.props.onChange(this.state.value);
  }
  
  render(){
        return (
            <div className="NavDropDownDiv">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <span className='label1'>
                          Foot & Ankle Pain
                        </span>
                        <select className= 'delta'
                          value={this.state.value} 
                          onChange={(e)=>{
                            this.props.onChange(e.target.value);
                            this.setState({
                              value: e.target.value
                            });
                          }}>
                            <option value='Foot_and_Ankle_Pain'>Foot and Ankle Pain%</option>
                            <option value='Foot_and_Ankle_Pain'>Foot and Ankle Pain%</option>
                            <option value='Foot_and_Ankle_Pain'>Foot and Ankle Pain%</option>
                        </select>
                    </label>
                    
                </form>
            </div>
        );
    }   

}    

export default NavDropDown2;

NavDropDown2.propTypes = {
  onClose: PropTypes.func,
  onChange: PropTypes.func
};