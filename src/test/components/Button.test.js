import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Button from '../../components/Button';

describe('Button', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Button />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders with name', () => {
    render(<Button name="buttonx" clickHandler={test} />);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('buttonx');
  });
});
