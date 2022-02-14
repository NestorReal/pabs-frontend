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
    const requestURL = `http://54.219.179.76/payers`;
    const response = yield call(request, requestURL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${auth.getToken()}`,
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
