import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import BackgroundImage from './BackgroundImage';
import PropTypes from 'prop-types';
  
class Carousel2 extends React.Component {
  render() {
    let page = this.props.location.pathname.substr(1);
    if (!page) page = 'home';
    return (
        <div>
            <ReactCSSTransitionGroup
              transitionName="background"
              transitionEnterTimeout={1000}
              transitionLeaveTimeout={1000}
            >
                <BackgroundImage page={page} key={page} />
            </ReactCSSTransitionGroup>
        </div>
    );
  }
}
export default Carousel2;

Carousel2.propTypes = {
  show: PropTypes.object,
  location: PropTypes.func
};
