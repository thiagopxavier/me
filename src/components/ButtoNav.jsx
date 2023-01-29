import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ButtonNav extends Component {
  handleClick = () => {
    const { history, list: { route } } = this.props;
    history.push(route);
  };

  render() {
    const { list: { name } } = this.props;
    return (
      <button
        className={ `button-nav ${name === 'Sonoplastia' || name === 'Galeria'
          ? 'button-disabled' : 'button-enable'}` }
        type="button"
        onClick={ this.handleClick }
        disabled={ name === 'Sonoplastia' || name === 'Galeria' }
      >
        { name }
      </button>
    );
  }
}

ButtonNav.propTypes = {
  name: PropTypes.string,
  route: PropTypes.string,
}.isRequired;

export default ButtonNav;
