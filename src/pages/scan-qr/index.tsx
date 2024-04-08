import { Camera, CameraType, PermissionStatus } from 'expo-camera';
import { FC, useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styled';
import SuccessIcon from '../../../assets/icons/success.svg';
import { FontSize } from '../../common/constants';
import { HcHeader } from '../../components/header';
import { HcText } from '../../components/text';
import { i18n, localeKey } from '../../utils/i18n';

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
      return <HcText>{i18n.t(localeKey.scanQR_content_requesting_for_camera_permission)}</HcText>;
    }

    if (permission?.status === PermissionStatus.DENIED) {
      return <HcText>{i18n.t(localeKey.scanQR_content_no_access_to_camera)}</HcText>;
    }

    if (scannedData) {
      return (
        <View style={styles.checkedInContainer}>
          <SuccessIcon />
          <HcText variant={FontSize.Lg} style={styles.checkinTitle}>
            {i18n.t(localeKey.scanQR_content_checked_in_the)}{' '}
            <HcText variant={FontSize.Xl} style={styles.clinicName}>
              {scannedData.name}
            </HcText>
          </HcText>
          <HcText style={styles.checkinSubTitle}>
            {i18n.t(localeKey.common_at)} {scannedData.location}
          </HcText>
        </View>
      );
    }

    return (
      <>
        <HcText style={styles.instructionTitle}>
          {i18n.t(localeKey.scanQR_content_scan_the_qr_code_to_checkin)}
        </HcText>
        <Camera style={styles.camera} type={type} onBarCodeScanned={handleBarCodeScanned}>
          <View style={styles.flipButtonContainer}>
            <TouchableOpacity style={styles.flipButton} onPress={toggleCameraType}>
              <Text style={styles.flipButtonText}>
                {i18n.t(localeKey.scanQR_content_flip_camera)}
              </Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <HcHeader label={i18n.t(localeKey.scanQR_header_title)} onBack={() => navigation.goBack()} />
      <View style={styles.contentContainer}>{renderContent()}</View>
    </View>
  );
};

export default ScanQR;
