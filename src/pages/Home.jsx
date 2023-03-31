import {Text, View, Button} from 'react-native';
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
  //   const [count, setCount] = useState(0);
  //   useEffect(() => {
  //     navigation.setOptions({
  //       headerRight: () => (
  //         <Button onPress={() => setCount(c => c + 1)} title="Update count" />
  //       ),
  //     });
  //   }, [navigation]);
  //   return <Text style={{fontSize: 25, color: 'black'}}>Count: {count}</Text>;
};

export default Home;
