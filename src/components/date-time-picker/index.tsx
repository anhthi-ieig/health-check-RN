import DateTimePicker, {
  AndroidNativeProps,
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
};

export const HcDateTimePicker: FC<HcDateTimePickerProps> = ({
  width = Dimensions.get('window').width / 2,
  label,
  ...restProps
}) => {
  return (
    <View style={{ ...styles.container, width }}>
      <HcText style={styles.label}>{label}</HcText>
      <DateTimePicker {...restProps} value={new Date()} style={styles.dateTimePicker} />
    </View>
  );
};
