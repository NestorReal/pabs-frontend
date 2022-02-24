import { takeLatest, call, put } from 'redux-saga/effects';
import request from 'utils/request';
import auth from 'utils/auth';
import {
  addErrorMessage,
  addSuccessMessage,
} from 'containers/Notifications/actions';
import * as constants from './constants';
import { stepAction } from './actions';

// Individual exports for testing
export default function* planSaga() {
  yield takeLatest(constants.PAYERS_INIT, payersSaga);
  yield takeLatest(constants.GET_PLANS_INIT, getPlanSaga);
}

export function* payersSaga(action) {
  const body = { ...action.data };
  delete body.password;
  delete body.confirmPassword;
  /* const response = body;
  yield put({
    type: constants.PAYERS_SUCCEED,
    response,
  });
  yield put(addSuccessMessage(`Usuario creado correctamente`));
  yield put(stepAction(3)); */
  // console.log(`Bearer ${auth.getToken()}`);
  try {
    const requestURL = `http://54.219.179.76/payers/`;
    const response = yield call(request, requestURL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${auth.getToken()}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    if (response) {
      yield put({
        type: constants.PAYERS_SUCCEED,
        response,
      });
      yield put(addSuccessMessage(`Usuario creado correctamente`));
      yield put(stepAction(3));
    }
  } catch (error) {
    yield put({
      type: constants.PAYERS_FAILED,
      error,
    });
    yield put(stepAction(2));
    yield put(addErrorMessage(`Error al crear usuario`));
  }
}

export function* getPlanSaga() {
  try {
    const requestURL = `http://54.219.179.76/plans`;
    const response = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${auth.getToken()}`,
        Accept: 'application/json',
      },
    });
    if (response) {
      yield put({
        type: constants.GET_PLANS_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: constants.GET_PLANS_FAILED,
      error,
    });
  }
}