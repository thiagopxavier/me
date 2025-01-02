import React, { Component } from 'react';

class ThemeButton extends Component {
  handleClick = () => {
    console.log('handleClick');
  };

  render() {
    return (
      <button
        className="button-enable"
        type="button"
        onClick={ this.handleClick }
      >
        Theme
      </button>
    );
  }
}

export default ThemeButton;
