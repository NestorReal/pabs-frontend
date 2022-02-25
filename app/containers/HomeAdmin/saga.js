import { takeLatest, call, put } from 'redux-saga/effects';
import request from 'utils/request';
import auth from 'utils/auth';
import {
  addErrorMessage,
  addSuccessMessage,
} from 'containers/Notifications/actions';
import { getUsers, getPlan, getFeatures, getContract } from './actions';
import * as constants from './constants';

// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(constants.GET_PLANS_INIT, getPlanSaga);
  yield takeLatest(constants.GET_USERS_INIT, getUsersSaga);
  yield takeLatest(constants.GET_USER_INIT, getUserSaga);
  yield takeLatest(constants.DELETE_USER_INIT, deleteUserSaga);
  yield takeLatest(constants.CREATE_USER_INIT, createUserSaga);
  yield takeLatest(constants.GET_COMPANIES_INIT, getCompaniesSaga);
  yield takeLatest(constants.CREATE_PLANS_INIT, createPlanSaga);
  yield takeLatest(constants.GET_EDIT_PLANS_INIT, getEditPlanSaga);
  yield takeLatest(constants.EDIT_PLANS_INIT, EditPlanSaga);
  yield takeLatest(constants.GET_EDIT_USER_INIT, getEditUserSaga);
  yield takeLatest(constants.EDIT_USER_INIT, editUserSaga);
  yield takeLatest(constants.GET_LEAFLETS_INIT, getLeafletsSaga);
  yield takeLatest(constants.GET_FEATURES_INIT, getFeaturesSaga);
  yield takeLatest(constants.CREATE_FEATURES_INIT, createFeaturesSaga);
  yield takeLatest(constants.GET_EDIT_FEATURES_INIT, getEditFeaturesSaga);
  yield takeLatest(constants.DELETE_FEATURES_INIT, deleteFeaturesSaga);
  yield takeLatest(constants.GET_CONTRACT_INIT, getContractSaga);
  yield takeLatest(constants.CREATE_COMPANIES_INIT, createContractSaga);
  yield takeLatest(constants.GET_EDIT_COMPANIES_INIT, getEditContractSaga);
  yield takeLatest(constants.DELETE_COMPANIES_INIT, deleteContractSaga);
  yield takeLatest(constants.GET_TRANSACTIONS_INIT, getTransactionsSaga);
}

export function* getCompaniesSaga() {
  try {
    const requestURL = `http://54.219.179.76/companies`;
    const response = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${auth.getToken()}`,
        Accept: 'application/json',
      },
    });
    if (response) {
      yield put({
        type: constants.GET_COMPANIES_SUCCED,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: constants.GET_COMPANIES_FAILED,
      error,
    });
  }
}

export function* createPlanSaga(action) {
  // console.log(action);
  const body = {
    name: action.data.name,
    cost: action.data.cost,
    featureIds: [action.data.features],
    companyId: action.data.companyId,
  };
  // console.log(body);
  try {
    const requestURL = `http://54.219.179.76/plans/`;
    yield call(request, requestURL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${auth.getToken()}`,
        'Content-Type': 'application/json;',
      },
      body: JSON.stringify(body),
    });
    yield put(addSuccessMessage(`Plan creado correctamente`));
    yield put(getPlan());
    yield put({
      type: constants.CREATE_PLANS_SUCCED,
    });
  } catch (error) {
    yield put(addErrorMessage(`Error al crear plan`));
    yield put({
      type: constants.CREATE_PLANS_FAILED,
    });
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
        type: constants.GET_PLANS_SUCCED,
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

export function* getEditPlanSaga(action) {
  try {
    const requestURL = `http://54.219.179.76/plans/${action.id}`;
    const response = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${auth.getToken()}`,
        Accept: 'application/json',
      },
    });
    if (response) {
      yield put({
        type: constants.GET_EDIT_PLANS_SUCCED,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: constants.GET_EDIT_PLANS_FAILED,
      error,
    });
  }
}

export function* EditPlanSaga(action) {
  const body = {
    cost: action.data.cost,
    featureIds: [action.data.features],
    companyId: action.data.companyId,
  };
  try {
    const requestURL = `http://54.219.179.76/plans/${action.data.id}`;
    yield call(request, requestURL, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${auth.getToken()}`,
        Accept: 'application/json',
        'Content-Type': 'application/json;',
      },
      body: JSON.stringify(body),
    });
    yield put(addSuccessMessage(`Plan editado correctamente`));
    yield put(getPlan());
    yield put({
      type: constants.CREATE_PLANS_SUCCED,
    });
  } catch (error) {
    yield put(addErrorMessage(`Error al editar plan`));
    yield put({
      type: constants.CREATE_PLANS_FAILED,
    });
  }
}

export function* getContractSaga() {
  try {
    const requestURL = `http://54.219.179.76/reports`;
    const response = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${auth.getToken()}`,
        Accept: 'application/json',
      },
    });
    if (response) {
      yield put({
        type: constants.GET_CONTRACT_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: constants.GET_CONTRACT_FAILED,
      error,
    });
  }
}

export function* getLeafletsSaga() {
  try {
    const requestURL = `http://54.219.179.76/reports`;
    const response = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${auth.getToken()}`,
        Accept: 'application/json',
      },
    });
    if (response) {
      yield put({
        type: constants.GET_LEAFLETS_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: constants.GET_LEAFLETS_FAILED,
      error,
    });
  }
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
    yield put(getUsers());
    if (response) {
      yield put(getUsers());
      yield put({
        type: constants.DELETE_USER_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put(getUsers());
    yield put(addErrorMessage(`Error al borrar usuario`));
    yield put({
      type: constants.DELETE_USER_FAILED,
      error,
    });
  }
}

export function* createUserSaga(action) {
  // console.log(action);
  const body = {
    email: action.data.email,
    full_name: action.data.full_name,
    phone_number: action.data.phone_number,
    password: action.data.password,
    is_active: true,
    is_superuser: false,
    is_verified: false,
    roles: [action.data.roles],
  };
  // console.log(body);
  try {
    const requestURL = `http://54.219.179.76/auth/register/`;
    const response = yield call(request, requestURL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;',
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

export function* getEditUserSaga(action) {
  try {
    const requestURL = `http://54.219.179.76/users/${action.id}`;
    const response = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${auth.getToken()}`,
        Accept: 'application/json',
      },
    });
    if (response) {
      yield put({
        type: constants.GET_EDIT_USER_SUCCED,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: constants.GET_EDIT_USER_FAILED,
      error,
    });
  }
}

export function* editUserSaga(action) {
  // console.log('sagas ', action);
  const body = {
    password: action.data.password,
    email: action.data.email,
    is_active: true,
    is_superuser: false,
    is_verified: false,
    full_name: action.data.full_name,
    phone_number: action.data.phone_number,
    roles: [action.data.roles],
  };
  // console.log(body);
  try {
    const requestURL = `http://54.219.179.76/users/${action.data.id}`;
    const response = yield call(request, requestURL, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;',
        Authorization: `Bearer ${auth.getToken()}`,
      },
      body: JSON.stringify(body),
    });
    if (response) {
      yield put({
        type: constants.EDIT_USER_SUCCED,
      });
      yield put(addSuccessMessage(`Usuario modificado correctamente`));
      yield put(getUsers());
    }
  } catch (error) {
    yield put(addErrorMessage(`Error al modificar usuario`));
    yield put({
      type: constants.EDIT_USER_FAILED,
    });
  }
}

export function* getFeaturesSaga() {
  try {
    const requestURL = `http://54.219.179.76/features/`;
    const response = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${auth.getToken()}`,
        Accept: 'application/json',
      },
    });
    if (response) {
      yield put({
        type: constants.GET_FEATURES_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: constants.GET_FEATURES_FAILED,
      error,
    });
  }
}

export function* createFeaturesSaga(action) {
  const body = { description: action.value };
  if (action.id === undefined) {
    try {
      const requestURL = `http://54.219.179.76/features/`;
      const response = yield call(request, requestURL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json;',
          Authorization: `Bearer ${auth.getToken()}`,
        },
        body: JSON.stringify(body),
      });
      if (response) {
        yield put({
          type: constants.CREATE_FEATURES_SUCCESS,
        });
        yield put(addSuccessMessage('Descripción creada correctamente'));
        yield put(getFeatures());
      }
    } catch (error) {
      yield put(addErrorMessage('Error al crear descripción'));
      yield put({
        type: constants.CREATE_FEATURES_FAILED,
      });
    }
  } else {
    try {
      const requestURL = `http://54.219.179.76/features/${action.id}`;
      const response = yield call(request, requestURL, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json;',
          Authorization: `Bearer ${auth.getToken()}`,
        },
        body: JSON.stringify(body),
      });
      if (response) {
        yield put({
          type: constants.CREATE_FEATURES_SUCCESS,
        });
        yield put(addSuccessMessage('Descripción editada correctamente'));
        yield put(getFeatures());
      }
    } catch (error) {
      yield put(addErrorMessage('Error al editar descripción'));
      yield put({
        type: constants.CREATE_FEATURES_FAILED,
      });
    }
  }
}

export function* getEditFeaturesSaga(action) {
  try {
    const requestURL = `http://54.219.179.76/features/${action.id}`;
    const response = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${auth.getToken()}`,
        Accept: 'application/json',
      },
    });
    if (response) {
      yield put({
        type: constants.GET_EDIT_FEATURES_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: constants.GET_EDIT_FEATURES_FAILED,
      error,
    });
  }
}

export function* deleteFeaturesSaga(action) {
  try {
    const requestURL = `http://54.219.179.76/features/${action.id}`;
    yield call(request, requestURL, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${auth.getToken()}`,
        Accept: 'application/json',
      },
    });
    yield put({
      type: constants.DELETE_FEATURES_SUCCESS,
    });
    yield put(addSuccessMessage('Descripción eliminada'));
    yield put(getFeatures());
  } catch (error) {
    yield put(addErrorMessage(`Error al borrar`));
    yield put({
      type: constants.DELETE_FEATURES_FAILED,
      error,
    });
  }
}

export function* createContractSaga(action) {
  const body = { name: action.value };
  if (action.id === undefined) {
    try {
      const requestURL = `http://54.219.179.76/companies/`;
      const response = yield call(request, requestURL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json;',
          Authorization: `Bearer ${auth.getToken()}`,
        },
        body: JSON.stringify(body),
      });
      if (response) {
        yield put({
          type: constants.CREATE_COMPANIES_SUCCESS,
        });
        yield put(addSuccessMessage('Empresa creada correctamente'));
        yield put(getContract());
      }
    } catch (error) {
      yield put(addErrorMessage('Error al crear la empresa'));
      yield put({
        type: constants.CREATE_COMPANIES_FAILED,
      });
    }
  } else {
    try {
      const requestURL = `http://54.219.179.76/companies/${action.id}`;
      const response = yield call(request, requestURL, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json;',
          Authorization: `Bearer ${auth.getToken()}`,
        },
        body: JSON.stringify(body),
      });
      if (response) {
        yield put({
          type: constants.CREATE_COMPANIES_SUCCESS,
        });
        yield put(addSuccessMessage('Empresa editada correctamente'));
        yield put(getContract());
      }
    } catch (error) {
      yield put(addErrorMessage('Error al editar la empresa'));
      yield put({
        type: constants.CREATE_COMPANIES_FAILED,
      });
    }
  }
}

export function* getEditContractSaga(action) {
  try {
    const requestURL = `http://54.219.179.76/companies/${action.id}`;
    const response = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${auth.getToken()}`,
        Accept: 'application/json',
      },
    });
    if (response) {
      yield put({
        type: constants.GET_EDIT_COMPANIES_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: constants.GET_EDIT_COMPANIES_FAILED,
      error,
    });
  }
}

export function* deleteContractSaga(action) {
  try {
    const requestURL = `http://54.219.179.76/companies/${action.id}`;
    yield call(request, requestURL, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${auth.getToken()}`,
        Accept: 'application/json',
      },
    });
    yield put({
      type: constants.DELETE_COMPANIES_SUCCESS,
    });
    yield put(addSuccessMessage('Empresa eliminada'));
    yield put(getFeatures());
  } catch (error) {
    yield put(addErrorMessage(`Error al borrar`));
    yield put({
      type: constants.DELETE_COMPANIES_FAILED,
      error,
    });
  }
}

export function* getTransactionsSaga() {
  try {
    const requestURL = `http://54.219.179.76/payers/`;
    const response = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${auth.getToken()}`,
        Accept: 'application/json',
      },
    });
    if (response) {
      yield put({
        type: constants.GET_TRANSACTIONS_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: constants.GET_TRANSACTIONS_FAILED,
      error,
    });
  }
}
