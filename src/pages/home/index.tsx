import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { FC, useCallback } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';

import { Color, FontFamily, Screen } from '../../common/constants';
import { HcButton } from '../../components/button';
import { HcInput } from '../../components/input';

interface IHomeProps {
  navigation: any;
}

SplashScreen.preventAutoHideAsync();

const Home: FC<IHomeProps> = ({ navigation }) => {
  const [fontsLoaded, fontError] = useFonts({
    Comfortaa: require('../../../assets/fonts/Comfortaa.ttf'),
    Pacifico: require('../../../assets/fonts/Pacifico.ttf'),
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
    <View style={styles.container} onLayout={onLayoutRootView}>
      <View style={styles.header}>
        <View style={styles.headerCircleTopRight} />
        <View style={styles.headerCircleBottomLeft} />
        <Text style={styles.headerTitle}>Jio Health</Text>
      </View>
      <View style={styles.content}>
        <HcInput label="Full name" />
        <HcInput label="Phone" />
        <HcButton
          title="Book"
          type="Primary"
          onPress={() => {
            Alert.alert('hello');
          }}
          style={styles.bookButton}
        />
        <HcButton
          title="Checkin"
          type="Normal"
          onPress={() => {
            navigation.push(Screen.SCAN_QR);
          }}
          style={styles.checkinButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: Color.WHITE,
  },
  header: {
    width: '100%',
    height: 280,
    backgroundColor: Color.PRIMARY,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  headerTitle: {
    fontFamily: FontFamily.PACIFICO,
    color: '#fff',
    fontSize: 28,
    marginBottom: -40,
  },
  headerCircleTopRight: {
    width: 300,
    height: 280,
    position: 'absolute',
    top: -160,
    right: -120,
    borderRadius: 150,
    backgroundColor: Color.PRIMARY_LIGHT,
  },
  headerCircleBottomLeft: {
    width: 240,
    height: 200,
    position: 'absolute',
    bottom: -140,
    left: -120,
    borderRadius: 180,
    backgroundColor: Color.PRIMARY_LIGHT,
  },
  content: {
    width: '100%',
    paddingTop: 40,
    paddingHorizontal: 18,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: 8,
  },
  bookButton: {
    width: 180,
    marginTop: 20,
    marginBottom: 10,
  },
  checkinButton: {
    width: 180,
  },
});

export default Home;
