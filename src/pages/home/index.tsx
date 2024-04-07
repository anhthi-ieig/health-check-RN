import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import dayjs from 'dayjs';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { FC, useCallback } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { View, Text, ScrollView, Dimensions } from 'react-native';

import { ClinicLocations } from './fixtures';
import { contentStyles, headerStyles, screenStyles } from './styled';
import { Screen } from '../../common/constants';
import { HcBottomSheet, HcBottomSheetItem } from '../../components/bottom-sheet';
import { HcButton } from '../../components/button';
import { HcDateTimePicker } from '../../components/date-time-picker';
import { HcInput } from '../../components/input';

interface IHomeProps {
  navigation: any;
}

type InputForm = {
  name: string;
  phone: string;
  location: HcBottomSheetItem;
  date: Date;
  time: Date;
};

SplashScreen.preventAutoHideAsync();

const Home: FC<IHomeProps> = ({ navigation }) => {
  const { control, handleSubmit } = useForm<InputForm>({
    reValidateMode: 'onSubmit',
    defaultValues: {
      name: '',
      phone: '',
      location: ClinicLocations[0],
      date: new Date(),
      time: new Date(),
    },
  });

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

  const handleFormSubmit = (data: InputForm) => {
    console.log(dayjs(data.date).format('YYYY-MM-DD'));
    console.log(dayjs(data.time).format('HH:mm'));
  };

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

  const renderContent = () => {
    return (
      <ScrollView contentContainerStyle={{ width: Dimensions.get('window').width, flexGrow: 1 }}>
        <View style={contentStyles.container}>
          <Controller
            name="name"
            control={control}
            rules={{ required: 'This is required' }}
            render={({ field, fieldState }) => (
              <HcInput
                label="Name"
                value={field.value}
                onChange={field.onChange}
                error={fieldState.error?.message}
              />
            )}
          />
          <Controller
            name="phone"
            control={control}
            rules={{ required: 'This is required' }}
            render={({ field, fieldState }) => (
              <HcInput
                label="Phone"
                value={field.value}
                onChange={field.onChange}
                error={fieldState.error?.message}
              />
            )}
          />
          <Controller
            name="location"
            control={control}
            render={({ field }) => (
              <HcBottomSheet
                label="Location"
                bottomSheetViewLabel="Choose a location"
                items={ClinicLocations}
                value={field.value}
                onSelectItem={field.onChange}
              />
            )}
          />
          <View style={contentStyles.dateTimeContainer}>
            <Controller
              name="date"
              control={control}
              render={({ field }) => (
                <HcDateTimePicker
                  mode="date"
                  label="Date"
                  value={field.value}
                  minimumDate={dayjs().add(1, 'day').toDate()}
                  maximumDate={dayjs().add(15, 'days').toDate()}
                  onChange={field.onChange}
                />
              )}
            />
            <Controller
              name="time"
              control={control}
              render={({ field }) => (
                <HcDateTimePicker
                  mode="time"
                  label="Time"
                  value={field.value}
                  minimumDate={dayjs().startOf('day').add(7, 'hour').toDate()}
                  maximumDate={dayjs().startOf('day').add(18, 'hour').toDate()}
                  minuteInterval={30}
                  onChange={field.onChange}
                />
              )}
            />
          </View>
          {renderCtaContainer()}
        </View>
      </ScrollView>
    );
  };

  const renderCtaContainer = () => {
    return (
      <View style={contentStyles.ctaContainer}>
        <HcButton
          title="Book"
          type="Primary"
          onPress={handleSubmit(handleFormSubmit)}
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
