import {Text, StyleSheet, View, ScrollView} from 'react-native';
import Banner from '../components/home/Banner';
import Products from '../components/home/Products';

const TabHome = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flex: 3}}>
          <Banner />
        </View>
        <View
          style={{
            flex: 1,
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginHorizontal: 25,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{color: '#f4511e', fontSize: 20}}>Products</Text>
            <Text
              style={{
                color: 'white',
                borderRadius: 10,
                paddingHorizontal: 15,
                paddingVertical: 3,
                fontSize: 14,
                backgroundColor: '#f4511e',
              }}>
              See ALL
            </Text>
          </View>
          <Banner flexDirection={'row'} gap={10} height={125} radius={100} />
        </View>
        <View style={{flex: 3, paddingTop: 100, marginHorizontal: 25}}>
          <Products />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default TabHome;
