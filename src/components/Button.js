/* eslint-disable react/no-typos */
/* eslint-disable react/prop-types */

import React from 'react';
import propTypes from 'prop-types';

const Button = (props) => {
  const { name } = props;
  return (
    <div>
      <button type="button">{name}</button>
    </div>
  );
};
Button.PropTypes = {
  name: propTypes.string.isRequired,
};
Button.defaultProps = {
  name: ' ',
};

export default Button;
