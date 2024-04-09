import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Screen, StorageKey } from './src/common/constants';
import Details from './src/pages/details';
import Home from './src/pages/home';
import ScanQR from './src/pages/scan-qr';
import { Settings } from './src/pages/settings';
import { initI18n } from './src/utils/i18n';
import { getData } from './src/utils/storage';

const Stack = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();
(async () => {
  const storedLang = await getData(StorageKey.LANG);
  initI18n(storedLang);
})();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Comfortaa: require('./assets/fonts/Comfortaa.ttf'),
    Pacifico: require('./assets/fonts/Pacifico.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1, width: '100%' }} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={Screen.HOME} component={Home} options={{ headerShown: false }} />
          <Stack.Screen
            name={Screen.DETAILS}
            component={Details}
            options={{ headerShown: false }}
          />
          <Stack.Screen name={Screen.SCAN_QR} component={ScanQR} options={{ headerShown: false }} />
          <Stack.Screen
            name={Screen.SETTINGS}
            component={Settings}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
