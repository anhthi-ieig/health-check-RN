import { FC } from 'react';
import { Linking, Pressable, StyleSheet, View } from 'react-native';

import { Color, FontFamily, FontSize } from '../../common/constants';
import { HcButton } from '../../components/button';
import { HcText } from '../../components/text';

interface IDetailsProps {
  route: any;
  navigation: any;
}

const Details: FC<IDetailsProps> = ({ route, navigation }) => {
  const { name, phone, location, date, time } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <HcText style={styles.headerTitle}>Booking Details</HcText>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyRow}>
          <View style={styles.column}>
            <HcText>Fullname</HcText>
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
      <View style={styles.footer}>
        <HcButton
          type="Normal"
          title="Go Back"
          onPress={() => navigation.goBack()}
          style={styles.goBackButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    position: 'relative',
  },
  header: {
    width: '100%',
    height: 140,
    backgroundColor: Color.PRIMARY,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: FontFamily.COMFORTAA,
    color: '#fff',
    fontSize: FontSize.Lg,
    marginBottom: -60,
  },
  body: {
    flex: 1,
    padding: 20,
  },
  bodyRow: {
    width: '100%',
    height: 80,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: Color.PRIMARY_LIGHT,
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 16,
  },
  column: {
    flexDirection: 'row',
    // flex: 1,
  },
  helperMessage: {
    flex: 1,
    padding: 20,
  },
  helperMessageText: {
    fontSize: FontSize.Md,
    lineHeight: 22,
  },
  phone: {
    fontWeight: '900',
    color: Color.PRIMARY_LIGHT,
  },
  footer: {
    width: '100%',
    position: 'absolute',
    bottom: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  goBackButton: {
    width: 180,
  },
});

export default Details;
