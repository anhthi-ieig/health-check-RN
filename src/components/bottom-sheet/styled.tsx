import { StyleSheet } from 'react-native';

import { Color, FontFamily, FontSize, Spacing } from '../../common/constants';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    fontFamily: FontFamily.COMFORTAA,
    color: Color.Light8,
    fontWeight: '400',
    fontSize: FontSize.Md,
    marginBottom: 6,
  },
  dropdown: {
    height: 48,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#a3ffd1',
    backgroundColor: '#e1f7ec',
    borderRadius: 6,
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  bottomSheetView: {
    paddingVertical: 18,
    paddingHorizontal: Spacing.PADDING_HORIZONTAL,
  },
  bottomSheetViewLabel: {
    fontSize: FontSize.Lg,
    fontWeight: '600',
    marginBottom: 20,
  },
  bottomSheetViewItem: {
    marginVertical: 8,
  },
});
