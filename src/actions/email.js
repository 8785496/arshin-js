import axios from 'axios';

import {FETCH_EMAILS} from '.';

export const fetchEmails = dispatch => dispatch => {
  axios.get('/api/emails').then(response => {
    dispatch({type: FETCH_EMAILS, payload: response.data})
  });
};