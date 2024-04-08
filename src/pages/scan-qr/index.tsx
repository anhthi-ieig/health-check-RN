import { Camera, CameraType, PermissionStatus } from 'expo-camera';
import { FC, useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styled';
import SuccessIcon from '../../../assets/icons/success.svg';
import { FontSize } from '../../common/constants';
import { HcHeader } from '../../components/header';
import { HcText } from '../../components/text';

interface ScanQRData {
  name: string;
  location: string;
}

interface IScanQRProps {
  navigation: any;
}

const ScanQR: FC<IScanQRProps> = ({ navigation }) => {
  const [type, setType] = useState(CameraType.back);
  const [scannedData, setScannedData] = useState<ScanQRData>();
  const [permission, requestPermission] = Camera.useCameraPermissions();

  useEffect(() => {
    (async () => {
      await requestPermission();
    })();
  }, []);

  function toggleCameraType() {
    setType((current) => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  const handleBarCodeScanned = (result: any) => {
    if (result?.data) {
      setScannedData(JSON.parse(result?.data || ''));
    }
  };

  const renderContent = () => {
    if (permission?.status === PermissionStatus.UNDETERMINED) {
      return <HcText>Requesting for camera permission</HcText>;
    }

    if (permission?.status === PermissionStatus.DENIED) {
      return <HcText>No access to camera</HcText>;
    }

    if (scannedData) {
      return (
        <View style={styles.checkedInContainer}>
          <SuccessIcon />
          <HcText variant={FontSize.Lg} style={styles.checkinTitle}>
            Checked in the{' '}
            <HcText variant={FontSize.Xl} style={styles.clinicName}>
              {scannedData.name}
            </HcText>
          </HcText>
          <HcText style={styles.checkinSubTitle}>at {scannedData.location}</HcText>
        </View>
      );
    }

    return (
      <>
        <HcText style={styles.instructionTitle}>Scan the clinic QR code to checkin</HcText>
        <Camera style={styles.camera} type={type} onBarCodeScanned={handleBarCodeScanned}>
          <View style={styles.flipButtonContainer}>
            <TouchableOpacity style={styles.flipButton} onPress={toggleCameraType}>
              <Text style={styles.flipButtonText}>Flip Camera</Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <HcHeader label="Scan QR" onBack={() => navigation.goBack()} />
      <View style={styles.contentContainer}>{renderContent()}</View>
    </View>
  );
};

export default ScanQR;
