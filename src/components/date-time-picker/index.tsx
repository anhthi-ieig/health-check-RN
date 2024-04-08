import DateTimePicker, {
  AndroidNativeProps,
  DateTimePickerAndroid,
  DateTimePickerEvent,
  IOSNativeProps,
  WindowsNativeProps,
} from '@react-native-community/datetimepicker';
import dayjs from 'dayjs';
import { FC } from 'react';
import { Dimensions, Pressable, View } from 'react-native';

import { styles } from './styled';
import { HcText } from '../text';

type PureDateTimePickerProps = IOSNativeProps | AndroidNativeProps | WindowsNativeProps;
type HcDateTimePickerProps = PureDateTimePickerProps & {
  width?: number;
  label: string;
  mode: 'date' | 'time';
  onChange: (date?: Date) => void;
};

export const HcDateTimePickerIOS: FC<HcDateTimePickerProps> = ({
  label,
  width = Dimensions.get('window').width / 2,
  mode,
  value,
  onChange,
  ...restProps
}) => {
  const handleChange = (_: DateTimePickerEvent, date: Date | undefined) => {
    onChange(date);
  };

  return (
    <View style={{ ...styles.container, width }}>
      <HcText style={styles.label}>{label}</HcText>
      <DateTimePicker
        {...restProps}
        mode={mode}
        display="calendar"
        value={value}
        onChange={handleChange}
        style={styles.dateTimePickerIOS}
      />
    </View>
  );
};

export const HcDateTimePickerAndroid: FC<HcDateTimePickerProps> = ({
  width = Dimensions.get('window').width / 2,
  label,
  mode,
  value,
  onChange,
}) => {
  const showDateMode = () => {
    DateTimePickerAndroid.open({
      mode,
      value,
      is24Hour: true,
      onChange: (_: DateTimePickerEvent, date: Date | undefined) => {
        onChange(date);
      },
    });
  };

  const getTitle = () => {
    if (!value) {
      return mode === 'date' ? 'Choose a date' : 'Choose a time';
    }

    return dayjs(value).format(mode === 'date' ? 'YYYY-MM-YY' : 'HH:mm');
  };

  return (
    <View style={{ ...styles.container, width }}>
      <HcText style={styles.label}>{label}</HcText>
      <Pressable onPress={showDateMode} style={styles.dateTimePickerAndroid}>
        <HcText style={styles.dateTimePickerAndroidText}>{getTitle()}</HcText>
      </Pressable>
    </View>
  );
};
