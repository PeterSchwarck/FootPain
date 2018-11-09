import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component{
    
render() {
    
    
    return (
        <div className="formContainer">
            <h4>How can we help you?</h4>
            <h5>Request an appointment</h5>
            <form>
                <div className="form-group">
                    <label htmlFor="inputName"></label>
                    <input type="text" className="form-control" id="inputName" placeholder="Name"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="inputNumber"></label>
                    <input type="text" className="form-control" id="inputNumber" placeholder="Phone Number"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="inputName"></label>
                    <input type="email" className="form-control" id="inputEmail" placeholder="Email"></input>
                </div>
                    
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1"></label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Questions or Comments"rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div> 
    );
  }
}

export default Form;