import { Student } from '../../../types';

export function fetchStudentsRequest({ class_id }: { class_id: number }) {
  return {
    type: '@student/FETCH_STUDENTS_REQUEST',
    payload: { class_id },
  };
}
export function fetchStudentsSuccess({
  students,
  class_id,
}: {
  students: Student[];
  class_id: number;
}) {
  return {
    type: '@student/FETCH_STUDENTS_SUCCESS',
    payload: { students, class_id },
  };
}

export function updateScoreRequest(payload: any) {
  return {
    type: '@student/UPDATE_SCORE_REQUEST',
    payload,
  };
}
export function updateScoreSuccess(payload: any) {
  return {
    type: '@student/UPDATE_SCORE_SUCCESS',
    payload,
  };
}

export function addAttendanceRequest(payload: any) {
  return {
    type: '@student/ADD_ATTENDANCE_REQUEST',
    payload,
  };
}
export function addAttendanceSuccess(payload: any) {
  return {
    type: '@student/ADD_ATTENDANCE_SUCCESS',
    payload,
  };
}
