import { FC } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { Color, FontFamily, FontSize } from '../../common/constants';
import { HcButton } from '../../components/button';

interface IScanQRProps {
  navigation: any;
}

const ScanQR: FC<IScanQRProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Scan QR</Text>
      </View>
      <View style={styles.footer}>
        <HcButton
          type="Normal"
          title="Go Back"
          onPress={() => navigation.goBack()}
          style={styles.goBackButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    position: 'relative',
  },
  header: {
    width: '100%',
    height: 140,
    backgroundColor: Color.PRIMARY,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: FontFamily.COMFORTAA,
    color: '#fff',
    fontSize: FontSize.Lg,
    marginBottom: -60,
  },
  footer: {
    width: '100%',
    position: 'absolute',
    bottom: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  goBackButton: {
    width: 180,
  },
});

export default ScanQR;
