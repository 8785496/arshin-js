import {TOGGLE_ASIDE} from '../actions';

const stateDefault = {
  showAside: true
}

export default (state = stateDefault, action) => {
  switch (action.type) {
    case TOGGLE_ASIDE:
      return {...state, showAside: !state.showAside};
    default:
      return state;
  }
}
