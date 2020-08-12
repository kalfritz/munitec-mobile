import React from 'react';
import { View, Image } from 'react-native';
import { Subject } from '../../types';

import { Container, Name } from './styles';

interface Props {
  subject: Subject;
  onPress: () => any;
}

const SubjectItem: React.FC<Props> = ({ subject, onPress }) => (
  <Container onPress={onPress}>
    <Image
      source={{ uri: subject.image }}
      style={{ width: 150, height: 150 }}
    />
    <Name>{subject.name}</Name>
  </Container>
);

export default SubjectItem;
