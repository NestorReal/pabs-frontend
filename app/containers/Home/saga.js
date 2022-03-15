import { takeLatest, call, put } from 'redux-saga/effects';
import request from 'utils/request';
import auth from 'utils/auth';
import * as constants from './constants';

// Individual exports for testing
export default function* homeSaga() {
  yield takeLatest(constants.GET_USER_INIT, getUserSagas);
  yield takeLatest(constants.GET_REPORTS_INIT, getReportSagas);
}

export function* getUserSagas() {
  try {
    const requestURL = `http://54.219.179.76/users/me`;
    const response = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${auth.getToken()}`,
        Accept: 'application/json',
      },
    });
    if (response) {
      yield put({
        type: constants.GET_USER_SUCCED,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: constants.GET_USER_FAILED,
      error,
    });
  }
}

export function* getReportSagas() {
  try {
    const requestURL = `http://54.219.179.76/reports/`;
    const response = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${auth.getToken()}`,
        Accept: 'application/json',
      },
    });
    if (response) {
      yield put({
        type: constants.GET_REPORTS_SUCCED,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: constants.GET_REPORTS_FAILED,
      error,
    });
  }
}
