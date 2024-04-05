import { FC } from 'react';
import { View, Text, Button } from 'react-native';

interface IDetailsProps {
  navigation: any;
}

const Details: FC<IDetailsProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Booking Detail</Text>
      <Button title="Go to Details" onPress={() => ''} />
    </View>
  );
};

export default Details;
