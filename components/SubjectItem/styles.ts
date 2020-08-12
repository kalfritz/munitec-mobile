import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Container = styled(TouchableOpacity)`
  background: #fff;
  padding: 5px;
  margin: 5px;
  flex-basis: 0;
  flex: 1;
`;

export const Name = styled.Text`
  padding: 5px;
  font-size: 20px;
  color: #111;
  text-align: center;
`;
