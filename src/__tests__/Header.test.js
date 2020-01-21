import React from 'react';
import { shallow } from 'enzyme';
import Header from '~/components/app/header/Header';

describe('Todo component renders the todo correctly', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot();
  });
});
