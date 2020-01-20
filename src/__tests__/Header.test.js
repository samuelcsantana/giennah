import React from 'react';
import Header from '~/components/app/header/Header';
import { shallow } from 'enzyme';

describe('Todo component renders the todo correctly', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<Header />)
      expect(wrapper).toMatchSnapshot();
    });
  });
  