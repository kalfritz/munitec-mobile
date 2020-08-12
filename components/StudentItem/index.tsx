import React from 'react';
import { Student } from '../../types';

import { Container, Name } from './styles';

interface Props {
  student: Student;
}

const StudentItem: React.FC<Props> = ({ student }) => (
  <Container>
    <Name>{student.name}</Name>
  </Container>
);

export default StudentItem;
