import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Screen } from './src/common/constants';
import Details from './src/pages/details';
import Home from './src/pages/home';
import ScanQR from './src/pages/scan-qr';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1, width: '100%' }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={Screen.HOME} component={Home} options={{ headerShown: false }} />
          <Stack.Screen
            name={Screen.DETAILS}
            component={Details}
            options={{ headerShown: false }}
          />
          <Stack.Screen name={Screen.SCAN_QR} component={ScanQR} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
