import { Picker } from '@react-native-picker/picker';
import { FC, useState } from 'react';
import { ScrollView, View } from 'react-native';

import { styles } from './styled';
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
    <ScrollView>
      <HcHeader
        label={i18n.t(localeKey.settings_header_title)}
        onBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <HcText>{i18n.t(localeKey.settings_content_language)}</HcText>
        <Picker
          selectedValue={selectedLang}
          onValueChange={handleLanguageChange}
          style={styles.langPicker}>
          <Picker.Item label="English" value={Locale.EN} />
          <Picker.Item label="Vietnam" value={Locale.VN} />
        </Picker>
      </View>
    </ScrollView>
  );
};
