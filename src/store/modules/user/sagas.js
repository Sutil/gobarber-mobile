import { Alert } from 'react-native';
import { takeLatest, all, call, put } from 'redux-saga/effects';
import actionNames from '~/store/actionNames';
import api from '~/services/api';
import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, avatar_id, ...rest } = payload.data;

    const profile = {
      name,
      email,
      avatar_id,
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, 'users', profile);
    Alert.alert('Sucesso', 'Perfil atualizado com sucesso!');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    Alert.alert('Erro ao atualizar o perfil', 'Confira seus dados.');
    yield put(updateProfileFailure());
  }
}

export default all([
  takeLatest(actionNames.USER_PROFILE_UPDATE_REQUEST, updateProfile),
]);
