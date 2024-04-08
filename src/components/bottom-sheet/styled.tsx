import { StyleSheet } from 'react-native';

import { Color, Element, FontSize, Spacing } from '../../common/constants';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: Spacing.BETWEEN_ELEMENTS,
  },
  label: {
    color: Color.Light8,
    fontWeight: '400',
    fontSize: FontSize.Md,
    marginBottom: 6,
  },
  dropdown: {
    height: Element.HEIGHT,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#a3ffd1',
    backgroundColor: '#e1f7ec',
    borderRadius: Element.BORDER_RADIUS,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 12,
  },
  dropdownLabel: {
    flexWrap: 'nowrap',
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
    marginVertical: 10,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  bottomSheetViewItemLabel: {
    flexWrap: 'nowrap',
    marginLeft: 10,
  },
});
