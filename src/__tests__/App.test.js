import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import App from '~/views/app/App';

const mockStore = configureMockStore([thunk]);

describe('App', () => {
  it('should render app and show a map and box used for search by cep', () => {
    const store = mockStore({
      localization: {
        address: {
          cep: '02050-010',
          logradouro: 'Rua Miguel Mentem',
          bairro: 'Vila Guilherme',
          localidade: 'São Paulo',
          uf: 'SP',
        },
        geocode: {
          lat: -23.5168338,
          lng: -46.6139824
        },
      },
      app: {
        loading: {
          loadingAddress: false,
          loadingGeocode: false
        }
      }
    });
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    )
    expect(wrapper.find('.gmaps').length).toEqual(1)
    expect(wrapper.find('.box-cep').length).toEqual(1)
  })
})
