/* eslint-disable react/prop-types */
import React from 'react';
import propTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = (buttonName) => clickHandler(buttonName);
  return (
    <div className="buttonPanel">
      <div className="buttonsrow">
        <Button clickHandler={handleClick} name="AC" />
        <Button clickHandler={handleClick} name="+/-" />
        <Button clickHandler={handleClick} name="%" />
        <Button clickHandler={handleClick} name="÷" />
      </div>
      <div className="buttonsrow">
        <Button clickHandler={handleClick} name="7" />
        <Button clickHandler={handleClick} name="8" />
        <Button clickHandler={handleClick} name="9" />
        <Button clickHandler={handleClick} name="X" />
      </div>
      <div className="buttonsrow">
        <Button clickHandler={handleClick} name="-" />
        <Button clickHandler={handleClick} name="4" />
        <Button clickHandler={handleClick} name="5" />
        <Button clickHandler={handleClick} name="6" />
      </div>
      <div className="buttonsrow">
        <Button clickHandler={handleClick} name="1" />
        <Button clickHandler={handleClick} name="2" />
        <Button clickHandler={handleClick} name="3" />
        <Button clickHandler={handleClick} name="+" />
      </div>
      <div className="buttonsrow">
        <Button clickHandler={handleClick} name="0" />
        <Button clickHandler={handleClick} name="." />
        <Button clickHandler={handleClick} name="=" />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: propTypes.func.isRequired,
};
export default ButtonPanel;
