import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { FC, useCallback } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';

import { ClinicLocations } from './fixtures';
import { contentStyles, headerStyles, screenStyles } from './styled';
import { Screen } from '../../common/constants';
import { HcBottomSheet } from '../../components/bottom-sheet';
import { HcButton } from '../../components/button';
import { HcDateTimePicker } from '../../components/date-time-picker';
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

  const renderHeader = () => {
    return (
      <View style={headerStyles.container}>
        <View style={headerStyles.headerCircleTopRight} />
        <View style={headerStyles.headerCircleBottomLeft} />
        <View style={headerStyles.headerTitleContainer}>
          <Text style={headerStyles.headerTitle}>Jio Health</Text>
          <Text style={headerStyles.headerSubTitle}>Achieve Optimal Wellness</Text>
        </View>
      </View>
    );
  };

  const renderCtaContainer = () => {
    return (
      <View style={contentStyles.ctaContainer}>
        <HcButton
          title="Book"
          type="Primary"
          onPress={() => {
            navigation.push(Screen.DETAILS);
          }}
          style={contentStyles.bookButton}
        />
        <HcButton
          title="Checkin"
          type="Normal"
          onPress={() => {
            navigation.push(Screen.SCAN_QR);
          }}
          style={contentStyles.checkinButton}
        />
      </View>
    );
  };

  const renderContent = () => {
    return (
      <ScrollView contentContainerStyle={{ width: Dimensions.get('window').width, flexGrow: 1 }}>
        <View style={contentStyles.container}>
          <HcInput label="Full name" />
          <HcInput label="Phone" />
          <HcBottomSheet
            label="Location"
            bottomSheetViewLabel="Choose a location"
            items={ClinicLocations}
            value={ClinicLocations[0]}
          />
          <View style={contentStyles.dateTimeContainer}>
            <HcDateTimePicker mode="date" label="Date" value={new Date()} />
            <HcDateTimePicker mode="time" label="Time" value={new Date()} />
          </View>
          {renderCtaContainer()}
        </View>
      </ScrollView>
    );
  };

  return (
    <BottomSheetModalProvider>
      <View style={screenStyles.container} onLayout={onLayoutRootView}>
        {renderHeader()}
        {renderContent()}
      </View>
    </BottomSheetModalProvider>
  );
};

export default Home;
