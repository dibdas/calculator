/* eslint-disable react/prop-types */
import React from 'react';
import Button from './Button';
import propTypes from 'prop-types';

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = (buttonName) => clickHandler(buttonName);
  return (
    <div className="buttonPanel">
      <div className="buttonsrow">
        <Button clickHandler={handleClick} name="AC" />
        <Button name="+/-" />
        <Button name="%" />
        <Button name="÷" />
      </div>
      <div className="buttonsrow">
        <Button name="7" />
        <Button name="8" />
        <Button name="9" />
        <Button name="X" />
      </div>
      <div className="buttonsrow">
        <Button name="-" />
        <Button name="4" />
        <Button name="5" />
        <Button name="6" />
      </div>
      <div className="buttonsrow">
        <Button name="1" />
        <Button name="2" />
        <Button name="3" />
        <Button name="+" />
      </div>
      <div className="buttonsrow">
        <Button name="0" />
        <Button name="." />
        <Button name="=" />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: propTypes.func.isRequired,
};
export default ButtonPanel;
