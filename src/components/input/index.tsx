import { FC } from 'react';
import { TextInput, View } from 'react-native';

import { styles } from './styled';
import { FontSize } from '../../common/constants';
import { HcText } from '../text';

interface IHcInputProps {
  label: string;
  value: string;
  error?: string;
  onChange?: (value: string) => void;
}

export const HcInput: FC<IHcInputProps> = ({ label, value, error, onChange }) => {
  const handleChange = (value: string) => {
    onChange?.(value);
  };

  return (
    <View style={styles.container}>
      <HcText style={styles.label}>{label}</HcText>
      <TextInput value={value} onChangeText={handleChange} style={styles.input} />
      {error && (
        <HcText variant={FontSize.Sm} style={styles.error}>
          {error}
        </HcText>
      )}
    </View>
  );
};
