import { StyleSheet } from 'react-native';

import { Color, FontSize } from '../../common/constants';

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 140,
    backgroundColor: Color.PRIMARY,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 32,
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  headerLrContainer: {
    width: 80,
  },
  headerLeft: {
    color: Color.WHITE,
  },
  headerTitle: {
    color: Color.WHITE,
    fontSize: FontSize.Lg,
  },
  headerRight: {
    color: Color.WHITE,
  },
});
