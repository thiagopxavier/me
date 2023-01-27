import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class ButtonNav extends Component {
  render() {
    const { list: { name, route } } = this.props;
    return (
      <Link className="link" to={ route }>
        <button
          className="button-nav"
          type="button"
        >
          { name }
        </button>
      </Link>
    );
  }
}

ButtonNav.propTypes = {
  name: PropTypes.string,
  route: PropTypes.string,
}.isRequired;

export default ButtonNav;
