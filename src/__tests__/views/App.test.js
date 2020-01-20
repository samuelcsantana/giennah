import React from 'react';
import { Provider } from 'react-redux'
import { mount, shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import App from '~/views/app/App';

const mockStore = configureMockStore([thunk]);

describe('App', () => {
  it('should render a startup component if startup is not complete', () => {
    const store = mockStore({
      startup: { complete: false }
    });
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    )
    expect(wrapper.find('.gmaps').length).toEqual(1)
  })
})