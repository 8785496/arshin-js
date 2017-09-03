import axios from 'axios';

import {FETCH_VISITORS} from "./index";

export const fetchVisitors = dispatch => dispatch => {
  axios.get('/api/visitors').then(response => {
    dispatch({type: FETCH_VISITORS, payload: response.data})
  });
};