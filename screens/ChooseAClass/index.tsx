import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';

import { RootStackParamList, Class } from '../../types';
import { Container, Title, Link, LinkText } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';
import api from '../../services/api';
import { ClassItem } from './styles';

export default function ChooseAClass({
  navigation,
  route,
}: StackScreenProps<RootStackParamList, 'ChooseAClass'>) {
  const [classes, setClasses] = React.useState<Class[] | null>(null);
  React.useEffect(() => {
    const loadClasses: any = async () => {
      const response = await api.get(`/classes/${route.params.school.id}`);
      setClasses(response.data);
    };
    loadClasses();
  }, []);

  return (
    <Container>
      <Title>Escolha uma turma</Title>
      <SafeAreaView>
        {classes && (
          <FlatList
            data={classes}
            keyExtractor={(item) => String(item.id)}
            style={{ paddingHorizontal: 30 }}
            renderItem={({ item }) => (
              <ClassItem
                onPress={() =>
                  navigation.navigate('ChooseASubject', {
                    school: route.params.school,
                    class: item,
                  })
                }
              >
                <Link>
                  <LinkText>{item.name}</LinkText>
                </Link>
              </ClassItem>
            )}
            numColumns={1}
          />
        )}
      </SafeAreaView>
    </Container>
  );
}
