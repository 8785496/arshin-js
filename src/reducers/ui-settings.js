import {TOOGLE_ASIDE} from '../actions/action-types';

const stateDefault = {
  showAside: true
}

export default (state = stateDefault, action) => {
  switch (action.type) {
    case TOOGLE_ASIDE:
      return {...state, showAside: !state.showAside};
    default:
      return state;
  }
}
