import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';

import { RootStackParamList, School } from '../../types';
import api from '../../services/api';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Container, Title } from './styles';
import SchoolItem from '../../components/SchoolItem';

export default function ChooseASchool({
  navigation,
}: StackScreenProps<RootStackParamList, 'ChooseASchool'>) {
  const [schools, setSchools] = React.useState<School[] | null>(null);
  React.useEffect(() => {
    const loadSchools: any = async () => {
      const response = await api.get('/schools');
      setSchools(response.data);
    };
    loadSchools();
  }, []);

  return (
    <Container>
      <Title>Escolha uma escola</Title>
      <SafeAreaView style={{ flex: 1 }}>
        {schools && (
          <FlatList
            data={schools}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <SchoolItem
                school={item}
                onPress={() =>
                  navigation.navigate('ChooseAClass', {
                    school: item,
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
