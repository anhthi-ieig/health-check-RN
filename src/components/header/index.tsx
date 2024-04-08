import { FC } from 'react';
import { Pressable, View } from 'react-native';

import { styles } from './styled';
import { HcText } from '../text';

interface HcHeaderProps {
  label: string;
  onBack?: () => void;
}

export const HcHeader: FC<HcHeaderProps> = ({ label, onBack }) => {
  return (
    <View style={styles.header}>
      <Pressable onPress={onBack} style={styles.headerLrContainer}>
        <HcText style={styles.headerLeft}>Back</HcText>
      </Pressable>
      <HcText style={styles.headerTitle}>{label}</HcText>
      <Pressable style={styles.headerLrContainer}>
        <HcText style={styles.headerRight}>&nbsp;</HcText>
      </Pressable>
    </View>
  );
};
