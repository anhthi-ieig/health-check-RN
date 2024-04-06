import { FC } from 'react';
import { Pressable, Text } from 'react-native';

import { styles } from './styled';
import { HcText } from '../text';

interface HcButtonProps {
  title: string;
  type?: 'Normal' | 'Primary';
  style?: Record<string, string | number>;
  onPress: () => void;
}

export const HcButton: FC<HcButtonProps> = ({ title, type = 'Normal', style, onPress }) => {
  return (
    <Pressable style={{ ...styles.button, ...styles[`button${type}`], ...style }} onPress={onPress}>
      <HcText style={styles[`title${type}`]}>{title}</HcText>
    </Pressable>
  );
};
