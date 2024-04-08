import { StyleSheet } from 'react-native';

import { Color, Element, FontSize, Spacing } from '../../common/constants';

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
  dateTimePickerIOS: {
    marginLeft: -10,
  },
  dateTimePickerAndroid: {
    height: Element.HEIGHT,
    backgroundColor: Color.PRIMARY,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 14,
    borderRadius: Element.BORDER_RADIUS,
  },
  dateTimePickerAndroidText: {
    color: Color.WHITE,
  },
});
