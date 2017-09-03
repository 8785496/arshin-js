import {FETCH_EMAILS} from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_EMAILS:
      return action.payload;
    default:
      return state;
  }
}
