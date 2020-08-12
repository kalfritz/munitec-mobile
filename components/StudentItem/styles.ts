import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #fff;
  padding: 5px;
  margin: 5px;
  flex: 1;
  background: blueviolet;
`;

export const NameAndScore = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Name = styled.Text`
  padding: 5px;
  font-size: 20px;
  margin-left: 5px;
  font-weight: bold;
  color: #fff;
`;

export const Scores = styled.View`
  padding: 5px;
  margin-left: 2px;
  color: #fff;
  flex-direction: row;
  align-items: center;
`;

export const Score = styled.TextInput`
  text-align: center;
  font-size: 24px;
  margin-left: 10px;
  padding: 2px 2px;
  color: #fff;
  border: 1px solid #fff;
`;

export const Actions = styled.View`
  flex-direction: row-reverse;
  margin-top: 5px;
`;
export const SubmitButton = styled(TouchableOpacity)`
  margin: 0px 5px;
`;
export const SubmitButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
`;
