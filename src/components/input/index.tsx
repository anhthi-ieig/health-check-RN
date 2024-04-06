import { FC } from 'react';
import { TextInput, View } from 'react-native';

import { styles } from './styled';
import { HcText } from '../text';

interface IHcInputProps {
  label: string;
}

export const HcInput: FC<IHcInputProps> = ({ label }) => {
  return (
    <View style={styles.container}>
      <HcText style={styles.label}>{label}</HcText>
      <TextInput style={styles.input} />
    </View>
  );
};
