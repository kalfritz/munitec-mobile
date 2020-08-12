import React from 'react';
import { Image } from 'react-native';
import { School } from '../../types';

import { Container, Name } from './styles';

interface Props {
  school: School;
  onPress: () => any;
}

const SchoolItem: React.FC<Props> = ({ school, onPress }) => (
  <Container onPress={onPress}>
    <Image source={{ uri: school.image }} style={{ width: 150, height: 150 }} />
    <Name>{school.name}</Name>
  </Container>
);

export default SchoolItem;
