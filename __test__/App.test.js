import React from 'react';
import { render } from '@testing-library/react';
import App from '~/views/app/App';
import Routers from '~/components/app/routers/Routers';

describe('Counter', () => {
  test('snapshot renders', () => {
    const component = render.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
