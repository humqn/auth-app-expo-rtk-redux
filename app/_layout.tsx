import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack, useRouter } from 'expo-router';
import { useEffect } from 'react';

import { useJwt } from '../hooks/authentification';
import { Provider } from 'react-redux';
import { store } from '../store';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <>
      {!loaded && <SplashScreen />}
      {loaded && (
        <Provider store={store}>
          <RootLayoutNav />
        </Provider>
      )}
    </>
  );
}

function RootLayoutNav() {
  const jwt = useJwt();
  const router = useRouter();

  useEffect(() => {
    if (jwt === 'null') {
      router.replace('login');
    }
    if (jwt && jwt.length > 0 && jwt !== 'null') {
      router.replace('(tabs)');
    }
  }, [jwt]);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
    </Stack>
  );
}
