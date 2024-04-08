import { FC } from 'react';
import { View, StyleSheet } from 'react-native';

import { HcHeader } from '../../components/header';

interface IScanQRProps {
  navigation: any;
}

const ScanQR: FC<IScanQRProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HcHeader label="Scan QR" onBack={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    position: 'relative',
  },
});

export default ScanQR;
