import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { useFocusEffect } from '@react-navigation/native';
import dayjs from 'dayjs';
import { FC, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Alert, Dimensions, Platform, Pressable, ScrollView, Text, View } from 'react-native';

import { ClinicLocations } from './fixtures';
import { contentStyles, headerStyles, screenStyles } from './styled';
import SettingsIcon from '../../../assets/icons/settings.svg';
import { Screen } from '../../common/constants';
import { HcBottomSheet, HcBottomSheetItem } from '../../components/bottom-sheet';
import { HcButton } from '../../components/button';
import { HcDateTimePickerAndroid, HcDateTimePickerIOS } from '../../components/date-time-picker';
import { HcInput } from '../../components/input';
import { i18n, localeKey } from '../../utils/i18n';
import { createBooking, transformBookingInfo } from '../api/create-booking';

interface IHomeProps {
  navigation: any;
}

export type InputForm = {
  name: string;
  phone: string;
  location: HcBottomSheetItem;
  date: Date;
  time: Date;
  isCheckedIn: boolean;
};

const Home: FC<IHomeProps> = ({ navigation }) => {
  const [isFocus, setIsFocus] = useState(false);
  const minimumDate = dayjs().add(1, 'day').toDate();
  const maximumDate = dayjs().add(15, 'days').toDate();
  const minimumTime = dayjs().startOf('day').add(7, 'hour').toDate();
  const maximumTime = dayjs().startOf('day').add(18, 'hour').toDate();

  useFocusEffect(() => {
    setIsFocus(true);
    console.log('runs');
  });

  console.log('re-render', i18n.locale, isFocus);

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

  const handleFormSubmit = (data: InputForm) => {
    createBooking(transformBookingInfo(data))
      .then((resp) => {
        if (resp?.id) {
          Alert.alert(i18n.t(localeKey.home_form_book_success_msg));
          navigation.navigate(Screen.DETAILS, resp);
        }
      })
      .catch((err) => {
        Alert.alert(i18n.t(localeKey.validation_something_went_wrong));
        console.log('err:', err);
      });
  };

  const renderHeader = () => {
    return (
      <View style={headerStyles.container}>
        <Pressable
          style={headerStyles.settingsContainer}
          onPress={() => navigation.push(Screen.SETTINGS)}>
          <SettingsIcon />
        </Pressable>
        <View style={headerStyles.headerCircleTopRight} />
        <View style={headerStyles.headerCircleBottomLeft} />
        <View style={headerStyles.headerTitleContainer}>
          <Text style={headerStyles.headerTitle}>Jio Health</Text>
          <Text style={headerStyles.headerSubTitle}>{i18n.t(localeKey.home_header_slogan)}</Text>
        </View>
      </View>
    );
  };

  const renderDateTimePickerForIOS = () => {
    return (
      <>
        <Controller
          name="date"
          control={control}
          render={({ field }) => (
            <HcDateTimePickerIOS
              mode="date"
              label={i18n.t(localeKey.home_form_date)}
              value={field.value}
              minimumDate={minimumDate}
              maximumDate={maximumDate}
              onChange={field.onChange}
            />
          )}
        />
        <Controller
          name="time"
          control={control}
          render={({ field }) => (
            <HcDateTimePickerIOS
              mode="time"
              label={i18n.t(localeKey.home_form_time)}
              value={field.value}
              minimumDate={minimumTime}
              maximumDate={maximumTime}
              minuteInterval={30}
              onChange={field.onChange}
            />
          )}
        />
      </>
    );
  };

  const renderDateTimePickerForAndroid = () => {
    return (
      <>
        <Controller
          name="date"
          control={control}
          render={({ field }) => (
            <HcDateTimePickerAndroid
              mode="date"
              label={i18n.t(localeKey.home_form_date)}
              value={field.value}
              minimumDate={minimumDate}
              maximumDate={maximumDate}
              onChange={field.onChange}
            />
          )}
        />
        <Controller
          name="time"
          control={control}
          render={({ field }) => (
            <HcDateTimePickerAndroid
              mode="time"
              label={i18n.t(localeKey.home_form_time)}
              value={field.value}
              minimumDate={minimumTime}
              maximumDate={maximumTime}
              onChange={field.onChange}
            />
          )}
        />
      </>
    );
  };

  const renderContent = () => {
    return (
      <ScrollView contentContainerStyle={{ width: Dimensions.get('window').width, flexGrow: 1 }}>
        <View style={contentStyles.container}>
          <Controller
            name="name"
            control={control}
            rules={{ required: i18n.t(localeKey.validation_required) }}
            render={({ field, fieldState }) => (
              <HcInput
                label={i18n.t(localeKey.home_form_name)}
                value={field.value}
                onChange={field.onChange}
                error={fieldState.error?.message}
              />
            )}
          />
          <Controller
            name="phone"
            control={control}
            rules={{ required: i18n.t(localeKey.validation_required) }}
            render={({ field, fieldState }) => (
              <HcInput
                label={i18n.t(localeKey.home_form_phone)}
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
                label={i18n.t(localeKey.home_form_location)}
                bottomSheetViewLabel={i18n.t(localeKey.home_form_choose_a_location)}
                items={ClinicLocations}
                value={field.value}
                onSelectItem={field.onChange}
              />
            )}
          />
          <View style={contentStyles.dateTimeContainer}>
            {Platform.OS === 'ios'
              ? renderDateTimePickerForIOS()
              : renderDateTimePickerForAndroid()}
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
          title={i18n.t(localeKey.home_form_book)}
          type="Primary"
          onPress={handleSubmit(handleFormSubmit)}
          style={contentStyles.bookButton}
        />
        <HcButton
          title={i18n.t(localeKey.home_form_checkin)}
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
      <View style={screenStyles.container}>
        {renderHeader()}
        {renderContent()}
      </View>
    </BottomSheetModalProvider>
  );
};

export default Home;
