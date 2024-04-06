import { StyleSheet } from 'react-native';

import { Color, FontSize, Spacing } from '../../common/constants';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginBottom: Spacing.BETWEEN_ELEMENTS,
  },
  label: {
    color: Color.Light8,
    fontWeight: '400',
    fontSize: FontSize.Md,
    marginBottom: 6,
  },
  dateTimePicker: {
    marginLeft: -10,
  },
});
