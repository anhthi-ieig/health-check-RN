import { StyleSheet } from 'react-native';

import { Color, FontSize } from '../../common/constants';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    position: 'relative',
  },
  contentContainer: {
    height: 500,
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  instructionTitle: {
    textAlign: 'center',
    marginBottom: 20,
  },
  camera: {
    flex: 1,
    borderRadius: 10,
  },
  flipButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  flipButton: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  flipButtonText: {
    fontSize: FontSize.Lg,
    fontWeight: 'bold',
    color: 'white',
  },
  checkedInContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 30,
    paddingHorizontal: 0,
  },
  clinicName: {
    color: Color.PRIMARY,
    fontWeight: '400',
  },
  checkinTitle: {
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
  checkinSubTitle: {
    textAlign: 'center',
  },
});
