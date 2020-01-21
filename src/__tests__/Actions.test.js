import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as gmaps from '~/actions/gmapsAction';
import * as viacep from '~/actions/viacepAction';

export const mockStore = configureMockStore([thunk]);
const store = mockStore();


describe('select_actions', () => {
  beforeEach(() => { // Runs before each test in the suite
    store.clearActions();
  });

  describe('gmapsActions', () => {
    test('Dispatches the getGeocode action and payload', () => {
      store.dispatch(gmaps.default.getGeocode("Rua+Miguel+Mentem,Vila+Guilherme", "loadingGeocode"));
      expect(store.getActions()).toMatchSnapshot();
    });
  });

  describe('viacepAction', () => {
    test('Dispatches the getCep action and payload', () => {
      store.dispatch(viacep.default.getCep("02050-010", "loadingAddress"));
      expect(store.getActions()).toMatchSnapshot();
    });
  });


});
