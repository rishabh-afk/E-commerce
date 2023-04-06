import {View, Text, StyleSheet, Image} from 'react-native';
const Banner = ({flexDirection, gap, radius, height}) => {
  return (
    <View
      style={{
        flex: 1,
        margin: 20,
        gap: 15,
        gap: gap === undefined ? 15 : gap,
        flexDirection: `${
          flexDirection === undefined ? 'column' : flexDirection
        }`,
      }}>
      <View
        style={{
          flex: 1,
          borderRadius: 10,
          height: height === undefined ? '100%' : height,
          borderRadius: radius === undefined ? 10 : radius,
          backgroundColor: 'powderblue',
          flexDirection: `${
            flexDirection === undefined ? 'column' : flexDirection
          }`,
        }}>
        <Image
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
            borderRadius: radius === undefined ? 10 : radius,
          }}
          source={require('../../images/banner1.jpg')}
        />
      </View>
      <View
        style={{
          flex: 1,
          borderRadius: 10,
          height: height === undefined ? '100%' : height,
          flexDirection: `${
            flexDirection === undefined ? 'column' : flexDirection
          }`,
        }}>
        <Image
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
            borderRadius: radius === undefined ? 10 : radius,
          }}
          source={require('../../images/banner2.jpg')}
        />
      </View>
      <View
        style={{
          flex: 1,
          borderRadius: 10,
          height: height === undefined ? '100%' : height,
          flexDirection: `${
            flexDirection === undefined ? 'column' : flexDirection
          }`,
        }}>
        <Image
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
            borderRadius: radius === undefined ? 10 : radius,
          }}
          source={require('../../images/banner3.jpg')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default Banner;
