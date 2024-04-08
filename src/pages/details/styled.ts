import { StyleSheet } from 'react-native';

import { Color, FontSize } from '../../common/constants';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    position: 'relative',
  },
  body: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  bodyRow: {
    width: '100%',
    height: 80,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: Color.PRIMARY_LIGHT,
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 16,
  },
  column: {
    flexDirection: 'row',
    // flex: 1,
  },
  helperMessage: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  helperMessageText: {
    fontSize: FontSize.Md,
    lineHeight: 22,
    textAlign: 'justify',
  },
  phone: {
    fontWeight: '900',
    color: Color.PRIMARY_LIGHT,
  },
});
