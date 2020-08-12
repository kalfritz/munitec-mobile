import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Container = styled(TouchableOpacity)`
  background: #fff;
  padding: 5px;
  margin: 5px;
  flex: 1;
`;
export const Image = styled.Image`
  width: 100%;
  height: 150px;
`;

export const Name = styled.Text`
  padding: 5px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  background: blueviolet;
`;
