import {FETCH_REQUESTS} from '../actions';

const defaultStore = {
  current: null,
  list: []
};

export default (state = defaultStore, action) => {
  switch (action.type) {
    case FETCH_REQUESTS:
      return {...state, list: action.payload};
    default:
      return state;
  }
}
