import axios from 'axios';

import {FETCH_REQUESTS} from '.';

export const fetchRequest = dispatch => dispatch => {
  axios.get('/api/requests').then(response => {
    dispatch({type: FETCH_REQUESTS, payload: response.data})
  });
};