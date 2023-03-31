import {Text, View, Button, StatusBar} from 'react-native';

const DetailScreen = ({route, navigation}) => {
  const {name, age, email} = route.params;
  return (
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'center', gap: 5}}>
      <StatusBar backgroundColor={'#f4511e'}></StatusBar>
      <View style={{gap: 5}}>
        <Text style={{color: 'black', fontSize: 25}}>{name}</Text>
        <Text style={{color: 'black', fontSize: 25}}>{age}</Text>
        <Text style={{color: 'black', fontSize: 25}}>{email}</Text>
      </View>
      <Button
        title="Go to Home"
        color={'#f4511e'}
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Go Back to Home"
        color={'#f4511e'}
        onPress={() =>
          navigation.navigate({name: 'Home', params: {age: 25}, merge: true})
        }
      />
    </View>
  );
};

export default DetailScreen;
