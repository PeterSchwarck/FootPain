import React from 'react';
import PropTypes from 'prop-types';

class ButtonList extends React.Component{
    
render() {
    
    
    return (
        <div className="buttonDiv">
            <div className="buttonRow">
                <div className="btn-group btn-group-lg" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-outline-dark handShake">Meet Us
                        <p></p>
                        <i className="far fa-handshake"></i>
                    </button>
                    <button type="button" className="btn btn-outline-dark question">Ask the Doc
                        <p></p>
                        <i className="far fa-question-circle"></i>
                    </button>
                    <button type="button" className="btn btn-outline-dark appts">Appointments
                        <p></p>
                        <i className="far fa-calendar-check"></i>
                    
                    </button>
                </div>
            </div>    
        </div>    
    );
  }
}

export default ButtonList;