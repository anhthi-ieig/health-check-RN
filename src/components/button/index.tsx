import { FC } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

import { Color } from '../../common/constants';

interface HcButtonProps {
  title: string;
  type?: 'Normal' | 'Primary';
  style?: Record<string, string | number>;
  onPress: () => void;
}

export const HcButton: FC<HcButtonProps> = ({ title, type = 'Normal', style, onPress }) => {
  return (
    <Pressable style={{ ...styles.button, ...styles[`button${type}`], ...style }} onPress={onPress}>
      <Text style={styles[`title${type}`]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 4,
  },
  buttonPrimary: {
    backgroundColor: Color.PRIMARY,
  },
  buttonNormal: {
    borderWidth: 2,
    borderColor: Color.PRIMARY_LIGHT,
  },
  titlePrimary: {
    color: Color.WHITE,
    fontWeight: '600',
  },
  titleNormal: {
    color: Color.PRIMARY_LIGHT,
    fontWeight: '600',
  },
});
