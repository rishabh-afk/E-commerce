import {Button, Image, ScrollView} from 'react-native';
import {useState, useEffect} from 'react';
import {StyledView, StyledText, StyledImage} from '../../styles/styles';

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
      <StyledView
        classes={[
          'flex:1',
          'flex-col',
          'justify:center',
          'shadow:lg',
          'flex:wrap',
        ]}>
        {product.map(item => {
          return (
            <StyledView
              key={item.id}
              classes={[
                'rounded:lg',
                'border:hairline',
                'bg:white',
                'p:3',
                'mb:3',
                'w:full',
              ]}>
              <StyledView classes={['flex:row', 'items:center']}>
                <StyledView style={{flex: 1}}>
                  <StyledImage
                    classes={['w:14', 'h:24', 'resize:contain', 'rounded:md']}
                    source={{uri: `${item.image}`}}
                  />
                </StyledView>
                <StyledView style={{flex: 4}}>
                  <StyledText
                    classes={[
                      'color:black',
                      'text:md',
                      'font-weight:semibold',
                      'pb:2',
                    ]}>
                    {item.title}
                  </StyledText>
                  <StyledText classes={['color:black', 'text:xs', 'pb:2']}>
                    {item.description.slice(0, 100)}
                    {item.description.length > 100 && (
                      <StyledText classes={['color:red-400']}>
                        {' '}
                        ...Read More
                      </StyledText>
                    )}
                  </StyledText>
                  <StyledView
                    classes={['flex:row', 'justify:between', 'items:center']}>
                    <StyledView classes={['flex:row']}>
                      <StyledText classes={['color:black', 'text:sm', 'mr:2']}>
                        Rating: {item?.rating?.rate}
                      </StyledText>
                      <StyledText classes={['color:black', 'text:sm']}>
                        Count: {item?.rating?.count}
                      </StyledText>
                    </StyledView>
                    <StyledView>
                      <Button
                        color={'#f4511e'}
                        onPress={() => addTocart(item.id)}
                        title="Add to cart"></Button>
                    </StyledView>
                  </StyledView>
                </StyledView>
              </StyledView>
            </StyledView>
          );
        })}
      </StyledView>
    </ScrollView>
  );
};

export default Products;
