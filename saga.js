import { put, take, all, fork, call } from 'redux-saga/effects';
import axios from 'axios';

import history from './history';
import * as action from './action';
import { parseResp } from './util';
import { APP_CONST, ACTION, LINK } from './const';

const { BASE_URL, APP_ID } = APP_CONST;

const apiGetCurrentForecast = params => {
  return axios.get(`${BASE_URL}weather?q=${params}&appid=${APP_ID}`)
    .then(resp => parseResp(resp))
    .catch(err => parseResp(err));
}

const apiGetMultiCurrentForecast = params => {
  return axios.get(`${BASE_URL}group?id=${params}&appid=${APP_ID}`)
    .then(resp => parseResp(resp))
    .catch(resp => parseResp(err));
}

function* fetchCurrentForecast() {
  while (true) {
    const { params } = yield take(ACTION.FETCH_CURRENT_FORECAST);
    const { data, err } = yield call(apiGetCurrentForecast, params);
    if (data) {
      yield put(action.handleCurrentForecast(data || {}));
      history.location.pathname !== LINK.DETAILS && history.push(LINK.DETAILS);
    } else if (err) {
      yield put(action.handleCurrentForecast({}));
    }
  }
}

function* fetchMultiCurrentForecast() {
  while (true) {
    const { params } = yield take(ACTION.FETCH_MULTI_CURRENT_FORECAST);
    console.log('params', params);
    const { data, err } = yield call(apiGetMultiCurrentForecast, params);
    if (data) {
      yield put(action.handleMultiCurrentForecast(data.list || []));
    } else if (err) {
      yield put(action.handleMultiCurrentForecast([]));
    }
  }
}

export default function* saga() {
  yield all([
    fork(fetchCurrentForecast),
    fork(fetchMultiCurrentForecast)
  ]);
}