import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'munitec',
      storage: AsyncStorage,
      whiteList: ['student'],
    },
    reducers
  );
  return persistedReducer;
};
