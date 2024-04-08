import { FC } from 'react';
import { Linking, Pressable, ScrollView, View } from 'react-native';

import { styles } from './styled';
import { HcHeader } from '../../components/header';
import { HcText } from '../../components/text';

interface IDetailsProps {
  route: any;
  navigation: any;
}

const Details: FC<IDetailsProps> = ({ route, navigation }) => {
  const { name, phone, location, date, time } = route.params;
  return (
    <ScrollView style={styles.container}>
      <HcHeader label="Booking Details" onBack={() => navigation.goBack()} />
      <View style={styles.body}>
        <View style={styles.bodyRow}>
          <View style={styles.column}>
            <HcText>Name</HcText>
          </View>

          <View style={styles.column}>
            <HcText>{name}</HcText>
          </View>
        </View>

        <View style={styles.bodyRow}>
          <View style={styles.column}>
            <HcText>Phone</HcText>
          </View>

          <View style={styles.column}>
            <HcText>{phone}</HcText>
          </View>
        </View>

        <View style={styles.bodyRow}>
          <View style={styles.column}>
            <HcText>Location</HcText>
          </View>

          <View style={styles.column}>
            <HcText>{location}</HcText>
          </View>
        </View>

        <View style={styles.bodyRow}>
          <View style={styles.column}>
            <HcText>Time</HcText>
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
          The clinic will not hold appointments if customers arrive more than 15 minutes late.
          Clinic staff will assist customers in scheduling a new appointment if they arrive late or
          do not show up for their scheduled appointment. Please arrive on time so that we can
          provide you with the best service. For further details, please contact
          <Pressable
            onPress={() => {
              Linking.openURL('tel:02477755557');
            }}>
            <HcText style={styles.phone}> 02477755557 </HcText>
          </Pressable>
          for assistance. We look forward to welcoming you to Jio Smart Clinic.
        </HcText>
      </View>
    </ScrollView>
  );
};

export default Details;
