import { StyleSheet } from 'react-native';

import { Spacing } from '../../common/constants';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    position: 'relative',
    paddingHorizontal: Spacing.PADDING_HORIZONTAL,
  },
  langPickerIOS: {
    marginTop: -30,
  },
  langPickerAndroid: {
    width: '80%',
    marginLeft: 20,
  },
});
