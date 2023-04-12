import {ScrollView, StyleSheet} from 'react-native';
import Banner from '../components/home/Banner';
import Products from '../components/home/Products';
import {StyledText, StyledView} from '../styles/styles';
import Cart from './Cart';

const TabHome = () => {
  const seeAllProducts = () => {
    console.warn('clicked');
  };
  return (
    <ScrollView>
      {/* <StyledView classes={['flex:1']}>
        <Banner />
      </StyledView> */}
      {/* <StyledView classes={['flex:1']}>
        <StyledView
          classes={['flex:row', 'justify:between', 'mx:5', 'items:center']}>
          <StyledText
            classes={['color:[#f4511e]', 'text:2xl', 'font-weight:medium']}>
            Products
          </StyledText>
          <StyledText
            onPress={seeAllProducts}
            classes={[
              'color:white',
              'rounded:lg',
              'px:5',
              'py:1',
              'text:lg',
              'bg:[#f4511e]',
            ]}>
            See ALL
          </StyledText>
        </StyledView>
        <Banner flexDirection={'row'} gap={10} height={125} radius={100} />
      </StyledView> */}
      <StyledView classes={['flex:1', 'mx:4']}>
        <Cart />
        <Products />
      </StyledView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default TabHome;
