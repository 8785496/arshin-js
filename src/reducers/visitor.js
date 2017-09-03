import {FETCH_VISITORS} from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_VISITORS:
      return action.payload;
    default:
      return state;
  }
}