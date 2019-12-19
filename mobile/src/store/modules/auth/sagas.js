import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.get, `students/${id}`);

    const student = response.data;

    if (!student) {
      Alert.alert('Erro no login', 'O ID informado não foi encontrado');
      return;
    }

    yield put(signInSuccess(student));
  } catch (err) {
    Alert.alert('Falha na autenticação', 'verifique seus dados.');

    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
