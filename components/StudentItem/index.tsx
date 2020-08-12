import React, { useRef } from 'react';
import { Student } from '../../types';

import {
  Container,
  NameAndScore,
  Name,
  Scores,
  Score,
  Actions,
  SubmitButton,
  SubmitButtonText,
} from './styles';
import { useDispatch } from 'react-redux';
import { updateScoreRequest } from '../../store/modules/student/actions';

interface Props {
  student: Student;
  class_id: number;
  subject_id: number;
}

const StudentItem: React.FC<Props> = ({ student, class_id, subject_id }) => {
  const firstBemesterRef = useRef<any>(null);
  const secondBemesterRef = useRef<any>(null);
  const thirdBemesterRef = useRef<any>(null);
  const fourthBemesterRef = useRef<any>(null);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    console.log(firstBemesterRef?.current?.value);
    console.log('=============================================');
    dispatch(
      updateScoreRequest({
        class_id,
        subject_id,
        student_id: student.id,
        firstBemester: firstBemesterRef?.current?.value,
        secondBemester: secondBemesterRef?.current?.value,
        thirdBemester: thirdBemesterRef?.current?.value,
        fourthBemester: fourthBemesterRef?.current?.value,
      })
    );
  };
  return (
    <Container>
      <NameAndScore>
        <Name>{student.name}</Name>
        <Scores>
          <Score
            keyboardType="number-pad"
            maxLength={1}
            clearTextOnFocus
            defaultValue={String(student.scores?.firstBemester || 0)}
            ref={firstBemesterRef}
          />
          <Score
            keyboardType="number-pad"
            maxLength={1}
            clearTextOnFocus
            defaultValue={String(student.scores?.secondBemester || 0)}
            ref={secondBemesterRef}
          />
          <Score
            keyboardType="number-pad"
            maxLength={1}
            clearTextOnFocus
            defaultValue={String(student.scores?.thirdBemester || 0)}
            ref={thirdBemesterRef}
          />
          <Score
            keyboardType="number-pad"
            maxLength={1}
            clearTextOnFocus
            defaultValue={String(student.scores?.fourthBemester || 0)}
            ref={fourthBemesterRef}
          />
          <Score
            keyboardType="number-pad"
            maxLength={1}
            clearTextOnFocus
            editable={false}
            value={String(student.scores?.finalScore || 0)}
            ref={fourthBemesterRef}
          />
        </Scores>
      </NameAndScore>
      <Actions>
        <SubmitButton onPress={handleSubmit}>
          <SubmitButtonText>Salvar</SubmitButtonText>
        </SubmitButton>
      </Actions>
    </Container>
  );
};

export default StudentItem;
