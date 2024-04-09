import { Picker } from '@react-native-picker/picker';
import { FC, useState } from 'react';
import { View } from 'react-native';

import { Locale } from '../../common/constants';
import { HcHeader } from '../../components/header';
import { HcText } from '../../components/text';
import { i18n, localeKey } from '../../utils/i18n';

interface ISettingsProps {
  navigation: any;
}

export const Settings: FC<ISettingsProps> = ({ navigation }) => {
  const [selectedLang, setSelectedLang] = useState<Locale>(i18n.locale as Locale);

  const handleLanguageChange = (value: Locale) => {
    i18n.locale = value;
    setSelectedLang(value);
  };

  return (
    <View>
      <HcHeader
        label={i18n.t(localeKey.settings_header_title)}
        onBack={() => navigation.goBack()}
      />
      <HcText>{i18n.t(localeKey.settings_content_language)}</HcText>
      <Picker selectedValue={selectedLang} onValueChange={handleLanguageChange}>
        <Picker.Item label="English" value={Locale.EN} />
        <Picker.Item label="Vietnam" value={Locale.VN} />
      </Picker>
    </View>
  );
};
