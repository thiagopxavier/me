import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ButtonNav extends Component {
  render() {
    const { listName } = this.props;
    return (
      <button
        className="button-nav"
        type="button"
      >
        { listName }
      </button>
    );
  }
}

ButtonNav.propTypes = {
  listName: PropTypes.string.isRequired,
};

export default ButtonNav;
