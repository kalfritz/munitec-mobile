import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #fafafa;
  padding: 5px;
  padding-top: 15px;
`;
export const Title = styled.Text`
  font-size: 26px;
  padding: 5px;
  font-family: 'roboto';
  font-weight: bold;
  text-align: center;
`;

export const ClassItem = styled(TouchableOpacity)`
  margin: 8px 0px;
`;

export const Link = styled.View`
  background: blueviolet;
  padding: 15px;
  flex: 1;
  align-items: center;
`;

export const LinkText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;
