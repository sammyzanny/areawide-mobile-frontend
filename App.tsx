import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AsyncStorage } from 'react-native'
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import fetchLogin from './hooks/fetchLogin'

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  useEffect(() => {
    const token = AsyncStorage.getItem("token");

    if(!!token){
      const user = fetchLogin(token)
    }
  }, [])

  if (!isLoadingComplete) {
    return null;
  } else
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} user={user} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
