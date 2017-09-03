import {combineReducers} from 'redux';

import UISettings from './ui-settings';
import emails from './email';
import visitors from './visitor';
import requests from './request';

export default combineReducers({
  UISettings,
  emails,
  visitors,
  requests
});