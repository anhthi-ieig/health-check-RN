import DateTimePicker, {
  AndroidNativeProps,
  DateTimePickerEvent,
  IOSNativeProps,
  WindowsNativeProps,
} from '@react-native-community/datetimepicker';
import { FC } from 'react';
import { Dimensions, View } from 'react-native';

import { styles } from './styled';
import { HcText } from '../text';

type PureDateTimePickerProps = IOSNativeProps | AndroidNativeProps | WindowsNativeProps;
type HcDateTimePickerProps = PureDateTimePickerProps & {
  label: string;
  width?: number;
  mode: 'date' | 'time';
  onChange?: (date?: Date) => void;
};

export const HcDateTimePicker: FC<HcDateTimePickerProps> = ({
  label,
  width = Dimensions.get('window').width / 2,
  mode,
  value,
  onChange,
  ...restProps
}) => {
  const handleChange = (_: DateTimePickerEvent, date: Date | undefined) => {
    onChange?.(date);
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
        style={styles.dateTimePicker}
      />
    </View>
  );
};
