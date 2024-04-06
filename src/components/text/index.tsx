import { FC } from 'react';
import { Text } from 'react-native';

import { styles } from './styled';
import { FontSize } from '../../common/constants';

interface HcTextProps {
  children: any;
  variant?: FontSize;
  style?: Record<string, string | number>;
}

export const HcText: FC<HcTextProps> = ({ children, variant = FontSize.Md, style }) => {
  return <Text style={{ ...styles.text, fontSize: variant, ...style }}>{children}</Text>;
};
