import { View } from 'react-native';
import { HcHeader } from '../../components/header';
import { FC } from 'react';

interface ISettingsProps {
  navigation: any;
}

export const Settings: FC<ISettingsProps> = ({ navigation }) => {
  return (
    <View>
      <HcHeader label="Settings" onBack={() => navigation.goBack()} />
    </View>
  );
};
