import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Screen } from './src/common/constants';
import Details from './src/pages/details';
import Home from './src/pages/home';
import ScanQR from './src/pages/scan-qr';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={Screen.HOME} component={Home} options={{ headerShown: false }} />
        <Stack.Screen name={Screen.DETAILS} component={Details} />
        <Stack.Screen name={Screen.SCAN_QR} component={ScanQR} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
