import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Display from '../../components/Display';

describe('ButtonPanel', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Display />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders the outcome given in as prop', () => {
    const { container } = render(<Display result="40" />);
    const card = container.querySelector('div');
    expect(card).toHaveTextContent('40');
  });
});
