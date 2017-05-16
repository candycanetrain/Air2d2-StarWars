import rootReducer from '../reducers/root_reducer';
import roomsReducer from '../reducers/booking_reducer';
import { createStore } from 'redux';

describe('Reducers', () => {

  describe('RootReducer', () => {
    let testStore;

    beforeAll(() => {
      testStore = createStore(rootReducer);
    });

    it('exports a function', () => {
      expect(typeof rootReducer).toEqual('function');
    });

    it('includes the roomsReducer under the key `rooms`', () => {
      const room = { id: 1, title: 'Root Reducer', content: 'Testing' };
      const action = { type: 'RECEIVE_ROOM', room };
      testStore.dispatch(action);

      expect(testStore.getState().room).toEqual(roomsReducer({ [room.id]: room }, action));
    });
  });
});
