import produce from 'immer';

const INITIAL_STATE = {
  students: {},
  loading: false,
};

export default function student(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@student/FETCH_STUDENTS_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@student/FETCH_STUDENTS_SUCCESS': {
        const { students, class_id } = action.payload;
        draft.students[class_id] = students;
        draft.loading = false;
        break;
      }

      case '@student/UPDATE_SCORE_SUCCESS': {
        const { class_id, student_id, subject_id, ...rest } = action.payload;
        draft.students[class_id] = draft.students[class_id].map((student) => {
          if (student.id === student_id) {
            student.score = Object.assign(student.score, rest);
          }
          return student;
        });
        break;
      }
      case '@student/ADD_ATTENDANCE_SUCCESS': {
      }
      default:
    }
  });
}
