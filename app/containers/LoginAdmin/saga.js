import { call, put, takeLatest, all } from 'redux-saga/effects';
import request from 'utils/request';
import auth from 'utils/auth';
import { addErrorMessage } from 'containers/Notifications/actions';

import * as constants from './constants';
export default function* defaultSaga() {
  yield takeLatest(constants.LOGIN_INIT, loginSaga);
  yield takeLatest(constants.FORGOT_PASSWORD_INIT, passreset);
}

export function* loginSaga(action) {
  const formData = new FormData();
  formData.append(`username`, action.user);
  formData.append(`password`, action.password);
  try {
    const requestURL = `https://api.hispanocash.com/auth/jwt/login`;
    const response = yield call(request, requestURL, {
      method: 'POST',
      headers: {
        accept: 'application/json',
      },
      body: formData,
    });
    if (response.access_token) {
      yield call(login, response.access_token, action.history);
    }
  } catch (error) {
    yield put(addErrorMessage(`Error en credenciales, intentalo de nuevo`));
    yield put({
      type: constants.LOGIN_FAILED,
    });
  }
}

function* login(token, history) {
  // TODO: Implement remember me
  yield all([call(auth.setToken, token, true)]);
  yield call(history.push, '/HomeAdmin');
}

export function* passreset(action) {
  const body = {
    email: action.email,
  };
  try {
    const requestURL = `${process.env.API_URL}/rest-auth/password/reset/`;
    const response = yield call(request, requestURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    if (response) {
      yield put({
        type: constants.FORGOT_PASSWORD_SUCCEED,
      });
    }
  } catch (error) {
    yield put({
      type: constants.FORGOT_PASSWORD_FAILED,
    });
  }
}
