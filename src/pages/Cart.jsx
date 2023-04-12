import {StyledView, StyledText, StyledImage} from '../styles/styles';
import {useState, useEffect} from 'react';
import {ScrollView, Button} from 'react-native';

const Cart = () => {
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
    <StyledView classes={['h:40']}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate={'fast'}>
        <StyledView classes={['flex:1', 'flex:row', 'justify:center', 'my:5']}>
          {product.map(item => {
            return (
              <StyledView
                key={item.id}
                classes={[
                  'shadow:md',
                  'rounded:lg',
                  'p:3',
                  'h:32',
                  'bg:white',
                  'mb:2',
                  'mr:3',
                ]}>
                <StyledView classes={['flex:row', 'items:start']}>
                  <StyledView style={{flex: 1}}>
                    <StyledImage
                      classes={['w:20', 'h:24', 'resize:contain', 'rounded:lg']}
                      source={{uri: `${item.image}`}}
                    />
                  </StyledView>
                  {/* <StyledView style={{flex: 4}}>
                  <StyledText
                    classes={[
                      'color:black',
                      'text-lg',
                      'font-weight:bold',
                      'py:3',
                      'ml:5',
                    ]}>
                    {item.title}
                  </StyledText>
                  <StyledView
                    classes={[
                      'flex:row',
                      'justify:between',
                      'px:5',
                      'items:center',
                    ]}>
                    <StyledView>
                      <StyledText classes={['color:black']}>
                        Quantity: 5
                      </StyledText>
                    </StyledView>
                    <StyledView classes={['flex:row', 'items:center']}>
                      <StyledText
                        classes={[
                          'color:black',
                          'bg:white',
                          'shadow:lg',
                          'px:3',
                          'text:lg',
                          'py:1',
                          'rounded:lg',
                        ]}>
                        +
                      </StyledText>
                      <StyledText
                        classes={[
                          'color:black',
                          'bg:white',
                          'shadow:lg',
                          'px:3',
                          'text:lg',
                          'py:1',
                          'rounded:lg',
                          'mx:2',
                        ]}>
                        2
                      </StyledText>
                      <StyledText
                        classes={[
                          'color:black',
                          'bg:white',
                          'shadow:lg',
                          'px:3',
                          'text:lg',
                          'py:1',
                          'rounded:lg',
                        ]}>
                        -
                      </StyledText>
                    </StyledView>
                  </StyledView>
                </StyledView> */}
                </StyledView>
              </StyledView>
            );
          })}
        </StyledView>
      </ScrollView>
    </StyledView>
  );
};

export default Cart;
