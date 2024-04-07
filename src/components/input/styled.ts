import { StyleSheet } from 'react-native';

import { Color, FontSize, Spacing } from '../../common/constants';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    marginBottom: Spacing.BETWEEN_ELEMENTS,
  },
  label: {
    color: Color.Light8,
    fontWeight: '400',
    fontSize: FontSize.Md,
  },
  input: {
    height: 48,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#a3ffd1',
    backgroundColor: '#e1f7ec',
    borderRadius: 6,
    marginTop: 6,
    paddingHorizontal: 12,
  },
  error: {
    color: Color.RED,
    fontStyle: 'italic',
    marginTop: 6,
  },
});
