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
export const Header = styled.View`
  padding: 5px;
  padding-top: 0px;
  margin: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const HeaderName = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #111;
  margin-left: 10px;
`;
export const HeaderBemesters = styled.View`
  padding: 5px;
  padding-right: 0px;
  margin-left: 2px;
  color: #111;
  flex-direction: row;
  align-items: center;
`;

export const HeaderBemester = styled.Text`
  text-align: center;
  font-size: 18px;
  margin-left: 2px;
  padding: 2px 2px;
  color: #111;
`;
