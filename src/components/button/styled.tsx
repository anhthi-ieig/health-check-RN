import { StyleSheet } from 'react-native';

import { Color } from '../../common/constants';

export const styles = StyleSheet.create({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 4,
  },
  buttonPrimary: {
    backgroundColor: Color.PRIMARY,
  },
  buttonNormal: {
    borderWidth: 2,
    borderColor: Color.PRIMARY_LIGHT,
    backgroundColor: Color.WHITE,
  },
  titlePrimary: {
    color: Color.WHITE,
    fontWeight: '600',
  },
  titleNormal: {
    color: Color.PRIMARY_LIGHT,
    fontWeight: '600',
  },
});
