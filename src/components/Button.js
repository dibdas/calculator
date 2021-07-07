/* eslint-disable react/no-typos */
/* eslint-disable react/prop-types */

import React from 'react';
import propTypes from 'prop-types';

const Button = (props) => {
  const { clickHandler, name } = props;
  const handleClick = (buttonName) => clickHandler(buttonName);
  return (
    <div>
      <button onClick={(event) => handleClick(event.target.name)} type="button">{name}</button>
    </div>
  );
};
Button.propTypes = {
  name: propTypes.string.isRequired,
};
Button.defaultProps = {
  name: ' ',
};

export default Button;
