import {Text, View, Button} from 'react-native';
import {StyledText, StyledView} from '../styles/styles';
// import {useState, useEffect} from 'react';

const Home = ({navigation, route}) => {
  const {username, age} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 25, color: 'black'}}>{username}</Text>
      <Text style={{fontSize: 25, color: 'black'}}>{age}</Text>
      <Button
        title="Go to Details"
        color={'#f4511e'}
        onPress={() =>
          navigation.navigate('Details', {
            name: 'Rishabh',
            age: 23,
            email: 'guptarishabh792@gmail.com',
          })
        }
      />
    </View>
  );
};

export default Home;
