import {View, Text, Button, Image, ScrollView} from 'react-native';
import {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Products = () => {
  const [product, setProduct] = useState([]);
  const fetchProduct = async () => {
    const resp = await fetch('https://fakestoreapi.com/products');
    const data = await resp.json();
    setProduct(data);
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  const addTocart = id => {
    console.warn(id);
  };
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          gap: 10,
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
        {product.map(item => {
          return (
            <View
              key={item.id}
              style={{
                width: '100%',
                borderColor: '#f4511e',
                shadowColor: '#171717',
                shadowOffset: {width: -2, height: 4},
                shadowOpacity: 0.2,
                shadowRadius: 3,
                borderRadius: 10,
                borderWidth: 1,
                padding: 15,
              }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  gap: 10,
                  alignItems: 'center',
                }}>
                <View style={{flex: 1}}>
                  <Image
                    style={{
                      width: 60,
                      height: 100,
                      resizeMode: 'contain',
                      borderRadius: 10,
                    }}
                    source={{uri: `${item.image}`}}
                  />
                </View>
                <View style={{flex: 4}}>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 12,
                      fontWeight: '700',
                      paddingBottom: 5,
                    }}>
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 9,
                      paddingBottom: 10,
                    }}>
                    {item.description}
                  </Text>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        gap: 10,
                      }}>
                      <Text style={{color: 'black', fontSize: 12}}>
                        Rating: {item?.rating?.rate}
                      </Text>
                      <Text style={{color: 'black', fontSize: 12}}>
                        Count: {item?.rating?.count}
                      </Text>
                    </View>
                    <View>
                      <Button
                        color={'#f4511e'}
                        onPress={() => addTocart(item.id)}
                        title="Add to cart"></Button>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          );
        })}
        {/* <Icon name="comments" size={30} color="#900" /> */}
      </View>
    </ScrollView>
  );
};

export default Products;
