import { takeLatest, call, put } from 'redux-saga/effects';
import request from 'utils/request';
import auth from 'utils/auth';
import {
  addErrorMessage,
  addSuccessMessage,
} from 'containers/Notifications/actions';
import { getUsers } from './actions';
import * as constants from './constants';

// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(constants.GET_USERS_INIT, getUsersSaga);
  yield takeLatest(constants.GET_USER_INIT, getUserSaga);
  yield takeLatest(constants.DELETE_USER_INIT, deleteUserSaga);
  yield takeLatest(constants.CREATE_USER_INIT, createUserSaga);
}

export function* getUsersSaga() {
  try {
    const requestURL = `http://54.219.179.76/users/all-users`;
    const response = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${auth.getToken()}`,
        Accept: 'application/json',
      },
    });
    if (response) {
      yield put({
        type: constants.GET_USERS_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: constants.GET_USERS_FAILED,
      error,
    });
  }
}

export function* getUserSaga() {
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
      if (response.roles.includes('user')) {
        auth.logout();
      }
      yield put({
        type: constants.GET_USER_SUCCESS,
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

export function* deleteUserSaga(action) {
  try {
    const requestURL = `http://54.219.179.76/users/${action.id}`;
    const response = yield call(request, requestURL, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${auth.getToken()}`,
        Accept: 'application/json',
      },
    });
    if (response) {
      yield put({
        type: constants.DELETE_USER_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put(addErrorMessage(`Error al borrar usuario`));
    yield put({
      type: constants.DELETE_USER_FAILED,
      error,
    });
  }
}

export function* createUserSaga(action) {
  console.log(action)
  const body = {
    email: action.email,
    full_name: action.user,
    phone_number: action.number,
    password: action.password,
    is_active: true,
    is_superuser: false,
    is_verified: false,
    roles: [action.role],
  };
  console.log(body)
  try {
    const requestURL = `http://54.219.179.76/auth/register`;
    const response = yield call(request, requestURL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(body),
    });
    if (response) {
      yield put(addSuccessMessage(`Usuario creado correctamente`));
      yield put(getUsers());
    }
  } catch (error) {
    yield put(addErrorMessage(`Error al crear usuario`));
    yield put({
      type: constants.CREATE_USER_FAILED,
    });
  }
}
