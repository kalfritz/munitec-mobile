import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { SafeAreaView, FlatList } from 'react-native';

import { RootStackParamList } from '../../types';
import {
  Container,
  Title,
  Header,
  HeaderName,
  HeaderBemesters,
  HeaderBemester,
} from './styles';

import StudentItem from '../../components/StudentItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudentsRequest } from '../../store/modules/student/actions';

export default function StudentsDashboard({
  navigation,
  route,
}: StackScreenProps<RootStackParamList, 'StudentsDashboard'>) {
  const dispatch = useDispatch();
  const students = useSelector<any>(
    (store): any => store.student.students[route.params.class.id]
  );
  React.useEffect(() => {
    dispatch(fetchStudentsRequest({ class_id: route.params.class.id }));
  }, [route.name]);
  return (
    <Container>
      <Title>{route.params.subject.name}</Title>
      <Header>
        <HeaderName>Nome</HeaderName>
        <HeaderBemesters>
          <HeaderBemester>1ªB</HeaderBemester>
          <HeaderBemester>2ªB</HeaderBemester>
          <HeaderBemester>3ªB</HeaderBemester>
          <HeaderBemester>4ªB</HeaderBemester>
          <HeaderBemester>Med</HeaderBemester>
        </HeaderBemesters>
      </Header>
      <SafeAreaView style={{ paddingBottom: 100 }}>
        {students && (
          <FlatList
            data={students as any}
            keyExtractor={(item) => String(item.id)}
            initialNumToRender={15}
            renderItem={({ item }) => (
              <StudentItem
                student={item}
                class_id={route.params.class.id}
                subject_id={route.params.subject.id}
              />
            )}
          />
        )}
      </SafeAreaView>
    </Container>
  );
}
