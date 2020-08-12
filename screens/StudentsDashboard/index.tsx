import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  FlatList,
} from 'react-native';

import { RootStackParamList, Student } from '../../types';
import { Container, Title } from './styles';
import api from '../../services/api';
import StudentItem from '../../components/StudentItem';

export default function StudentsDashboard({
  navigation,
  route,
}: StackScreenProps<RootStackParamList, 'StudentsDashboard'>) {
  const [students, setStudents] = React.useState<Student[] | null>(null);
  React.useEffect(() => {
    const loadStudents: any = async () => {
      const response = await api.get(`students/${route.params.class.id}`);
      await setStudents(response.data);

      console.log(response.data);
    };
    loadStudents();
  }, [route.name]);
  return (
    <Container>
      <Title>{route.params.subject.name}</Title>
      <SafeAreaView style={{ paddingBottom: 50 }}>
        {students && (
          <FlatList
            data={students}
            keyExtractor={(item) => String(item.id)}
            initialNumToRender={students.length}
            renderItem={({ item }) => <StudentItem student={item} />}
          />
        )}
      </SafeAreaView>
    </Container>
  );
}
