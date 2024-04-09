import { FC } from 'react';
import { Linking, Pressable, ScrollView, View } from 'react-native';

import { styles } from './styled';
import { HcHeader } from '../../components/header';
import { HcText } from '../../components/text';
import { i18n, localeKey } from '../../utils/i18n';

interface IDetailsProps {
  route: any;
  navigation: any;
}

const Details: FC<IDetailsProps> = ({ route, navigation }) => {
  const { name, phone, location, date, time } = route.params;
  return (
    <ScrollView style={styles.container}>
      <HcHeader label={i18n.t(localeKey.details_header_title)} onBack={() => navigation.goBack()} />
      <View style={styles.body}>
        <View style={styles.bodyRow}>
          <View style={styles.column}>
            <HcText>{i18n.t(localeKey.details_content_name)}</HcText>
          </View>

          <View style={styles.column}>
            <HcText>{name}</HcText>
          </View>
        </View>

        <View style={styles.bodyRow}>
          <View style={styles.column}>
            <HcText>{i18n.t(localeKey.home_form_phone)}</HcText>
          </View>

          <View style={styles.column}>
            <HcText>{phone}</HcText>
          </View>
        </View>

        <View style={styles.bodyRow}>
          <View style={styles.column}>
            <HcText>{i18n.t(localeKey.details_content_location)}</HcText>
          </View>

          <View style={styles.column}>
            <HcText>{location}</HcText>
          </View>
        </View>

        <View style={styles.bodyRow}>
          <View style={styles.column}>
            <HcText>{i18n.t(localeKey.details_content_time)}</HcText>
          </View>

          <View style={styles.column}>
            <HcText>
              {date} {time}
            </HcText>
          </View>
        </View>
      </View>
      <View style={styles.helperMessage}>
        <HcText style={styles.helperMessageText}>
          {i18n.t(localeKey.details_content_notes_1)}
          <Pressable
            onPress={() => {
              Linking.openURL('tel:02477755557');
            }}>
            <HcText style={styles.phone}> 02477755557 </HcText>
          </Pressable>
          {i18n.t(localeKey.details_content_notes_2)}
        </HcText>
      </View>
    </ScrollView>
  );
};

export default Details;
