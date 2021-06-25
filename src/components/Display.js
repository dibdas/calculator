/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-typos */
import React from 'react';
import propTypes from 'prop-types';

const Display = (props) => (<div><h3>{props.result}</h3></div>);

Display.propTypes = {
  result: propTypes.string.isRequired,
};
Display.defaultProps = {
  result: '0',
};

export default Display;
