import PropTypes from 'prop-types';
import React, { Component } from 'react';

class TitleName extends Component {
  handleClick = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    return (
      <button
        className="main-my-name"
        onClick={ this.handleClick }
      >
        Thiago X.

      </button>
    );
  }
}

TitleName.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default TitleName;
