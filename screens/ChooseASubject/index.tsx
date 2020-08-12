import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';

import { RootStackParamList, Subject } from '../../types';
import SubjectItem from '../../components/SubjectItem';

import { Container, Title } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';
import api from '../../services/api';

export default function ChooseASubject({
  navigation,
  route,
}: StackScreenProps<RootStackParamList, 'ChooseASubject'>) {
  const [subjects, setSubjects] = React.useState<Subject[] | null>(null);
  React.useEffect(() => {
    const loadSubjects: any = async () => {
      const response = await api.get(`subjects/${route.params.class.id}`);
      setSubjects(response.data);
    };
    loadSubjects();
  }, []);

  return (
    <Container>
      <Title>Escolha uma disciplina</Title>
      <SafeAreaView style={{ paddingBottom: 50 }}>
        {subjects && (
          <FlatList
            data={subjects}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <SubjectItem
                subject={item}
                onPress={() =>
                  navigation.navigate('StudentsDashboard', {
                    school: route.params.school,
                    class: route.params.class,
                    subject: item,
                  })
                }
              />
            )}
            numColumns={2}
          />
        )}
      </SafeAreaView>
    </Container>
  );
}
