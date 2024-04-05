import { FC } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { Color, FontFamily, FontSize } from '../../common/constants';

interface IHcInputProps {
  label: string;
}

export const HcInput: FC<IHcInputProps> = ({ label }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  label: {
    fontFamily: FontFamily.COMFORTAA,
    color: Color.Light8,
    fontWeight: '400',
    fontSize: FontSize.Md,
  },
  input: {
    height: 48,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#a3ffd1',
    backgroundColor: '#e1f7ec',
    borderRadius: 6,
    marginTop: 6,
    paddingHorizontal: 12,
  },
});
