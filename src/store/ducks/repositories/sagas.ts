import { call, put } from 'redux-saga/effects';
import api from '../../../service/api';

import { loadSuccess, loadFailure } from './actions';

export function* load() {
  try {
    const response = yield call(api.get, 'users/davimattos/repos');
    
    yield put(loadSuccess(response.data));
  } catch(err) {
    yield put(loadFailure());
  }
};
