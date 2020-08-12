import { all, takeLatest, call, put } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '../../../services/api';

import { updateScoreSuccess, fetchStudentsSuccess } from './actions';

export function* fetchStudents({ payload }) {
  const { class_id } = payload;

  const response = yield call(api.get, `students/${class_id}`);
  console.log(response.data);

  yield put(fetchStudentsSuccess({ students: response.data, class_id }));
}
export function* updateScore({ payload }) {
  const { class_id, student_id, subject_id, ...rest } = payload;

  yield call(
    api.post,
    `students/${student_id}/subjects/${subject_id}/scores`,
    rest
  );

  yield put(updateScoreSuccess(payload));
  Alert.alert('Sucesso', 'Nota atualizada.');
}
export function* addAttendance({ payload }) {
  const { class_id, subject_id, date, students } = payload;

  yield call(api.post, `attendances/${subject_id}`, { date, students });

  yield put(addAttendanceSuccess(payload));
  Alert.alert('Sucesso', 'Frequência adicionada.');
}

export default all([
  takeLatest('@student/FETCH_STUDENTS_REQUEST', fetchStudents),
  takeLatest('@student/UPDATE_SCORE_REQUEST', updateScore),
  takeLatest('@student/ADD_ATTENDANCE_REQUEST', addAttendance),
]);
