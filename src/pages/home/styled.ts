import { StyleSheet } from 'react-native';

import { Color, FontFamily, Spacing } from '../../common/constants';

export const screenStyles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: Color.WHITE,
  },
});

export const headerStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: 280,
    backgroundColor: Color.PRIMARY,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  headerTitleContainer: {
    marginBottom: -40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: FontFamily.PACIFICO,
    color: Color.WHITE,
    fontSize: 28,
    flexWrap: 'nowrap',
    textAlign: 'center',
  },
  headerSubTitle: {
    textAlign: 'center',
    color: Color.WHITE,
  },
  headerCircleTopRight: {
    width: 300,
    height: 280,
    position: 'absolute',
    top: -160,
    right: -120,
    borderRadius: 150,
    backgroundColor: Color.PRIMARY_LIGHT,
  },
  headerCircleBottomLeft: {
    width: 240,
    height: 200,
    position: 'absolute',
    bottom: -140,
    left: -120,
    borderRadius: 180,
    backgroundColor: Color.PRIMARY_LIGHT,
  },
});

export const contentStyles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 40,
    paddingHorizontal: Spacing.PADDING_HORIZONTAL,
    display: 'flex',
    alignItems: 'center',
    borderRadius: 8,
    flexGrow: 1,
    position: 'relative',
    paddingBottom: 200,
  },
  dateTimeContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  ctaContainer: {
    width: '100%',
    height: 160,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  bookButton: {
    width: 180,
    marginBottom: 10,
  },
  checkinButton: {
    width: 180,
  },
});
