import { Picker } from '@react-native-picker/picker';
import { FC, useState } from 'react';
import { Platform, ScrollView, View } from 'react-native';

import { styles } from './styled';
import { Locale, StorageKey } from '../../common/constants';
import { HcHeader } from '../../components/header';
import { HcText } from '../../components/text';
import { i18n, localeKey } from '../../utils/i18n';
import { storeData } from '../../utils/storage';

interface ISettingsProps {
  navigation: any;
}

export const Settings: FC<ISettingsProps> = ({ navigation }) => {
  const [selectedLang, setSelectedLang] = useState<Locale>(i18n.locale as Locale);

  const handleLanguageChange = (lang: Locale) => {
    i18n.locale = lang;
    setSelectedLang(lang);

    (async () => {
      await storeData(StorageKey.LANG, lang);
    })();
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
          style={Platform.OS === 'ios' ? styles.langPickerIOS : styles.langPickerAndroid}>
          <Picker.Item label="English" value={Locale.EN} />
          <Picker.Item label="Vietnam" value={Locale.VN} />
        </Picker>
      </View>
    </ScrollView>
  );
};
