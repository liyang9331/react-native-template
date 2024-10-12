import {View, Text, Button} from 'react-native';
// import Images from '../Images/Images';
// import Buttons from '../Buttons/Buttons';
import TextInputs from '../TextInputs/TextInputs';
const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TextInputs />
    </View>
  );
};

export default HomeScreen;
